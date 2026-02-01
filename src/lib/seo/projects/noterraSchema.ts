import type { SoftwareSourceCode, WebSite } from 'schema-dts';
import { personId } from '@/config/schema';

const softwareEntity: SoftwareSourceCode = {
  '@type': 'SoftwareSourceCode',
  '@id': 'https://github.com/vikiru/noterra/#software',
  name: 'noterra',
  description:
    'AI-powered learning tool to generate comprehensive notes and flashcards | TypeScript, Next.js, Gemini, PostgreSQL, Drizzle',
  url: 'https://github.com/vikiru/noterra',
  author: { '@id': personId },
  maintainer: { '@id': personId },
  keywords: [
    'nextjs',
    'gemini',
    'typescript',
    'postgresql',
    'drizzle',
    'tiptap',
    'clerk',
    'mermaid',
  ],
  version: '1.0.0',
  programmingLanguage: ['TypeScript', 'React', 'Next.js', 'Node.js'],
  license: 'https://opensource.org/licenses/MIT',
  dateCreated: '2025-01-01T00:00:00.000Z',
  dateModified: '2026-01-28T00:00:00.000Z',
  codeRepository: 'https://github.com/vikiru/noterra',
  runtimePlatform: ['Node.js', 'Web', 'Browser'],
};

const websiteEntity: WebSite = {
  '@type': 'WebSite',
  '@id': 'https://vikiru.github.io/noterra/#homepage',
  name: 'Noterra Documentation',
  description:
    'Documentation for Noterra - AI-powered learning tool to generate comprehensive notes and flashcards using Gemini AI, Next.js, and PostgreSQL.',
  url: 'https://vikiru.github.io/noterra/',
  creator: { '@id': personId },
  license: 'https://opensource.org/licenses/MIT',
  inLanguage: 'en',
  dateModified: '2026-01-28T00:00:00.000Z',
  about: { '@id': 'https://github.com/vikiru/noterra/#software' },
  sameAs: ['https://github.com/vikiru/noterra'],
  mainEntity: { '@id': 'https://github.com/vikiru/noterra/#software' },
  mainEntityOfPage: 'https://vikiru.github.io/noterra/',
};

export const noterraData = [softwareEntity, websiteEntity];

export const noterraGraph = {
  '@context': 'https://schema.org',
  '@graph': [{ '@id': personId }, ...noterraData],
};
