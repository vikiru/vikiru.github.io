import type {
  APIReference,
  SoftwareSourceCode,
  WebSite,
} from 'schema-dts';
import { personId } from '@/config/schema';

const softwareEntity: SoftwareSourceCode = {
  '@type': 'SoftwareSourceCode',
  '@id': 'https://github.com/vikiru/restasaurus/#software',
  name: 'RESTasaurus',
  description:
    'A dinosaur REST API built using Express, MongoDB and Mongoose with comprehensive data for almost 1200 dinosaurs.',
  url: 'https://github.com/vikiru/restasaurus',
  author: { '@id': personId },
  maintainer: { '@id': personId },
  keywords: [
    'restasaurus',
    'rest',
    'api',
    'mongodb',
    'mongoose',
    'express',
    'dinosaurs',
  ],
  version: '1.0.1',
  programmingLanguage: ['JavaScript', 'Node.js'],
  license: 'https://opensource.org/licenses/MIT',
  dateCreated: '2024-01-07T00:00:00.000Z',
  dateModified: '2024-02-01T00:00:00.000Z',
  codeRepository: 'https://github.com/vikiru/restasaurus',
  runtimePlatform: ['Node.js', 'Web'],
};

const apiEntity: APIReference = {
  '@type': 'APIReference',
  '@id': 'https://restasaurus.onrender.com/api/v1/#api',
  name: 'RESTasaurus API',
  description:
    'A dinosaur REST API built using Express, MongoDB and Mongoose with comprehensive data for almost 1200 dinosaurs.',
  url: 'https://restasaurus.onrender.com/api/v1',
  audience: 'Developers building dinosaur-related applications',
  provider: { '@id': personId },
};

const websiteEntity: WebSite = {
  '@type': 'WebSite',
  '@id': 'https://vikiru.github.io/restasaurus/#homepage',
  name: 'RESTasaurus Documentation',
  alternateName: 'RESTasaurus',
  description:
    'Documentation for RESTasaurus - A dinosaur REST API built using Express, MongoDB and Mongoose with comprehensive data for almost 1200 dinosaurs.',
  url: 'https://vikiru.github.io/restasaurus/',
  creator: { '@id': personId },
  license: 'https://opensource.org/licenses/MIT',
  inLanguage: 'en',
  dateModified: '2026-01-13T19:57:04.787Z',
  image: 'https://vikiru.github.io/restasaurus/logo.png',
  about: { '@id': 'https://github.com/vikiru/restasaurus/#software' },
  sameAs: [
    'https://github.com/vikiru/restasaurus',
    'https://restasaurus.onrender.com/api/v1',
  ],
  mainEntity: { '@id': 'https://github.com/vikiru/restasaurus/#software' },
  mainEntityOfPage: 'https://vikiru.github.io/restasaurus/',
};

export const restasaurusData = [softwareEntity, apiEntity, websiteEntity];

export const restasaurusGraph = {
  '@context': 'https://schema.org',
  '@graph': [{ '@id': personId }, ...restasaurusData],
};
