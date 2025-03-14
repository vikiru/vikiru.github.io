import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { Project } from '~types/index';

type ProjectCardProps = {
    project: Project;
};

function ProjectCard(props: ProjectCardProps) {
    const project: Project = props.project;

    return (
        <section
            className="flex flex-col rounded-2xl bg-light-primary-900 p-6 shadow-md 3xl:p-8 7xl:p-10 9xl:p-20 dark:bg-dark-primary-500"
            id={project.name}
        >
            {/* Header with Icons */}
            <section
                className="flex xs:flex-col sm:flex-row sm:items-start sm:justify-between lg:min-h-8 4xl:min-h-10 5xl:min-h-12 6xl:min-h-20 6xl:py-4 10xl:min-h-24 11xl:min-h-32"
                id="project-info"
            >
                <div className="flex xs:gap-2 3xl:gap-4 8xl:gap-6 10xl:gap-8">
                    {/* Title */}
                    <h3 className="h4-text text-light-text-900 dark:text-dark-text-800">
                        {project.name}
                    </h3>

                    {/* Icons */}
                    <section
                        className="flex items-start xs:-mt-1 xs:gap-2 3xl:-mt-2 3xl:gap-4 5xl:-mt-3 7xl:-mt-4 8xl:-mt-5 8xl:gap-6 9xl:-mt-6 10xl:-mt-7 10xl:gap-8 11xl:-mt-8 11xl:min-h-24"
                        id="project-links"
                    >
                        {project.githubUrl && (
                            <a
                                className="social-icons"
                                href={project.githubUrl}
                                rel="noreferrer"
                                target="_blank"
                            >
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        )}

                        {project.documentationUrl && (
                            <a
                                className="social-icons"
                                href={project.documentationUrl}
                                rel="noreferrer"
                                target="_blank"
                            >
                                <FontAwesomeIcon icon={faBookOpen} />
                            </a>
                        )}
                    </section>
                </div>

                {/* Date Range */}
                <div className="flex items-center xs:mt-1 lg:mt-3 xl:mt-1.5 4xl:mt-2">
                    <p className="info-text">
                        {project.startDate} - {project.endDate}
                    </p>
                </div>
            </section>

            {/* Description */}
            <section
                className="container flex grow flex-col xs:py-2 lg:min-h-6 4xl:min-h-[6rem] 5xl:min-h-[7rem] 6xl:min-h-[7.5rem] 7xl:min-h-[8rem] 8xl:min-h-[8.5rem] 9xl:min-h-[9rem] 10xl:min-h-[10rem] 11xl:min-h-[12rem] 11xl:py-4"
                id="project-description"
            >
                <p className="card-text text-light-text-600 dark:text-dark-text-700">
                    {project.description}
                </p>
            </section>

            {/* Tech Stack Tags */}
            <section
                className="container flex grow flex-wrap py-2 xs:mt-0 xs:min-h-5 xs:gap-1 xs:py-1 md:gap-2 lg:min-h-10 xl:mt-2 xl:min-h-20 2xl:min-h-10 3xl:min-h-12 4xl:min-h-14 5xl:min-h-36 8xl:gap-6 10xl:min-h-64 11xl:min-h-72"
                id="tech-stack"
            >
                {project.technologiesUsed.map((tech, index) => (
                    <div
                        className="tech-tag text-light-secondary-950 dark:text-dark-secondary-50"
                        key={index}
                    >
                        {tech}
                    </div>
                ))}
            </section>

            {/* CTA */}
            <section
                className="flex items-start text-left xs:mt-2 xs:min-h-5 lg:min-h-10"
                id="project-cta"
            >
                <Link
                    className="body-text font-semibold text-light-accent-300 transition-colors duration-200 hover:text-light-accent-500 motion-reduce:transition-none dark:text-dark-accent-200 dark:hover:text-dark-accent-400"
                    to={project.projectPageUrl}
                >
                    Read More <span>→</span>
                </Link>
            </section>
        </section>
    );
}

export default ProjectCard;
