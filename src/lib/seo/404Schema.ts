import type { WebPage } from 'schema-dts';

const webPageEntity: WebPage = {
  '@type': 'WebPage',
  '@id': 'https://vikiru.vercel.app/404/#404',
  url: 'https://vikiru.vercel.app/404',
  name: 'Visakan Kirubakaran | 404 Not Found',
  description: 'The page you are looking for does not exist.',
};

export const notFoundData = [webPageEntity];

export const notFoundGraph = {
  '@context': 'https://schema.org',
  '@graph': [webPageEntity],
};
