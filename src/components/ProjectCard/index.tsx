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
            className="flex flex-col rounded-2xl bg-light-primary-900 p-6 shadow-md 9xl:p-20 dark:bg-dark-primary-500"
            id={project.name}
        >
            {/* Header with Icons */}
            <section
                className="flex xs:flex-col sm:flex-row sm:items-center sm:justify-between"
                id="project-info"
            >
                <div className="flex items-center space-x-2 3xl:space-x-4">
                    {/* Title */}
                    <h3 className="h4-text text-light-text-900 dark:text-dark-text-800">
                        {project.name}
                    </h3>

                    {/* Icons */}
                    <section
                        className="flex items-center space-x-2 3xl:space-x-4"
                        id="project-links"
                        style={{ fontSize: 'clamp(1rem, 1.25vw, 4rem)' }}
                    >
                        {project.githubUrl ? (
                            <a
                                className="social-icons"
                                href={project.githubUrl}
                                rel="noreferrer"
                                target="_blank"
                            >
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        ) : (
                            <span className="invisible text-clamp-icons">
                                <FontAwesomeIcon icon={faGithub} />
                            </span>
                        )}

                        {project.documentationUrl ? (
                            <a
                                className="social-icons"
                                href={project.documentationUrl}
                                rel="noreferrer"
                                target="_blank"
                            >
                                <FontAwesomeIcon icon={faBookOpen} />
                            </a>
                        ) : (
                            <span className="invisible text-clamp-icons">
                                <FontAwesomeIcon icon={faBookOpen} />
                            </span>
                        )}
                    </section>
                </div>

                {/* Date Range */}
                <div>
                    <p className="info-text">
                        {project.startDate} - {project.endDate}
                    </p>
                </div>
            </section>

            {/* Description */}
            <section
                className="container flex min-h-20 flex-col pb-3 xs:mt-2 lg:mt-3"
                id="project-description"
            >
                <p className="card-text text-light-text-600 dark:text-dark-text-700">
                    {project.description}
                </p>
            </section>

            {/* Tech Stack Tags */}
            <section
                className="flex flex-wrap gap-2 lg:min-h-20"
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
            <section className="mt-4" id="project-cta">
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
