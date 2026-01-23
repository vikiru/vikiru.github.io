import { LuExternalLink, LuGithub } from 'react-icons/lu';
import { Button } from '@/lib/components/ui/button';
import type { Project } from '@/types/Project';

interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="px-4 md:px-40 flex flex-1 justify-center py-16 md:py-24 relative overflow-hidden">
      <div className="layout-content-container flex flex-col max-w-[60rem] flex-1 items-center text-center gap-8">
        <div className="flex flex-col gap-6">
          <h1 className="text-h1 font-bold tracking-tight font-heading text-foreground text-balance">
            {project.name}
          </h1>
          <p className="body-large text-muted-foreground leading-relaxed max-w-[45rem] mx-auto">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-4 justify-center mt-6">
          {project.githubUrl && (
            <Button asChild size="xl">
              <a
                className="inline-flex items-center gap-2"
                href={project.githubUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <LuGithub className="h-5 w-5" />
                Source Code
                <LuExternalLink className="h-4 w-4 opacity-70" />
              </a>
            </Button>
          )}
          {project.documentationUrl && (
            <Button asChild size="xl" variant="outline">
              <a
                className="inline-flex items-center gap-2"
                href={project.documentationUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                Documentation
                <LuExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
