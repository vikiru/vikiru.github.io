import { Link } from '@tanstack/react-router';
import { memo } from 'react';
import { FaBook, FaGithub } from 'react-icons/fa6';
import { LuArrowRight } from 'react-icons/lu';
import { Badge } from '@/lib/components/ui/badge';
import { Card, CardContent } from '@/lib/components/ui/card';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: {
    slug: string;
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    technologiesUsed: string[];
    projectPageUrl: string;
    githubUrl?: string;
    documentationUrl?: string;
  };
  className?: string;
}

export const ProjectCard = memo(function ProjectCard({
  project,
  className,
}: ProjectCardProps) {
  return (
    <Card
      className={cn(
        'group hover:bg-primary/5 relative flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0 cursor-pointer',
        'hover:-translate-y-1',
        'hover:border-primary/30',
        className,
      )}
      id={project.name}
    >
      <Link
        aria-label={`View details for ${project.name}`}
        className="absolute inset-0"
        to={project.projectPageUrl}
      />
      <CardContent className="p-6 flex flex-col h-full">
        <section id="project-header">
          <div className="flex items-center justify-between gap-4 mb-3">
            <h3 className="text-xl font-bold text-foreground hover:text-primary transition-colors motion-reduce:transition-none">
              {project.name}
            </h3>
            <div className="flex items-center gap-1" id="project-links">
              {project.githubUrl && (
                <a
                  aria-label="View source code"
                  className="relative z-10 p-3 xs:p-4 lg:p-5 text-muted-foreground hover:text-accent transition-colors rounded-md motion-reduce:transition-none"
                  href={project.githubUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaGithub aria-hidden="true" className="size-icon-base" />
                </a>
              )}
              {project.documentationUrl && (
                <a
                  aria-label="View documentation"
                  className="relative z-10 p-3 xs:p-4 lg:p-5 text-muted-foreground hover:text-accent transition-colors rounded-md motion-reduce:transition-none"
                  href={project.documentationUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaBook aria-hidden="true" className="size-icon-base" />
                </a>
              )}
            </div>
          </div>
        </section>

        <section className="grow" id="project-description">
          <p className="text-muted-foreground leading-relaxed text-sm line-clamp-3">
            {project.description}
          </p>
        </section>

        <section className="py-4" id="tech-stack">
          <div className="flex flex-wrap gap-1.5">
            {project.technologiesUsed.slice(0, 6).map((tech) => (
              <Badge
                className="text-xs font-normal"
                key={tech}
                variant="secondary"
              >
                {tech}
              </Badge>
            ))}
            {project.technologiesUsed.length > 6 && (
              <Badge className="text-xs font-normal" variant="outline">
                +{project.technologiesUsed.length - 6}
              </Badge>
            )}
          </div>
        </section>
        <div className="mt-auto pt-6 border-t border-border">
          <Link
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors text-sm font-medium motion-reduce:transition-none"
            params={{ slug: project.slug }}
            to="/projects/$slug"
          >
            Read More
            <LuArrowRight
              aria-hidden="true"
              className="size-icon-sm hover:translate-x-1 transition-transform motion-reduce:transition-none motion-reduce:hover:translate-x-0"
            />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
});
