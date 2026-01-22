import type { Project } from '@/types/Project';
import { Accomplishments } from './Accomplishments';
import { ProjectHero } from './ProjectHero';
import { ProjectMedia } from './ProjectMedia';
import { ProjectMeta } from './ProjectMeta';

interface ProjectShowcaseProps {
  project: Project;
}

export function ProjectShowcase({ project }: ProjectShowcaseProps) {
  return (
    <article className="min-h-screen space-y-16 md:space-y-24 pb-24">
      <ProjectHero project={project} />
      <ProjectMeta project={project} />
      <ProjectMedia project={project} />
      <Accomplishments project={project} />
    </article>
  );
}
