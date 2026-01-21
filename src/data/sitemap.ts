import { featuredProjects, otherProjects } from '@/data/projects';
import type { Project } from '@/types/Project';
import type { SitemapGroup } from '@/types/SitemapGroup';
import type { SitemapItem } from '@/types/SitemapItem';

const sitemap: SitemapGroup[] = [
  {
    category: 'Main Content',
    items: [
      {
        name: 'Home',
        url: '/',
      },
      {
        name: 'About',
        url: '/about',
      },
      {
        name: 'Courses',
        url: '/education/courses',
      },
      {
        name: 'Projects',
        url: '/projects',
      },
      {
        name: 'Contact',
        url: '/contact',
      },
    ],
  },
  {
    category: 'Featured Projects',
    items: featuredProjects.map((project: Project): SitemapItem => {
      return {
        name: project.name,
        url: project.projectPageUrl || '/',
      };
    }),
  },
  {
    category: 'Other Projects',
    items: otherProjects.map((project: Project): SitemapItem => {
      return {
        name: project.name,
        url: project.projectPageUrl || '/',
      };
    }),
  },
];

export default sitemap;
