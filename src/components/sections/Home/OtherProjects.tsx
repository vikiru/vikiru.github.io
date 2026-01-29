import { ProjectCard } from '@/components/sections/Home/ProjectCard';
import { otherProjects } from '@/data/projects';
import { cn } from '@/lib/utils';

interface OtherProjectsProps {
  className?: string;
}

export function OtherProjects({ className }: OtherProjectsProps) {
  return (
    <section className={cn('py-20 scroll-mt-20', className)} id="other-projects">
      <div className="px-6 lg:px-8">
        <h2 className="xs:text-h3 text-balance whitespace-nowrap sm:text-h2 font-bold mb-12 flex items-center gap-3 font-heading">
          <span className="w-8 h-1 bg-primary rounded-full" />
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
