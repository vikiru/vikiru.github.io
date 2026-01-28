import type {
  Graph,
  SoftwareSourceCode,
  TechArticle,
  WebSite,
} from 'schema-dts';
import { homepageId, personId, personLd } from '@/config/schema';
import { siteConfig } from '@/config/site';
import type { Project } from '@/types/Project';

const {
  site: { url: siteUrl },
} = siteConfig;

export function createProjectSchema(project: Project) {
  const projectUrl = `${siteUrl}/projects/${project.slug}`;
  const articleId = `${projectUrl}/#article`;

  const techArticle: TechArticle = {
    '@type': 'TechArticle',
    '@id': articleId,
    headline: project.name,
    description: project.description,
    url: projectUrl,
    author: { '@id': personId },
    datePublished: new Date().toISOString(),
    about: { '@id': '' },
    isPartOf: { '@id': homepageId },
    mainEntityOfPage: projectUrl,
  };

  const webSite: WebSite = {
    '@type': 'WebSite',
    '@id': homepageId,
    name: 'Visakan Kirubakaran Portfolio',
    url: `${siteUrl}/`,
  };

  const graph: any[] = [personLd, techArticle, webSite];

  if (project.githubUrl) {
    const projectCode: SoftwareSourceCode = {
      '@type': 'SoftwareSourceCode',
      '@id': `${project.githubUrl}/#software`,
      name: `${project.name} Source Code`,
      description: `Source code for ${project.name}`,
      url: project.githubUrl,
      author: { '@id': personId },
      programmingLanguage: project.technologiesUsed,
      codeRepository: project.githubUrl,
    };
    graph.push(projectCode);
  }

  if (project.documentationUrl) {
    const projectDocs: WebSite = {
      '@type': 'WebSite',
      '@id': `${project.documentationUrl}/#homepage`,
      name: `${project.name} Documentation`,
      description: `Documentation for ${project.name}`,
      url: project.documentationUrl,
      author: { '@id': personId },
    };
    graph.push(projectDocs);
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  } as Graph;
}
