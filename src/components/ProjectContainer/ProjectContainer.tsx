import { projectData } from '~assets/data/index';
import { ProjectCard } from '~components/index';

function ProjectContainer() {
    const projects = projectData.projects;

    return (
        <section className="mx-auto bg-background-950 py-12" id="projects">
            <div className="px-6 sm:px-8 lg:px-12">
                {/* Featured Projects Section */}
                <div className="pb-6">
                    <h2
                        className="text-center font-heading font-semibold text-gray-800"
                        style={{ fontSize: 'clamp(2rem, 2vw, 9rem)' }}
                    >
                        Featured Projects
                    </h2>
                </div>

                <div
                    className="mt-4 grid gap-6 xl:grid-cols-2"
                    id="projects-container"
                >
                    {projects.slice(0, 5).map((project) => (
                        <ProjectCard key={project.name} project={project} />
                    ))}
                </div>

                {/* Divider */}
                <div className="my-8 border-t border-gray-300" />

                {/* Other Projects Section */}
                <div className="pb-6">
                    <h2
                        className="text-center font-heading font-semibold text-gray-800"
                        style={{ fontSize: 'clamp(2rem, 2vw, 9rem)' }}
                    >
                        Other Projects
                    </h2>
                </div>

                <div
                    className="mt-4 grid gap-6 xl:grid-cols-2"
                    id="projects-container"
                >
                    {projects.slice(5).map((project) => (
                        <ProjectCard key={project.name} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectContainer;
