import { ProjectCard } from '@/components/sections/Home/ProjectCard';
import { otherProjects } from '@/data/projects';
import { cn } from '@/lib/utils';

interface OtherProjectsProps {
  className?: string;
}

export function OtherProjects({ className }: OtherProjectsProps) {
  return (
    <section className={cn('scroll-mt-20 py-20', className)} id="other-projects">
      <div className="px-6 lg:px-8">
        <h2 className="mb-12 flex items-center gap-3 font-heading text-h3 font-bold text-balance whitespace-nowrap sm:text-h2">
          <span className="h-1 w-8 rounded-full bg-primary" />
          Other Projects
        </h2>
        <div className="grid gap-6 lg:grid-cols-2 3xl:grid-cols-3">
          {otherProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
