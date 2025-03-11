import { ProjectCard } from '~components/index';
import { featuredProjects, otherProjects } from '~data/index';
import { Project } from '~types/index';

function ProjectContainer() {
    return (
        <section
            className="bg-background-950 mx-auto xs:pt-6 lg:py-12"
            id="projects"
        >
            <div className="px-6 sm:px-8 lg:px-12">
                {/* Featured Projects Section */}
                <section id="featured-projects">
                    <div className="lg:pb-6">
                        <h2 className="h2-text text-center text-light-text-900 dark:text-dark-text-800">
                            Featured Projects
                        </h2>
                    </div>

                    <div
                        className="mt-4 grid gap-6 xl:grid-cols-2"
                        id="projects-container"
                    >
                        {featuredProjects.map((project: Project) => (
                            <ProjectCard key={project.name} project={project} />
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="my-8 border-t border-gray-300" />
                </section>

                {/* Other Projects Section */}
                <section id="other-projects">
                    <div className="lg:pb-6">
                        <h2 className="h2-text text-center text-light-text-900 dark:text-dark-text-800">
                            Other Projects
                        </h2>
                    </div>

                    <div
                        className="mt-4 grid gap-6 pb-6 xl:grid-cols-2"
                        id="projects-container"
                    >
                        {otherProjects.map((project: Project) => (
                            <ProjectCard key={project.name} project={project} />
                        ))}
                    </div>
                </section>
            </div>
        </section>
    );
}

export default ProjectContainer;
