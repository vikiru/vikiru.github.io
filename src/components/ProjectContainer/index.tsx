import ProjectCard from '@/components/ProjectCard';
import { featuredProjects, otherProjects } from '@/data/projects';
import type { Project } from '@/types/Project';

function ProjectContainer() {
  return (
    <section
      className="bg-background-950 mx-auto xs:pt-6 lg:py-12"
      id="projects"
    >
      <div className="xs:mx-3 lg:mx-6 5xl:mx-10 10xl:mx-20">
        {/* Featured Projects Section */}
        <section id="featured-projects">
          <div className="lg:pb-6 7xl:py-12 11xl:py-16">
            <h2 className="h2-text text-center text-light-text-900 dark:text-dark-text-800">
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

          {/* Divider */}
          <div className="my-8 border-t border-gray-300 dark:border-dark-background-600" />
        </section>

        {/* Other Projects Section */}
        <section id="other-projects">
          <div className="lg:pb-6 7xl:py-12 11xl:py-16">
            <h2 className="h2-text text-center text-light-text-900 dark:text-dark-text-800">
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
