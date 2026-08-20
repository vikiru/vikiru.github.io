import { Link } from '@tanstack/react-router';
import { memo } from 'react';
import { FaBook, FaGithub } from 'react-icons/fa6';

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

export const ProjectCard = memo(function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <Card
      className={cn(
        'group relative flex h-full cursor-pointer flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/5 hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0',
        'hover:-translate-y-1',
        'hover:border-primary/30',
        className,
      )}
      id={project.name}
    >
      <Link
        aria-label={`View details for ${project.name}`}
        className="absolute inset-0 z-10"
        to={project.projectPageUrl}
      />
      <CardContent className="flex h-full flex-col p-6">
        <div className="flex shrink-0 items-center justify-between gap-4">
          <h3 className="truncate text-h5 font-bold text-foreground transition-colors hover:text-primary motion-reduce:transition-none">
            {project.name}
          </h3>
          <div className="flex shrink-0 items-center gap-1">
            {project.githubUrl && (
              <a
                aria-label={`View source code for ${project.name}`}
                className="relative z-20 rounded-md p-2 text-muted-foreground transition-colors hover:text-primary motion-reduce:transition-none"
                href={project.githubUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaGithub aria-hidden="true" className="size-icon-base" />
              </a>
            )}
            {project.documentationUrl && (
              <a
                aria-label={`View documentation for ${project.name}`}
                className="relative z-20 rounded-md p-2 text-muted-foreground transition-colors hover:text-primary motion-reduce:transition-none"
                href={project.documentationUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaBook aria-hidden="true" className="size-icon-base" />
              </a>
            )}
          </div>
        </div>

        <p className="body-base text-wrap-pretty mt-4 max-w-[--container-measure] flex-1 leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-6 flex shrink-0 flex-wrap gap-1.5">
          {project.technologiesUsed.slice(0, 6).map((tech) => (
            <Badge className="body-base font-normal" key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
          {project.technologiesUsed.length > 6 && (
            <Badge className="body-base font-normal" variant="outline">
              +{project.technologiesUsed.length - 6}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
});
