import ProjectCard from '@/components/home/ProjectCard';
import { featuredProjects } from '@/data/projects';
import { cn } from '@/lib/utils';

interface FeaturedProjectsProps {
  className?: string;
}

export function FeaturedProjects({ className }: FeaturedProjectsProps) {
  return (
    <section
      className={cn('py-20 bg-muted/30', className)}
      id="featured-projects"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-h2 font-bold mb-12 flex items-center gap-3 font-heading">
          <span className="w-8 h-1 bg-primary rounded-full" />
          Featured Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
