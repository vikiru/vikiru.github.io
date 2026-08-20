import { FaBook, FaGithub } from 'react-icons/fa6';
import { LuExternalLink } from 'react-icons/lu';

import type { Project } from '@/types/Project';

import { Button } from '@/lib/components/ui/button';

interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="relative -mt-14 flex flex-1 justify-center overflow-hidden px-4 py-20 md:px-40 lg:-mt-24">
      <div className="flex w-full flex-1 flex-col items-center gap-8 text-center">
        <div className="flex flex-col gap-6">
          <h1 className="font-heading text-h1 font-bold tracking-tight text-balance text-foreground">{project.name}</h1>
          <p className="body-large mx-auto max-w-[--container-measure] leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {project.githubUrl && (
            <Button asChild size="2xl">
              <a
                className="inline-flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                href={project.githubUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaGithub aria-hidden="true" className="size-icon-base" />
                GitHub
                <LuExternalLink aria-hidden="true" className="size-icon-sm opacity-70" />
              </a>
            </Button>
          )}
          {project.documentationUrl && (
            <Button asChild size="2xl" variant="outline">
              <a
                className="inline-flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                href={project.documentationUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaBook aria-hidden="true" className="size-icon-base" />
                Documentation
                <LuExternalLink aria-hidden="true" className="size-icon-sm opacity-70" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
