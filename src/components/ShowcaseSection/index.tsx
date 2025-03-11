import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { VideoPlayer } from '~components/index';
import { Project } from '~types/index';

type ShowcaseSectionProps = {
    project: Project;
};

function ShowcaseSection({ project }: ShowcaseSectionProps) {
    return (
        <section
            className="bg-background-950 min-h-screen overflow-hidden"
            id={project.name + '-showcase'}
        >
            {/* Project Info Section */}
            <section
                className="flex pt-12 xs:flex-col sm:flex-row sm:items-center sm:justify-between"
                id="project-info"
            >
                <div className="mx-4 flex items-center space-x-2 10xl:mx-10">
                    <div>
                        <h2 className="h2-text text-light-text-900 dark:text-dark-text-800">
                            <span>
                                <Link
                                    className="text-light-accent-300 underline hover:text-light-accent-500 dark:text-dark-accent-300 hover:dark:text-dark-accent-500"
                                    to="/projects"
                                >
                                    projects
                                </Link>
                                {' / '}
                            </span>
                            {project.name}
                        </h2>
                    </div>

                    <div className="mt-1 flex items-center space-x-2 text-gray-800">
                        {project.githubUrl ? (
                            <a
                                className="social-icons"
                                href={project.githubUrl}
                                rel="noopener noreferrer"
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
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <FontAwesomeIcon icon={faBookOpen} />
                            </a>
                        ) : (
                            <span className="invisible text-clamp-icons">
                                <FontAwesomeIcon icon={faBookOpen} />
                            </span>
                        )}
                    </div>
                </div>

                <div className="mx-4 10xl:mx-10">
                    <p
                        className="info-text"
                        style={{
                            fontSize: 'clamp(1rem, 1.95vw, 5rem)',
                        }}
                    >
                        {project.startDate} - {project.endDate}
                    </p>
                </div>
            </section>

            {/* Project Description Section */}
            <section className="mx-4 10xl:mx-10" id="project-description">
                <p className="body-text text-light-text-600 dark:text-dark-text-700">
                    {project.description}
                </p>
            </section>

            {/* Technologies Used Section */}
            <section
                className="container mx-4 mt-2 flex flex-wrap pb-4 xs:gap-3 10xl:mx-10"
                id="tech-stack"
            >
                {project.technologiesUsed.map((tech, index) => (
                    <div className="tech-tag" key={index}>
                        {tech}
                    </div>
                ))}
            </section>

            <div className="my-4 border-t border-gray-300 dark:border-dark-background-600" />

            {/* Project Authors Section */}
            <section className="mx-4 10xl:mx-10" id="project-authors">
                <h3 className="h3-text text-light-text-900 dark:text-dark-text-800">
                    Co-Authors
                </h3>
                <p className="body-text mt-2 pb-4 text-light-text-600 dark:text-dark-text-700">
                    {project.contributors}.
                </p>
            </section>

            <div className="my-4 border-t border-gray-300 dark:border-dark-background-600" />

            {/* Accomplishments Section */}
            <section className="mx-4 10xl:mx-10" id="project-accomplishments">
                <h3 className="h3-text text-light-text-900 dark:text-dark-text-800">
                    Accomplishments
                </h3>

                <div className="mx-2 pb-4">
                    <ul className="list-inside list-disc">
                        {project.accomplishments.map((accomplishment) => (
                            <li
                                className="text-clamp-accomplishment leading-relaxed text-light-text-600 dark:text-dark-text-700"
                                key={accomplishment}
                            >
                                {accomplishment}.
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <div className="my-4 border-t border-gray-300 dark:border-dark-background-600" />
                          
            {/* Project Demo Video Section */}
            {project.videoPath !== '' && (
                <section className="mx-4 10xl:mx-10" id="project-demo">
                    <VideoPlayer project={project} />
                    <div className="my-4 pb-4" />
                </section>
            )}
        </section>
    );
}

export default ShowcaseSection;
