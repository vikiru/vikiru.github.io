import { siteConfig } from '../../config/site';
import { projectData } from '../../data/projects';

const monthNumbers: Record<string, number> = {
  jan: 1,
  feb: 2,
  mar: 3,
  apr: 4,
  may: 5,
  jun: 6,
  jul: 7,
  aug: 8,
  sep: 9,
  sept: 9,
  oct: 10,
  nov: 11,
  dec: 12,
};

function lastDayOfMonth(value: string): string | undefined {
  const match = /^([a-z]+)\s+(\d{4})$/i.exec(value.trim());
  if (!match) return undefined;
  const month = monthNumbers[match[1].toLowerCase()];
  if (!month) return undefined;
  return new Date(Date.UTC(Number(match[2]), month, 0)).toISOString().slice(0, 10);
}

export function lastmodFor(path: string): string {
  const project = projectData.projects.find((item) => {
    return item.projectPageUrl === path || `/projects/${item.slug}` === path;
  });
  if (project) {
    return lastDayOfMonth(project.endDate) ?? siteConfig.site.contentLastModified;
  }
  return siteConfig.site.contentLastModified;
}
