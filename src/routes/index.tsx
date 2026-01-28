import { createFileRoute } from '@tanstack/react-router';
import { HomePage } from '@/components/pages/Home';
import { homepageGraphSchema } from '@/config/schema';
import { siteConfig } from '@/config/site';

const {
  site: { title: siteTitle, description: siteDescription, url: siteUrl },
} = siteConfig;

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: siteTitle },
      { name: 'description', content: siteDescription },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: siteTitle },
      { property: 'og:description', content: siteDescription },
      {
        property: 'og:url',
        content: `${siteUrl}/`,
      },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: siteTitle },
      { name: 'twitter:description', content: siteDescription },
    ],
    links: [{ rel: 'canonical', href: `${siteUrl}/` }],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(homepageGraphSchema),
      },
    ],
  }),
  component: HomePage,
});
