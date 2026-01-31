// TODO: Review and update this file later

import { createFileRoute } from '@tanstack/react-router';
import { CoursesPage } from '@/components/pages/CoursesPage';
import { siteConfig } from '@/config/site';
import { educationData } from '@/data/education';

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
      // TODO: Add JSON-LD schema once coursesGraphSchema is defined in lib/seo/coursesSchema
      // {
      //   type: 'application/ld+json',
      //   children: JSON.stringify(coursesGraphSchema),
      // },
    ],
  }),
  component: CoursesPage,
});
