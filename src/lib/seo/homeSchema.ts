import type { Graph } from 'schema-dts';
import { homepageLd, personLd, softwareLd } from '@/config/schema';

export const homeData = [softwareLd, homepageLd];

export const homeGraphSchema: Graph = {
  '@context': 'https://schema.org',
  '@graph': [personLd, ...homeData],
};
