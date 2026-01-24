import { Link } from '@tanstack/react-router';
import { memo } from 'react';
import { FaGithub } from 'react-icons/fa6';
import { LuBookOpen } from 'react-icons/lu';
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

const ProjectCard = memo(function ProjectCard({
  project,
  className,
}: ProjectCardProps) {
  return (
    <Card
      className={cn(
        'group relative flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0 cursor-pointer',
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
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors motion-reduce:transition-none">
              {project.name}
            </h3>
            <div className="flex items-center gap-1" id="project-links">
              {project.githubUrl && (
                <button
                  aria-label="View source code"
                  className="relative z-10 p-2 text-muted-foreground hover:text-accent transition-colors rounded-md motion-reduce:transition-none"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(
                      project.githubUrl,
                      '_blank',
                      'noopener,noreferrer',
                    );
                  }}
                  type="button"
                >
                  <FaGithub className="h-5 w-5" />
                </button>
              )}
              {project.documentationUrl && (
                <button
                  aria-label="View documentation"
                  className="relative z-10 p-2 text-muted-foreground hover:text-accent transition-colors rounded-md motion-reduce:transition-none"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(
                      project.documentationUrl,
                      '_blank',
                      'noopener,noreferrer',
                    );
                  }}
                  type="button"
                >
                  <LuBookOpen className="h-5 w-5" />
                </button>
              )}
              {project.documentationUrl && (
                <button
                  aria-label="View documentation"
                  className="p-2 text-muted-foreground hover:text-accent transition-colors rounded-md motion-reduce:transition-none"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(
                      project.documentationUrl,
                      '_blank',
                      'noopener,noreferrer',
                    );
                  }}
                  type="button"
                >
                  <LuBookOpen className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>
        </section>

        <section className="flex-grow" id="project-description">
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
      </CardContent>
    </Card>
  );
});

export default ProjectCard;
