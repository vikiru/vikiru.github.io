import ProjectCard from '@/components/cards/ProjectCard';
import { featuredProjects, otherProjects } from '@/data/projects';
import type { Project } from '@/types/Project';

function ProjectContainer() {
  return (
    <section className="bg-secondary/50 mx-auto xs:pt-6 lg:py-12" id="projects">
      <div className="xs:mx-3 lg:mx-6 5xl:mx-10 10xl:mx-20">
        <section id="featured-projects">
          <div className="lg:pb-6 7xl:py-12 11xl:py-16">
            <h2 className="text-2xl font-bold tracking-tight text-center text-foreground sm:text-3xl lg:text-4xl">
              Featured Projects
            </h2>
          </div>

          <section
            className="mt-4 grid gap-4 xl:grid-cols-2 2xl:gap-6 5xl:gap-8 10xl:gap-10 11xl:gap-11"
            id="featured-projects-container"
          >
            {featuredProjects.map((project: Project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </section>

          <div className="my-8 border-t border-border" />
        </section>

        <section id="other-projects">
          <div className="lg:pb-6 7xl:py-12 11xl:py-16">
            <h2 className="text-2xl font-bold tracking-tight text-center text-foreground sm:text-3xl lg:text-4xl">
              Other Projects
            </h2>
          </div>

          <section
            className="mt-4 grid gap-4 pb-6 xl:grid-cols-2 2xl:gap-6 5xl:gap-8 10xl:gap-10 11xl:gap-11"
            id="other-projects-container"
          >
            {otherProjects.map((project: Project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </section>
        </section>
      </div>
    </section>
  );
}

export default ProjectContainer;
