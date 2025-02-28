import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { Project } from '~types/Project';

type ProjectCardProps = {
    project: Project;
};

function ProjectCard(props: ProjectCardProps) {
    const project: Project = props.project;

    return (
        <div className="flex flex-col rounded-2xl bg-slate-100 p-6 shadow-md">
            {/* Header with Icons */}
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                    {/* Title */}
                    <h3
                        className="font-heading font-semibold text-gray-800"
                        style={{ fontSize: 'clamp(1rem, 1.5vw, 4rem)' }}
                    >
                        {project.name}
                    </h3>

                    {/* Icons */}
                    <div
                        className="flex items-center space-x-2 pb-1 text-gray-800"
                        style={{ fontSize: 'clamp(1rem, 1.25vw, 4rem)' }}
                    >
                        <Link
                            className="transition-colors duration-200 hover:text-accent"
                            rel="noopener noreferrer"
                            target="_blank"
                            to={project.githubUrl}
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </Link>
                        <Link
                            className="transition-colors duration-200 hover:text-accent"
                            rel="noopener noreferrer"
                            target="_blank"
                            to={project.documentationUrl}
                        >
                            <FontAwesomeIcon icon={faBookOpen} />
                        </Link>
                    </div>
                </div>

                {/* Date Range */}
                <div
                    className="italic text-gray-500"
                    style={{ fontSize: 'clamp(0.65rem, 1.125vw, 4rem)' }}
                >
                    {project.startDate} - {project.endDate}
                </div>
            </div>

            {/* Description */}
            <div className="container mt-3 min-h-20 pb-3">
                <p
                    className="font-body leading-relaxed text-gray-600"
                    style={{ fontSize: 'clamp(0.8rem, 1.25vw, 4rem)' }}
                >
                    {project.description}
                </p>
            </div>

            {/* Tech Stack Tags */}
            <div className="container flex flex-wrap gap-3">
                {project.technologiesUsed.map((tech, index) => (
                    <div
                        className="flex items-center rounded-xl bg-accent font-body text-white xs:px-3 xs:py-1 5xl:px-6 5xl:py-2"
                        key={index}
                        style={{ fontSize: 'clamp(0.6rem, 0.84vw, 4rem)' }}
                    >
                        {tech}
                    </div>
                ))}
            </div>

            {/* CTA */}
            <div className="mt-4">
                <Link
                    className="font-body font-semibold text-accent transition-colors duration-200 hover:text-accent/50"
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
