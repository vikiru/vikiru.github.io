import projectData from '~assets/data/projects';
import ProjectCard from '~components/ProjectCard/ProjectCard';

function ProjectContainer() {
    const projects = projectData.projects;
    return (
        <section className="mx-auto py-6" id="projects">
            <div className="px-4">
                <h2 className="heading-text text-secondary dark:text-primary pt-2 text-center font-bold uppercase underline">
                    Projects
                </h2>

                <div
                    className="mx-auto grid gap-4 pb-6 pr-2 pt-2 xl:grid-cols-2"
                    id="projects-container"
                >
                    {projects.map((project) => (
                        <ProjectCard key={project.name} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectContainer;
