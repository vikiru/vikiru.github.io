import type {
  Graph,
  SoftwareSourceCode,
  TechArticle,
  WebSite,
} from 'schema-dts';
import { homepageId, personId, personLd } from '@/config/schema';
import { siteConfig } from '@/config/site';

const {
  site: { url: siteUrl },
} = siteConfig;

/**
 * Creates a JSON-LD TechArticle and SoftwareSourceCode schema for a specific project.
 */
export function createProjectSchema(project: {
  name: string;
  description: string;
  slug: string;
  githubUrl?: string;
  documentationUrl?: string;
  technologiesUsed: string[];
  datePublished?: string;
}) {
  const projectUrl = `${siteUrl}/projects/${project.slug}`;
  const articleId = `${projectUrl}/#article`;

  const techArticle: TechArticle = {
    '@type': 'TechArticle',
    '@id': articleId,
    headline: project.name,
    description: project.description,
    url: projectUrl,
    author: { '@id': personId },
    datePublished: project.datePublished,
    about: project.technologiesUsed.map((tech) => ({
      '@type': 'Thing',
      name: tech,
    })),
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
    const projectDocs: SoftwareSourceCode = {
      '@type': 'SoftwareSourceCode',
      '@id': `${project.documentationUrl}/#documentation`,
      name: `${project.name} Documentation`,
      description: `Documentation for ${project.name}`,
      url: project.documentationUrl,
      author: { '@id': personId },
      programmingLanguage: project.technologiesUsed,
      codeRepository: project.documentationUrl,
    };
    graph.push(projectDocs);
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  } as Graph;
}
