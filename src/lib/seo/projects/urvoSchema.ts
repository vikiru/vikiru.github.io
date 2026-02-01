import type { SoftwareSourceCode, WebSite } from 'schema-dts';
import { personId } from '@/config/schema';

const softwareEntity: SoftwareSourceCode = {
  '@type': 'SoftwareSourceCode',
  '@id': 'https://github.com/vikiru/Urvo/#software',
  name: 'Urvo',
  description:
    'A multi-purpose discord bot with over 65 commands spanning across 8 categories!',
  url: 'https://github.com/vikiru/Urvo',
  author: { '@id': personId },
  maintainer: { '@id': personId },
  keywords: ['Urvo', 'discord', 'bot', 'discord.js', 'sqlite', 'sequelize'],
  version: '2.0.0',
  programmingLanguage: 'JavaScript',
  license: 'https://opensource.org/licenses/MIT',
  dateCreated: '2021-01-07T00:00:00.000Z',
  dateModified: '2023-02-01T00:00:00.000Z',
  codeRepository: 'https://github.com/vikiru/Urvo',
  runtimePlatform: ['Node.js', 'Web'],
};

const websiteEntity: WebSite = {
  '@type': 'WebSite',
  '@id': 'https://vikiru.github.io/Urvo/#homepage',
  name: 'Urvo Documentation',
  alternateName: 'Urvo',
  description:
    'Documentation for Urvo - A multi-purpose discord bot with over 65 commands spanning across 8 categories.',
  url: 'https://vikiru.github.io/Urvo/',
  creator: { '@id': personId },
  license: 'https://opensource.org/licenses/MIT',
  inLanguage: 'en',
  dateModified: '2026-01-15T01:27:54.111Z',
  image: 'https://vikiru.github.io/Urvo/logo.png',
  about: { '@id': 'https://github.com/vikiru/Urvo/#software' },
  sameAs: ['https://github.com/vikiru/Urvo'],
  mainEntity: { '@id': 'https://github.com/vikiru/Urvo/#software' },
  mainEntityOfPage: 'https://vikiru.github.io/Urvo/',
};

export const urvoData = [softwareEntity, websiteEntity];

export const urvoGraph = {
  '@context': 'https://schema.org',
  '@graph': [{ '@id': personId }, ...urvoData],
};
