import type { SoftwareSourceCode, WebSite } from 'schema-dts';
import { personId } from '@/config/schema';

const softwareEntity: SoftwareSourceCode = {
  '@type': 'SoftwareSourceCode',
  '@id': 'https://github.com/vikiru/kelbrum/#software',
  name: 'Kelbrum',
  description:
    'An anime recommendation system designed to recommend anime similar to user-selected anime.',
  url: 'https://github.com/vikiru/kelbrum',
  author: { '@id': personId },
  maintainer: { '@id': personId },
  keywords: [
    'anime',
    'recommendation',
    'system',
    'machine-learning',
    'kelbrum',
    'similarity',
    'kmeans',
    'react',
    'tensorflow',
  ],
  version: '1.0.0',
  programmingLanguage: ['JavaScript', 'React'],
  license: 'https://opensource.org/licenses/MIT',
  dateCreated: '2024-02-01T00:00:00.000Z',
  dateModified: '2024-03-08T00:00:00.000Z',
  codeRepository: 'https://github.com/vikiru/kelbrum',
  runtimePlatform: ['Node.js', 'Web', 'Browser'],
  targetProduct: { '@id': 'https://kelbrum-v1.web.app/#web-app' },
};

const websiteEntity: WebSite = {
  '@type': 'WebSite',
  '@id': 'https://vikiru.github.io/kelbrum/#homepage',
  name: 'Kelbrum Documentation',
  alternateName: 'Kelbrum',
  description:
    'Documentation for Kelbrum - An anime recommendation system designed to recommend anime similar to user-selected anime.',
  url: 'https://vikiru.github.io/kelbrum/',
  creator: { '@id': 'https://vikiru.vercel.app/#person' },
  license: 'https://opensource.org/licenses/MIT',
  inLanguage: 'en',
  dateModified: '2026-01-15T07:57:59.912Z',
  image: 'https://vikiru.github.io/kelbrum/logo.png',
  about: { '@id': 'https://github.com/vikiru/kelbrum/#software' },
  sameAs: ['https://github.com/vikiru/kelbrum', 'https://kelbrum-v1.web.app'],
  mainEntity: { '@id': 'https://github.com/vikiru/kelbrum/#software' },
  mainEntityOfPage: 'https://vikiru.github.io/kelbrum/',
};

export const kelbrumData = [softwareEntity, websiteEntity];

export const kelbrumGraph = {
  '@context': 'https://schema.org',
  '@graph': [{ '@id': personId }, ...kelbrumData],
};
