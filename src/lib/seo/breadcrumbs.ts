import type { BreadcrumbList } from 'schema-dts';

import { siteConfig } from '@/config/site';

const {
  site: { url: siteUrl },
} = siteConfig;

export type Breadcrumb = {
  name: string;
  url?: string;
};

export function breadcrumbs(items: Breadcrumb[]): BreadcrumbList {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => {
      return {
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        ...(item.url ? { item: `${siteUrl}${item.url}` } : {}),
      };
    }),
  };
}
