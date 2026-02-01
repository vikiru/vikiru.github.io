import type { CollectionPage, Course, Person } from 'schema-dts';
import { homepageLd, personLd, softwareLd } from '@/config/schema';

const coursesPageEntity: CollectionPage = {
  '@type': 'CollectionPage',
  '@id': 'https://vikiru.vercel.app/education/courses/#collection',
  name: 'University Courses',
  description:
    'Explore the university courses I took during my degree at Carleton University.',
  url: 'https://vikiru.vercel.app/education/courses',
  about: { '@id': 'https://vikiru.vercel.app/#person' },
  mainEntity: { '@id': 'https://vikiru.vercel.app/#person' },
  isPartOf: { '@id': 'https://vikiru.vercel.app' },
};

export const coursesData = [coursesPageEntity];

export const coursesGraphSchema = {
  '@context': 'https://schema.org',
  '@graph': [personLd, ...coursesData],
};
