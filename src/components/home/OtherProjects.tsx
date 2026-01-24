import ProjectCard from '@/components/home/ProjectCard';
import { otherProjects } from '@/data/projects';
import { cn } from '@/lib/utils';

interface OtherProjectsProps {
  className?: string;
}

export function OtherProjects({ className }: OtherProjectsProps) {
  return (
    <section className={cn('py-20 bg-muted/30', className)} id="other-projects">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-h2 font-bold mb-12 flex items-center gap-3 font-heading">
          <span className="w-8 h-1 bg-primary rounded-full" />
          Other Projects
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
