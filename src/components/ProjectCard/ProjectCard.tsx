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
        <div className="flex flex-col rounded-2xl bg-primary-900 p-6 shadow-md 9xl:p-20">
            {/* Header with Icons */}
            <div className="items-center lg:flex lg:justify-between">
                <div className="flex items-center space-x-2 3xl:space-x-4">
                    {/* Title */}
                    <h4 className="h4-text">{project.name}</h4>

                    {/* Icons */}
                    <div
                        className="flex items-center space-x-2 text-accent-300 3xl:space-x-4"
                        style={{ fontSize: 'clamp(1rem, 1.25vw, 4rem)' }}
                    >
                        {project.githubUrl ? (
                            <Link
                                className="text-clamp-icons transition-colors duration-200 hover:text-accent-500"
                                target="_blank"
                                to={project.githubUrl}
                            >
                                <FontAwesomeIcon icon={faGithub} />
                            </Link>
                        ) : (
                            <span className="invisible text-clamp-icons">
                                <FontAwesomeIcon icon={faGithub} />
                            </span>
                        )}

                        {project.documentationUrl ? (
                            <Link
                                className="text-clamp-icons transition-colors duration-200 hover:text-accent-500"
                                target="_blank"
                                to={project.documentationUrl}
                            >
                                <FontAwesomeIcon icon={faBookOpen} />
                            </Link>
                        ) : (
                            <span className="invisible text-clamp-icons">
                                <FontAwesomeIcon icon={faBookOpen} />
                            </span>
                        )}
                    </div>
                </div>

                {/* Date Range */}
                <div>
                    <p className="info-text text-secondary-500">
                        {project.startDate} - {project.endDate}
                    </p>
                </div>
            </div>

            {/* Description */}
            <div className="container flex min-h-20 flex-col pb-3 xs:mt-2 lg:mt-3">
                <p className="card-text text-text-600">{project.description}</p>
            </div>

            {/* Tech Stack Tags */}
            <div className="flex min-h-20 flex-wrap gap-2">
                {project.technologiesUsed.map((tech, index) => (
                    <div className="tech-tag text-secondary-950" key={index}>
                        {tech}
                    </div>
                ))}
            </div>

            {/* CTA */}
            <div className="mt-4">
                <Link
                    className="body-text font-semibold text-accent-300 transition-colors duration-200 hover:text-accent-500"
                    to={project.projectPageUrl}
                >
                    Read More <span>→</span>
                </Link>
            </div>
        </div>
    );
}

export default ProjectCard;
