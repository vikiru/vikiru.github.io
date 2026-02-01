import type { Graph } from 'schema-dts';
import { grocadexGraph } from '@/lib/seo/projects/grocadexSchema';
import { kelbrumGraph } from '@/lib/seo/projects/kelbrumSchema';
import { noterraGraph } from '@/lib/seo/projects/noterraSchema';
import { paleodraGraph } from '@/lib/seo/projects/paleodraSchema';
import { parseumGraph } from '@/lib/seo/projects/parseumSchema';
import { restasaurusGraph } from '@/lib/seo/projects/restasaurusSchema';
import { urvoGraph } from '@/lib/seo/projects/urvoSchema';

const projectSchemaMap = new Map<string, Graph>([
  ['noterra', noterraGraph as unknown as Graph],
  ['paleodra', paleodraGraph as unknown as Graph],
  ['grocadex', grocadexGraph as unknown as Graph],
  ['kelbrum', kelbrumGraph as unknown as Graph],
  ['parseum', parseumGraph as unknown as Graph],
  ['restasaurus', restasaurusGraph as unknown as Graph],
  ['urvo', urvoGraph as unknown as Graph],
]);

export { projectSchemaMap };
