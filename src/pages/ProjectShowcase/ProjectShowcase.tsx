import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { Footer, NavBar, VideoPlayer } from '~components/index';
import { Project } from '~types/index';

type ProjectShowcaseProps = {
    project: Project;
};

function ProjectShowcasePage(props: ProjectShowcaseProps) {
    const project = props.project;

    return (
        <div className="scroller">
            <NavBar />
            <main>
                <section className="min-h-screen overflow-hidden bg-background-950">
                    <div className="flex items-center justify-between pt-12">
                        <div className="mx-4 flex items-center space-x-2">
                            <div>
                                <h2 className="h2-text">{project.name}</h2>
                            </div>

                            {(project.githubUrl ||
                                project.documentationUrl) && (
                                <div className="mt-1 flex items-center space-x-2 text-gray-800">
                                    {project.githubUrl && (
                                        <a
                                            className="text-clamp-icons transition-colors duration-200 hover:text-accent-500"
                                            href={project.githubUrl}
                                            rel="noopener noreferrer"
                                            target="_blank"
                                        >
                                            <FontAwesomeIcon icon={faGithub} />
                                        </a>
                                    )}

                                    {project.documentationUrl && (
                                        <a
                                            className="text-clamp-icons transition-colors duration-200 hover:text-accent-500"
                                            href={project.documentationUrl}
                                            rel="noopener noreferrer"
                                            target="_blank"
                                        >
                                            <FontAwesomeIcon
                                                icon={faBookOpen}
                                            />
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>

                        <div className="mx-4">
                            <p
                                className="info-text"
                                style={{
                                    fontSize: 'clamp(0.8rem, 1.5vw, 4rem)',
                                }}
                            >
                                {project.startDate} - {project.endDate}
                            </p>
                        </div>
                    </div>

                    <div className="mx-4">
                        <p className="body-text">{project.description}</p>
                    </div>

                    <div className="container mx-4 mt-2 flex flex-wrap gap-3 pb-4">
                        {project.technologiesUsed.map((tech, index) => (
                            <div className="tech-tag" key={index}>
                                {tech}
                            </div>
                        ))}
                    </div>

                    <div className="my-4 border-t border-gray-300" />

                    <div className="mx-4">
                        <h3 className="h3-text">Co-Authors</h3>
                        <p className="body-text pb-4">
                            {project.contributors}.
                        </p>
                    </div>

                    <div className="my-4 border-t border-gray-300" />

                    <div className="mx-4">
                        <h3 className="h3-text">Accomplishments</h3>

                        <div className="mx-2 pb-4">
                            <ul className="list-inside list-disc">
                                {project.accomplishments.map(
                                    (accomplishment) => (
                                        <li
                                            className="font-body text-clamp-accomplishment leading-relaxed text-gray-600"
                                            key={accomplishment}
                                        >
                                            {accomplishment}
                                        </li>
                                    ),
                                )}
                            </ul>
                        </div>
                    </div>

                    <div className="my-4 border-t border-gray-300" />

                    {project.videoPath !== '' && (
                        <div className="mx-4">
                            <VideoPlayer project={project} />
                            <div className="my-4 pb-4" />
                        </div>
                    )}
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default ProjectShowcasePage;
