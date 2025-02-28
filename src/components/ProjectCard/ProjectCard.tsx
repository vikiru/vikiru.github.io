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
        <div className="rounded-2xl bg-slate-100 p-6 shadow-md">
            {/* Header with Icons */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    {/* Title */}
                    <h3 className="font-heading text-2xl font-semibold text-gray-800">
                        {project.name}
                    </h3>

                    {/* Icons */}
                    <div className="flex items-center gap-3 text-xl text-gray-800">
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-accent"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a
                            href={project.documentationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-accent"
                        >
                            <FontAwesomeIcon icon={faBookOpen} />
                        </a>
                    </div>
                </div>

                {/* Date Range */}
                <div className="text-base italic text-gray-500">
                    {project.startDate} - {project.endDate}
                </div>
            </div>

            {/* Description */}
            <div className="mt-3 min-h-20 max-w-2xl pb-3">
                <p className="font-body text-lg leading-relaxed text-gray-600">
                    {project.description}
                </p>
            </div>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2">
                {project.technologiesUsed.map((tech, index) => (
                    <div
                        className="flex items-center rounded-xl bg-accent px-3 py-1 font-body text-base text-white"
                        key={index}
                    >
                        {tech}
                    </div>
                ))}
            </div>

            {/* CTA */}
            <div className="mt-4">
                <a
                    href={project.projectPageUrl}
                    className="font-body text-lg font-semibold text-accent hover:text-accent"
                >
                    Read More →
                </a>
            </div>
        </div>
    );
}

export default ProjectCard;
