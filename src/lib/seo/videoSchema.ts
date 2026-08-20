import type { VideoObject } from 'schema-dts';

import type { Project } from '@/types/Project';

import { siteConfig } from '@/config/site';

const {
  site: { url: siteUrl },
} = siteConfig;

export function videoObject(project: Project): VideoObject {
  return {
    '@type': 'VideoObject',
    name: project.name,
    description: project.description,
    contentUrl: `${siteUrl}${project.videoPath}`,
    url: `${siteUrl}${project.projectPageUrl}`,
  };
}
