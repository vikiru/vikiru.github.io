import type { Person, SoftwareSourceCode, WebSite } from 'schema-dts';
import { personLd } from '@/config/schema';

const softwareEntity: SoftwareSourceCode = {
  '@type': 'SoftwareSourceCode',
  '@id': 'https://github.com/vikiru/grocadex/#software',
  name: 'grocadex',
  description:
    'A React Native mobile app to track grocery expiry dates and expenses.',
  url: 'https://github.com/vikiru/grocadex',
  author: { '@id': 'https://vikiru.vercel.app/#person' },
  maintainer: { '@id': 'https://vikiru.vercel.app/#person' },
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
  programmingLanguage: 'TypeScript',
  license: 'https://opensource.org/licenses/MIT',
  dateCreated: '2024-01-01T00:00:00.000Z',
  dateModified: '2026-01-28T00:00:00.000Z',
  codeRepository: 'https://github.com/vikiru/grocadex',
  runtimePlatform: ['React Native', 'Expo'],
};

const websiteEntity: WebSite = {
  '@type': 'WebSite',
  '@id': 'https://vikiru.github.io/grocadex/#homepage',
  name: 'Grocadex Documentation',
  description:
    'Documentation for Grocadex - A React Native mobile app to track grocery expiry dates and expenses.',
  url: 'https://vikiru.github.io/grocadex/',
  creator: { '@id': 'https://vikiru.vercel.app/#person' },
  inLanguage: 'en',
  about: { '@id': 'https://github.com/vikiru/grocadex/#software' },
  sameAs: ['https://github.com/vikiru/grocadex'],
  mainEntity: { '@id': 'https://github.com/vikiru/grocadex/#software' },
};

export const grocadexData = [softwareEntity, websiteEntity];

export const grocadexGraph = {
  '@context': 'https://schema.org',
  '@graph': [personLd, ...grocadexData],
};
