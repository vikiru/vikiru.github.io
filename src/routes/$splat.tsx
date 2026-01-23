import { createFileRoute, notFound } from '@tanstack/react-router';

export const Route = createFileRoute('/$splat')({
  head: () => ({
    title: 'Visakan Kirubakaran | 404 Not Found',
    meta: [
      {
        name: 'description',
        content: 'The page you are looking for does not exist.',
      },
      { property: 'og:title', content: 'Visakan Kirubakaran | 404 Not Found' },
      {
        property: 'og:description',
        content: 'The page you are looking for does not exist.',
      },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:url',
        content: typeof window !== 'undefined' ? window.location.href : '',
      },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: 'Visakan Kirubakaran | 404 Not Found' },
      {
        name: 'twitter:description',
        content: 'The page you are looking for does not exist.',
      },
    ],
    links: [
      {
        rel: 'canonical',
        href: typeof window !== 'undefined' ? window.location.href : '',
      },
    ],
  }),
  loader: () => {
    throw notFound();
  },
});
