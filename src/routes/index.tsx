import { createFileRoute } from '@tanstack/react-router';
import HomePage from '@/components/pages/Home';
import { homepageGraphSchema } from '@/config/schema';
import { siteConfig } from '@/config/site';

const {
  site: { url: siteUrl },
} = siteConfig;

export const Route = createFileRoute('/')({
  ssr: false,
  head: () => ({
    meta: [
      {
        property: 'og:url',
        content: `${siteUrl}/`,
      },
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
