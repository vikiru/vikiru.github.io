import type { Graph } from 'schema-dts';
import { grocadexLd } from '@/lib/seo/projects/grocadexSchema';
import { kelbrumLd } from '@/lib/seo/projects/kelbrumSchema';
import { noterraLd } from '@/lib/seo/projects/noterraSchema';
import { paleodraLd } from '@/lib/seo/projects/paleodraSchema';
import { parseumLd } from '@/lib/seo/projects/parseumSchema';
import { restasaurusLd } from '@/lib/seo/projects/restasaurusSchema';
import { urvoLd } from '@/lib/seo/projects/urvoSchema';

const projectSchemaMap = new Map<string, Graph>([
  ['noterra', noterraLd],
  ['paleodra', paleodraLd],
  ['grocadex', grocadexLd],
  ['kelbrum', kelbrumLd],
  ['parseum', parseumLd],
  ['restasaurus', restasaurusLd],
  ['urvo', urvoLd],
]);

export { projectSchemaMap };
