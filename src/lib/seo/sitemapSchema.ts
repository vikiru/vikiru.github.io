import type { CollectionPage } from 'schema-dts';

const collectionPageLd: CollectionPage = {
  '@type': 'CollectionPage',
  '@id': 'https://vikiru.vercel.app/sitemap',
  name: 'Visual sitemap of my portfolio website',
  description:
    'Visual sitemap of all of the pages on vikiru.vercel.app. Use the XML sitemap for search engine crawlers.',
  url: 'https://vikiru.vercel.app/sitemap',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: [
      // Static pages
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: { '@type': 'WebPage', '@id': 'https://vikiru.vercel.app/' },
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Visual Sitemap',
        item: {
          '@type': 'WebPage',
          '@id': 'https://vikiru.vercel.app/sitemap',
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Education & Courses',
        item: {
          '@type': 'WebPage',
          '@id': 'https://vikiru.vercel.app/education/courses',
        },
      },
      // Personal and Academic Projects
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Noterra',
        item: {
          '@type': 'WebPage',
          '@id': 'https://vikiru.vercel.app/projects/Noterra',
        },
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Paleodra',
        item: {
          '@type': 'WebPage',
          '@id': 'https://vikiru.vercel.app/projects/Paleodra',
        },
      },
      {
        '@type': 'ListItem',
        position: 6,
        name: 'Grocadex',
        item: {
          '@type': 'WebPage',
          '@id': 'https://vikiru.vercel.app/projects/Grocadex',
        },
      },
      {
        '@type': 'ListItem',
        position: 7,
        name: 'Kelbrum',
        item: {
          '@type': 'WebPage',
          '@id': 'https://vikiru.vercel.app/projects/Kelbrum',
        },
      },
      {
        '@type': 'ListItem',
        position: 8,
        name: 'Parseum',
        item: {
          '@type': 'WebPage',
          '@id': 'https://vikiru.vercel.app/projects/Parseum',
        },
      },
      {
        '@type': 'ListItem',
        position: 9,
        name: 'RESTasaurus',
        item: {
          '@type': 'WebPage',
          '@id': 'https://vikiru.vercel.app/projects/RESTasaurus',
        },
      },
      {
        '@type': 'ListItem',
        position: 10,
        name: 'Urvo',
        item: {
          '@type': 'WebPage',
          '@id': 'https://vikiru.vercel.app/projects/Urvo',
        },
      },
      {
        '@type': 'ListItem',
        position: 11,
        name: 'CodeSmell',
        item: {
          '@type': 'WebPage',
          '@id': 'https://vikiru.vercel.app/projects/CodeSmell',
        },
      },
      {
        '@type': 'ListItem',
        position: 12,
        name: 'discrete-sim',
        item: {
          '@type': 'WebPage',
          '@id': 'https://vikiru.vercel.app/projects/discrete-sim',
        },
      },
      {
        '@type': 'ListItem',
        position: 13,
        name: 'Mini-SurveyMonkey',
        item: {
          '@type': 'WebPage',
          '@id': 'https://vikiru.vercel.app/projects/Mini-SurveyMonkey',
        },
      },
      {
        '@type': 'ListItem',
        position: 14,
        name: 'Elevator Simulator',
        item: {
          '@type': 'WebPage',
          '@id': 'https://vikiru.vercel.app/projects/Elevator-Simulator',
        },
      },
      {
        '@type': 'ListItem',
        position: 15,
        name: 'Digital Risk',
        item: {
          '@type': 'WebPage',
          '@id': 'https://vikiru.vercel.app/projects/digitalRisk',
        },
      },
    ],
  },
};

export const sitemapData = [collectionPageLd];

export const sitemapGraph = {
  '@context': 'https://schema.org',
  '@graph': sitemapData,
};
