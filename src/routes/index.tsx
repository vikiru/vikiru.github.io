import { createFileRoute } from '@tanstack/react-router';

import { HomePage } from '@/components/pages/Home';
import { siteConfig } from '@/config/site';
import { homeGraphSchema } from '@/lib/seo/homeSchema';

const {
  site: { title: siteTitle, description: siteDescription, url: siteUrl },
} = siteConfig;

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: siteTitle },
      {
        name: 'description',
        content:
          'Personal portfolio of Visakan Kirubakaran, a software developer with a passion for software and web development, based in Ottawa, ON.',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: siteTitle },
      { property: 'og:description', content: siteDescription },
      { property: 'og:url', content: `${siteUrl}/` },
      { property: 'og:image', content: `${siteUrl}/og-image.png` },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:type', content: 'image/png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: siteTitle },
      { name: 'twitter:description', content: siteDescription },
      { name: 'twitter:image', content: `${siteUrl}/og-image.png` },
    ],
    links: [{ rel: 'canonical', href: `${siteUrl}/` }],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(homeGraphSchema),
        suppressHydrationWarning: true,
      },
    ],
  }),
  component: HomePage,
});
