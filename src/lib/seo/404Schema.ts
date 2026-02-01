import type { Person, SoftwareSourceCode, WebPage } from 'schema-dts';
import { personLd, softwareLd } from '@/config/schema';

const webPageEntity: WebPage = {
  '@type': 'WebPage',
  '@id': 'https://vikiru.vercel.app/404/#404',
  url: 'https://vikiru.vercel.app/404',
  name: '404 | Page Not Found',
  description: 'The page you are looking for does not exist.',
};

export const notFoundData = [softwareLd, webPageEntity];

export const notFoundGraph = {
  '@context': 'https://schema.org',
  '@graph': [personLd, ...notFoundData],
};
