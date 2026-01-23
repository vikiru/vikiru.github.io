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
        name: 'Courses',
        url: '/education/courses',
      },
      {
        name: 'Sitemap',
        url: '/sitemap',
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
