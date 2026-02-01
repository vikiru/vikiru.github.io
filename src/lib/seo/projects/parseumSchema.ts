import type { SoftwareSourceCode, WebApplication, WebSite } from 'schema-dts';
import { personId } from '@/config/schema';

const softwareEntity: SoftwareSourceCode = {
  '@type': 'SoftwareSourceCode',
  '@id': 'https://github.com/vikiru/parseum/#software',
  name: 'Parseum',
  description:
    'A markdown to HTML parser and editor built using Peggy.js, React, TailwindCSS and DaisyUI.',
  url: 'https://github.com/vikiru/parseum',
  author: { '@id': personId },
  maintainer: { '@id': personId },
  keywords: [
    'markdown',
    'html',
    'parser',
    'editor',
    'peggy.js',
    'react',
    'tailwindcss',
    'daisyui',
  ],
  version: '1.0.0',
  programmingLanguage: ['JavaScript', 'React'],
  license: 'https://opensource.org/licenses/MIT',
  dateCreated: '2024-02-01T00:00:00.000Z',
  dateModified: '2024-03-31T00:00:00.000Z',
  codeRepository: 'https://github.com/vikiru/parseum',
  runtimePlatform: ['Node.js', 'Web', 'Browser'],
  targetProduct: { '@id': 'https://parseum.surge.sh/#web-app' },
};

const webAppEntity: WebApplication = {
  '@type': 'WebApplication',
  '@id': 'https://parseum.surge.sh/#web-app',
  name: 'Parseum',
  description:
    'A markdown to HTML parser and editor built using Peggy.js, React, TailwindCSS and DaisyUI.',
  url: 'https://parseum.surge.sh',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Web',
  browserRequirements: 'Requires JavaScript and a modern web browser',
  softwareVersion: '1.0.0',
  copyrightHolder: { '@id': personId },
  copyrightNotice: 'Copyright 2024 Visakan Kirubakaran. All rights reserved.',
  copyrightYear: 2024,
  mainEntity: { '@id': 'https://github.com/vikiru/parseum/#software' },
  mainEntityOfPage: 'https://parseum.surge.sh',
};

const websiteEntity: WebSite = {
  '@type': 'WebSite',
  '@id': 'https://vikiru.github.io/parseum/#homepage',
  name: 'Parseum Documentation',
  alternateName: 'Parseum',
  description:
    'Documentation for Parseum - A markdown to HTML parser and editor built using Peggy.js, React, TailwindCSS and DaisyUI.',
  url: 'https://vikiru.github.io/parseum/',
  creator: { '@id': personId },
  license: 'https://opensource.org/licenses/MIT',
  inLanguage: 'en',
  dateModified: '2026-01-12T07:02:47.085Z',
  image: 'https://vikiru.github.io/parseum/logo.png',
  about: { '@id': 'https://github.com/vikiru/parseum/#software' },
  sameAs: ['https://github.com/vikiru/parseum', 'https://parseum.surge.sh'],
  mainEntity: { '@id': 'https://github.com/vikiru/parseum/#software' },
  mainEntityOfPage: 'https://vikiru.github.io/parseum/',
};

export const parseumData = [softwareEntity, webAppEntity, websiteEntity];

export const parseumGraph = {
  '@context': 'https://schema.org',
  '@graph': [{ '@id': personId }, ...parseumData],
};
