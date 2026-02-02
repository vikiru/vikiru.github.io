import { createFileRoute } from '@tanstack/react-router';
import { CoursesPage } from '@/components/pages/CoursesPage';
import { siteConfig } from '@/config/site';
import { coursesGraphSchema } from '@/lib/seo/coursesSchema';

const {
  site: { url: siteUrl },
} = siteConfig;

const metadata = {
  title: 'Visakan Kirubakaran | Courses',
  description:
    'Explore the university courses I took during my degree at Carleton University.',
  url: '/education/courses',
};

export const Route = createFileRoute('/education/courses')({
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
        children: JSON.stringify(coursesGraphSchema),
      },
    ],
  }),
  component: CoursesPage,
});
