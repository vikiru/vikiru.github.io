import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import type { Graph } from 'schema-dts';
import { projectData } from '@/data/projects';
import { coursesGraphSchema } from '@/lib/seo/coursesSchema';
import { homeGraphSchema } from '@/lib/seo/homeSchema';
import { projectSchemaMap } from '@/lib/seo/projects/projectMap';

type FlatNode = {
  '@type'?: string;
  itemListElement?: Array<{ position: number; name: string }>;
};

function flatNodes(graph: Graph): FlatNode[] {
  return (graph['@graph'] as unknown as FlatNode[]);
}

function nodeTypes(graph: Graph): string[] {
  return flatNodes(graph).map((node) => node['@type'] ?? '');
}

function breadcrumbOf(graph: Graph): FlatNode | undefined {
  return flatNodes(graph).find((node) => node['@type'] === 'BreadcrumbList');
}

const visibleProjects = projectData.projects.filter(
  (project) => !project.hidden,
);

describe('JSON-LD structured data', () => {
  it('home graph contains Person, WebSite, and SoftwareSourceCode', () => {
    const types = nodeTypes(homeGraphSchema);
    assert.ok(types.includes('Person'));
    assert.ok(types.includes('WebSite'));
    assert.ok(types.includes('SoftwareSourceCode'));
  });

  it('every visible project has a graph with a BreadcrumbList', () => {
    for (const project of visibleProjects) {
      const graph = projectSchemaMap.get(project.slug.toLowerCase());
      assert.ok(graph, `missing graph for ${project.slug}`);
      const types = nodeTypes(graph);
      assert.ok(
        types.includes('BreadcrumbList'),
        `${project.slug} missing BreadcrumbList`,
      );
    }
  });

  it('VideoObject is present exactly when the project has a video', () => {
    for (const project of visibleProjects) {
      const graph = projectSchemaMap.get(project.slug.toLowerCase());
      assert.ok(graph, `missing graph for ${project.slug}`);
      const types = nodeTypes(graph);
      assert.equal(
        types.includes('VideoObject'),
        project.videoPath.length > 0,
        `VideoObject mismatch for ${project.slug}`,
      );
    }
  });

  it('project breadcrumbs are sequential Home > Projects > name', () => {
    for (const project of visibleProjects) {
      const graph = projectSchemaMap.get(project.slug.toLowerCase());
      assert.ok(graph, `missing graph for ${project.slug}`);
      const breadcrumb = breadcrumbOf(graph);
      assert.ok(breadcrumb, `${project.slug} missing BreadcrumbList`);
      assert.equal(breadcrumb.itemListElement?.length, 3);
      assert.deepEqual(
        breadcrumb.itemListElement?.map((item) => item.position),
        [1, 2, 3],
      );
      assert.equal(breadcrumb.itemListElement?.[0].name, 'Home');
      assert.equal(breadcrumb.itemListElement?.[1].name, 'Projects');
      assert.equal(breadcrumb.itemListElement?.[2].name, project.name);
    }
  });

  it('courses graph contains a BreadcrumbList', () => {
    const graph = coursesGraphSchema as Graph;
    const types = nodeTypes(graph);
    assert.ok(types.includes('BreadcrumbList'));
    const breadcrumb = breadcrumbOf(graph);
    assert.ok(breadcrumb);
    assert.deepEqual(
      breadcrumb.itemListElement?.map((item) => item.name),
      ['Home', 'Education', 'Courses'],
    );
  });

  it('all graphs serialize to valid JSON with non-empty graphs', () => {
    const graphs = [
      homeGraphSchema,
      coursesGraphSchema as Graph,
      ...projectSchemaMap.values(),
    ];
    for (const graph of graphs) {
      const serialized = JSON.stringify(graph);
      assert.ok(serialized);
      const parsed = JSON.parse(serialized) as { '@graph': unknown[] };
      assert.ok(parsed['@graph'].length > 0);
    }
  });
});
