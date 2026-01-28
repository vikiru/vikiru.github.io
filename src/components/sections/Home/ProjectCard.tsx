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
        'group hover:bg-primary/5 relative flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0 cursor-pointer',
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
        <div className="flex items-center justify-between gap-4 shrink-0">
          <h3 className="text-h4 font-bold text-foreground hover:text-primary transition-colors motion-reduce:transition-none truncate">
            {project.name}
          </h3>
          <div className="flex items-center gap-1 shrink-0">
            {project.githubUrl && (
              <a
                aria-label="View source code"
                className="p-2 text-muted-foreground hover:text-accent transition-colors rounded-md motion-reduce:transition-none"
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
                className="p-2 text-muted-foreground hover:text-accent transition-colors rounded-md motion-reduce:transition-none"
                href={project.documentationUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaBook aria-hidden="true" className="size-icon-base" />
              </a>
            )}
          </div>
        </div>

        <p className="text-muted-foreground leading-relaxed body-base mt-4 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-6 shrink-0">
          {project.technologiesUsed.slice(0, 6).map((tech) => (
            <Badge
              className="body-base font-normal"
              key={tech}
              variant="secondary"
            >
              {tech}
            </Badge>
          ))}
          {project.technologiesUsed.length > 6 && (
            <Badge className="body-base font-normal" variant="outline">
              +{project.technologiesUsed.length - 6}
            </Badge>
          )}
        </div>

        <div className="mt-4 pt-4 border-t border-border shrink-0">
          <Link
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors heading-5 font-medium motion-reduce:transition-none"
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
