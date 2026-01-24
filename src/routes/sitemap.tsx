import { createFileRoute } from '@tanstack/react-router';
import SitemapPage from '@/components/sections/Sitemap';
import { siteConfig } from '@/config/site';

const {
  site: { url: siteUrl },
} = siteConfig;

const metadata = {
  title: 'Visakan Kirubakaran | Sitemap',
  description: 'View an overview of all the key pages on my portfolio webiste.',
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
  }),
  component: SitemapPage,
});
