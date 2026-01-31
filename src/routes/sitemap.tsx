// TODO: Review and update this file later

import { createFileRoute } from '@tanstack/react-router';
import { SitemapPage } from '@/components/pages/Sitemap';
import { sitemapLd } from '@/lib/seo/sitemapSchema';
import { siteConfig } from '@/config/site';

const {
  site: { url: siteUrl },
} = siteConfig;

const metadata = {
  title: 'Visakan Kirubakaran | Sitemap',
  description:
    'Explore a comprehensive list of all pages on this portfolio website.',
  url: '/sitemap',
};

export const Route = createFileRoute('/sitemap')({
  ssr: false,
  head: () => ({
    meta: [
      { title: metadata.title },
      { name: 'description', content: metadata.description },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: metadata.title },
      { property: 'og:description', content: metadata.description },
      {
        property: 'og:url',
        content: `${siteUrl}${metadata.url}`,
      },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: metadata.title },
      { name: 'twitter:description', content: metadata.description },
    ],
    links: [{ rel: 'canonical', href: `${siteUrl}${metadata.url}` }],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(sitemapLd),
      },
    ],
  }),
  component: SitemapPage,
});
