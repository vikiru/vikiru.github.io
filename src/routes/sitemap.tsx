import { createFileRoute } from '@tanstack/react-router';
import { SitemapPage } from '@/components/pages/Sitemap';
import { siteConfig } from '@/config/site';
import { sitemapGraph } from '@/lib/seo/sitemapSchema';

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
      { property: 'og:url', content: `${siteUrl}${metadata.url}` },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: metadata.title },
      { name: 'twitter:description', content: metadata.description },
    ],
    links: [{ rel: 'canonical', href: `${siteUrl}${metadata.url}` }],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(sitemapGraph),
        suppressHydrationWarning: true,
      },
    ],
  }),
  component: SitemapPage,
});
