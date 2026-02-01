import type { CollectionPage } from 'schema-dts';
import { personId } from '@/config/schema';

const coursesPageEntity: CollectionPage = {
  '@type': 'CollectionPage',
  '@id': 'https://vikiru.vercel.app/education/courses/#collection',
  name: 'Courses taken for Bachelor of Software Engineering (B.Eng), 2018–2023, Carleton University – Visakan Kirubakaran',
  description:
    'Explore the university courses I took during my degree at Carleton University.',
  url: 'https://vikiru.vercel.app/education/courses',
  about: { '@id': personId },
  mainEntity: { '@id': personId },
  isPartOf: { '@id': 'https://vikiru.vercel.app' },
};

export const coursesData = [coursesPageEntity];

export const coursesGraphSchema = {
  '@context': 'https://schema.org',
  '@graph': [{ '@id': personId }, ...coursesData],
};
