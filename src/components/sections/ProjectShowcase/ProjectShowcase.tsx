import { Link } from '@tanstack/react-router';
import { LuArrowLeft } from 'react-icons/lu';

import type { Project } from '@/types/Project';

import { Accomplishments } from '@/components/sections/ProjectShowcase/Accomplishments';
import { ProjectHero } from '@/components/sections/ProjectShowcase/ProjectHero';
import { ProjectMedia } from '@/components/sections/ProjectShowcase/ProjectMedia';
import { ProjectMeta } from '@/components/sections/ProjectShowcase/ProjectMeta';
import { Button } from '@/lib/components/ui/button';

interface ProjectShowcaseProps {
  project: Project;
}

export function ProjectShowcase({ project }: ProjectShowcaseProps) {
  return (
    <article className="min-h-screen space-y-16 pt-12 pb-24 md:space-y-24">
      <Button asChild className="left-4 z-40 rounded-xl xs:mt-12" size="2xl" variant="outline">
        <Link aria-label="Back to all projects" hash="projects" to="/">
          <LuArrowLeft aria-hidden="true" className="size-icon-sm" />
          <span>Projects</span>
        </Link>
      </Button>
      <ProjectHero project={project} />
      <ProjectMeta project={project} />
      <ProjectMedia project={project} />
      <Accomplishments project={project} />
    </article>
  );
}
