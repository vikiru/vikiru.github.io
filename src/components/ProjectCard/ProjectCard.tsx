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
        <div className="bg-primary-950 flex flex-col rounded-2xl p-6 shadow-md">
            {/* Header with Icons */}
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                    {/* Title */}
                    <h4 className="h4-text">{project.name}</h4>

                    {/* Icons */}
                    {(project.githubUrl || project.documentationUrl) && (
                        <div
                            className="text-accent-300 flex items-center space-x-2 pb-1"
                            style={{ fontSize: 'clamp(1rem, 1.25vw, 4rem)' }}
                        >
                            {project.githubUrl && (
                                <Link
                                    className="hover:text-accent-500 transition-colors duration-200"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    to={project.githubUrl}
                                >
                                    <FontAwesomeIcon icon={faGithub} />
                                </Link>
                            )}

                            {project.documentationUrl && (
                                <Link
                                    className="hover:text-accent-500 transition-colors duration-200"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    to={project.documentationUrl}
                                >
                                    <FontAwesomeIcon icon={faBookOpen} />
                                </Link>
                            )}
                        </div>
                    )}
                </div>

                {/* Date Range */}
                <div>
                    <p className="info-text text-secondary-500">
                        {project.startDate} - {project.endDate}
                    </p>
                </div>
            </div>

            {/* Description */}
            <div className="container mt-3 min-h-20 pb-3">
                <p className="card-text text-text-600">{project.description}</p>
            </div>

            {/* Tech Stack Tags */}
            <div className="container flex flex-wrap gap-2">
                {project.technologiesUsed.map((tech, index) => (
                    <div className="tech-tag text-secondary-950" key={index}>
                        {tech}
                    </div>
                ))}
            </div>

            {/* CTA */}
            <div className="mt-4">
                <Link
                    className="text-accent-300 hover:text-accent-500 font-body font-semibold transition-colors duration-200"
                    style={{ fontSize: 'clamp(0.8rem, 1.25vw, 4rem)' }}
                    to={project.projectPageUrl}
                >
                    Read More{' '}
                    <span style={{ fontSize: 'clamp(0.8rem, 1.55vw, 4rem)' }}>
                        →
                    </span>
                </Link>
            </div>
        </div>
    );
}

export default ProjectCard;
