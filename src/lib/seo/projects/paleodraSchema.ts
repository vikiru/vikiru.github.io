import type { SoftwareSourceCode, WebSite } from 'schema-dts';
import { personId } from '@/config/schema';
import { restasaurusData } from '@/lib/seo/projects/restasaurusSchema';

const paleodraSoftwareEntity: SoftwareSourceCode = {
  '@type': 'SoftwareSourceCode',
  '@id': 'https://github.com/vikiru/paleodra/#software',
  name: 'paleodra',
  description:
    'A dinosaur discovery web application that allows users to explore, learn, and track dinosaur species.',
  url: 'https://github.com/vikiru/paleodra',
  author: { '@id': personId },
  maintainer: { '@id': personId },
  keywords: [
    'paleodra',
    'nextjs',
    'react',
    'typescript',
    'dinosaur',
    'discovery',
  ],
  version: '1.0.0',
  programmingLanguage: ['TypeScript', 'React', 'Next.js'],
  license: 'https://opensource.org/licenses/MIT',
  codeRepository: 'https://github.com/vikiru/paleodra',
  runtimePlatform: ['Node.js', 'Web', 'Browser'],
  hasPart: { '@id': 'https://github.com/vikiru/restasaurus/#software' },
};

const paleodraWebsiteEntity: WebSite = {
  '@type': 'WebSite',
  '@id': 'https://vikiru.github.io/paleodra/#homepage',
  name: 'Paleodra Documentation',
  description:
    'Documentation for Paleodra - A dinosaur discovery web app powered by RESTasaurus API (comprehensive info on almost 1,200 dinosaur species).',
  url: 'https://vikiru.github.io/paleodra/',
  creator: { '@id': personId },
  license: 'https://opensource.org/licenses/MIT',
  inLanguage: 'en',
  about: { '@id': 'https://github.com/vikiru/paleodra/#software' },
  mainEntity: { '@id': 'https://github.com/vikiru/paleodra/#software' },
  mainEntityOfPage: 'https://vikiru.github.io/paleodra/',
};

export const paleodraData = [
  paleodraSoftwareEntity,
  paleodraWebsiteEntity,
  ...restasaurusData,
];

export const paleodraGraph = {
  '@context': 'https://schema.org',
  '@graph': [{ '@id': personId }, ...paleodraData],
};
