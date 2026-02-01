import type { SoftwareSourceCode, WebSite } from 'schema-dts';
import { personId } from '@/config/schema';

const softwareEntity: SoftwareSourceCode = {
  '@type': 'SoftwareSourceCode',
  '@id': 'https://github.com/vikiru/grocadex/#software',
  name: 'grocadex',
  description:
    'A React Native mobile app to track grocery expiry dates and expenses.',
  url: 'https://github.com/vikiru/grocadex',
  author: { '@id': personId },
  maintainer: { '@id': personId },
  keywords: [
    'react native',
    'expo',
    'gluestack',
    'nativewind',
    'zustand',
    'tanstack',
    'prisma',
    'postgresql',
  ],
  version: '1.0.1',
  programmingLanguage: ['TypeScript', 'React Native'],
  license: 'https://opensource.org/licenses/MIT',
  dateCreated: '2024-01-01T00:00:00.000Z',
  dateModified: '2026-01-28T00:00:00.000Z',
  codeRepository: 'https://github.com/vikiru/grocadex',
  runtimePlatform: ['React Native', 'Expo', 'Web', 'Android', 'iOS'],
};

const websiteEntity: WebSite = {
  '@type': 'WebSite',
  '@id': 'https://vikiru.github.io/grocadex/#homepage',
  name: 'Grocadex Documentation',
  description:
    'Documentation for Grocadex - A React Native mobile app to track grocery expiry dates and expenses.',
  url: 'https://vikiru.github.io/grocadex/',
  creator: { '@id': personId },
  license: 'https://opensource.org/licenses/MIT',
  inLanguage: 'en',
  about: { '@id': 'https://github.com/vikiru/grocadex/#software' },
  sameAs: ['https://github.com/vikiru/grocadex'],
  mainEntity: { '@id': 'https://github.com/vikiru/grocadex/#software' },
};

export const grocadexData = [softwareEntity, websiteEntity];

export const grocadexGraph = {
  '@context': 'https://schema.org',
  '@graph': [{ '@id': personId }, ...grocadexData],
};
