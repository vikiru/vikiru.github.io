import { featuredProjects, otherProjects } from '~data/index';
import { Project, SitemapGroup, SitemapItem } from '~types/index';

const sitemap: SitemapGroup[] = [
    {
        category: 'Main',
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
                name: 'Projects',
                url: '/projects',
            },
            {
                name: 'Skills',
                url: '/skills',
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
