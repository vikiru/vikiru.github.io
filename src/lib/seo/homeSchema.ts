import type { WebSite } from 'schema-dts';
import { homepageLd, softwareLd } from '@/config/schema';

export const homeData = [softwareLd, homepageLd];

export const homeGraphSchema = {
  '@context': 'https://schema.org',
  '@graph': [...homeData],
};
