import { createFileRoute } from '@tanstack/react-router';
import SitemapPage from '@/components/sections/Sitemap';
import { homepageGraphSchema } from '@/config/schema';
import { siteConfig } from '@/config/site';

const {
  site: { url: siteUrl },
} = siteConfig;

export const Route = createFileRoute('/sitemap')({
  ssr: false,
  head: () => ({
    meta: [
      { title: 'Visakan Kirubakaran | Sitemap' },
      {
        name: 'description',
        content:
          'Visual overview of the portfolio structure and all available links.',
      },
      { property: 'og:url', content: `${siteUrl}/sitemap` },
    ],
    links: [{ rel: 'canonical', href: `${siteUrl}/sitemap` }],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(homepageGraphSchema),
      },
    ],
  }),
  component: SitemapPage,
});
