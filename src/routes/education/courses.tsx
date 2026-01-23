import { createFileRoute } from '@tanstack/react-router';
import CoursesPage from '@/components/sections/Education/CoursesPage';
import { homepageGraphSchema } from '@/config/schema';
import { siteConfig } from '@/config/site';

const {
  site: { url: siteUrl },
} = siteConfig;

export const Route = createFileRoute('/education/courses')({
  ssr: false,
  head: () => ({
    meta: [
      { title: 'Visakan Kirubakaran | Courses' },
      {
        name: 'description',
        content:
          'Educational background and university coursework of Visakan Kirubakaran.',
      },
      { property: 'og:url', content: `${siteUrl}/education/courses` },
    ],
    links: [{ rel: 'canonical', href: `${siteUrl}/education/courses` }],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(homepageGraphSchema),
      },
    ],
  }),
  component: CoursesPage,
});
