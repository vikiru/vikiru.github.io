import { createFileRoute, notFound } from '@tanstack/react-router';
import { Layout } from '@/components/layout/Layout';
import { ProjectShowcase } from '@/components/sections/ProjectShowcase/ProjectShowcase';
import { siteConfig } from '@/config/site';
import { projectData } from '@/data/projects';
import { projectSchemaMap } from '@/lib/seo/projects/projectMap';
import type { Graph } from 'schema-dts';
import type { Project } from '@/types/Project';

const {
  site: { url: siteUrl },
} = siteConfig;

export const Route = createFileRoute('/projects/$slug')({
  ssr: false,
  loader: ({ params: { slug } }) => {
    const project = projectData.projects.find(
      (p: Project) => p.slug.toLowerCase() === slug.toLowerCase(),
    );
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const project = loaderData?.project;
    if (!project) return {};

    const description = `Learn about ${project.name}, a brief overview, technologies used, a demo and my personal accomplishments.`;
    const title = `Visakan Kirubakaran | ${project.name}`;
    const canonical = `${siteUrl}/projects/${project.slug}`;
    const projectGraphSchema: Graph | undefined = projectSchemaMap.get(
      project.slug.toLowerCase(),
    );

    return {
      meta: [
        { title },
        { name: 'description', content: description },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:type', content: 'article' },
        { property: 'og:url', content: canonical },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
      ],
      links: [{ rel: 'canonical', href: canonical }],
      scripts: projectGraphSchema
        ? [
            {
              type: 'application/ld+json',
              children: JSON.stringify(projectGraphSchema),
            },
          ]
        : [],
    };
  },
  component: ProjectShowcasePage,
});

function ProjectShowcasePage() {
  const { project } = Route.useLoaderData();

  return (
    <Layout>
      <ProjectShowcase project={project} />
    </Layout>
  );
}
