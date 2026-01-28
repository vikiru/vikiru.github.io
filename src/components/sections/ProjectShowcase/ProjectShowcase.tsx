import { Link } from '@tanstack/react-router';
import { LuChevronLeft } from 'react-icons/lu';
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
    <article className="min-h-screen space-y-16 md:space-y-24 pb-24 relative">
      <Link
        aria-label="Back to all projects"
        className="xs:mt-12 top-24 left-4 z-40 inline-flex items-center gap-2 px-4 py-3 xs:p-4 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 text-sm text-muted-foreground lg:hover:text-primary lg:hover:border-primary/30 lg:focus-visible:ring-2 lg:focus-visible:ring-primary lg:focus-visible:ring-offset-2 transition-all shadow-sm motion-reduce:transition-none"
        hash="projects"
        to="/"
      >
        <LuChevronLeft aria-hidden="true" className="size-icon-sm" />
        <span>Projects</span>
      </Link>
      <ProjectHero project={project} />
      <ProjectMeta project={project} />
      <ProjectMedia project={project} />
      <Accomplishments project={project} />
    </article>
  );
}
