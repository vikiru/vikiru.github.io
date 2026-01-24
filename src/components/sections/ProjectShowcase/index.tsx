import { Accomplishments } from '@/components/sections/ProjectShowcase/Accomplishments';
import { ProjectHero } from '@/components/sections/ProjectShowcase/ProjectHero';
import { ProjectMedia } from '@/components/sections/ProjectShowcase/ProjectMedia';
import { ProjectMeta } from '@/components/sections/ProjectShowcase/ProjectMeta';
import type { Project } from '@/types/Project';

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
