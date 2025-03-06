import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Footer from '~components/Footer/Footer';
import NavBar from '~components/NavBar/NavBar';
import VideoPlayer from '~components/VideoPlayer/VideoPlayer';
import { Project } from '~types/Project';

type ProjectShowcaseProps = {
    project: Project;
};

function ProjectShowcasePage(props: ProjectShowcaseProps) {
    const project = props.project;

    return (
        <div className="">
            <NavBar />
            <main>
                <section className="min-h-screen overflow-hidden bg-gray-50">
                    <div className="flex items-center justify-between pt-12">
                        <div className="mx-4 flex items-center space-x-2">
                            <div>
                                <h2
                                    className="font-heading font-semibold text-gray-800"
                                    style={{
                                        fontSize: 'clamp(2rem, 2vw, 9rem)',
                                    }}
                                >
                                    {project.name}
                                </h2>
                            </div>
                            <div
                                className="flex items-center space-x-2 pb-1 text-gray-800"
                                style={{
                                    fontSize: 'clamp(1rem, 1.25vw, 4rem)',
                                }}
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

                        <div className="mx-4">
                            <p
                                className="font-body italic text-gray-500"
                                style={{
                                    fontSize: 'clamp(0.65rem, 1.12vw, 4rem)',
                                }}
                            >
                                {project.startDate} - {project.endDate}
                            </p>
                        </div>
                    </div>

                    <div className="mx-4">
                        <p
                            className="font-body leading-relaxed text-gray-600"
                            style={{
                                fontSize: 'clamp(0.8rem, 1.25vw, 4rem)',
                            }}
                        >
                            {project.description}
                        </p>
                    </div>

                    <div className="container mx-4 mt-2 flex flex-wrap gap-3">
                        {project.technologiesUsed.map((tech, index) => (
                            <div
                                className="flex items-center rounded-xl bg-accent font-body text-white xs:px-3 xs:py-1 5xl:px-6 5xl:py-2"
                                key={index}
                                style={{
                                    fontSize: 'clamp(0.6rem, 0.84vw, 4rem)',
                                }}
                            >
                                {tech}
                            </div>
                        ))}
                    </div>

                    <div className="my-4 border-t border-gray-300" />

                    <div className="mx-4">
                        <h3
                            className="font-heading font-semibold text-gray-800"
                            style={{ fontSize: 'clamp(2rem, 0.85vw, 4rem)' }}
                        >
                            Co-Authors
                        </h3>
                        <p
                            className="font-body leading-relaxed text-gray-600"
                            style={{
                                fontSize: 'clamp(0.8rem, 1.25vw, 4rem)',
                            }}
                        >
                            {project.contributors}.
                        </p>
                    </div>

                    <div className="my-4 border-t border-gray-300" />

                    <div className="mx-4">
                        <h3
                            className="font-heading font-semibold text-gray-800"
                            style={{ fontSize: 'clamp(2rem, 0.85vw, 4rem)' }}
                        >
                            Accomplishments
                        </h3>

                        <div className="mx-2">
                            <ul className="list-inside list-disc">
                                {project.accomplishments.map(
                                    (accomplishment) => (
                                        <li
                                            className="font-body leading-relaxed text-gray-600"
                                            key={accomplishment}
                                            style={{
                                                fontSize:
                                                    'clamp(0.8rem, 1.25vw, 4rem)',
                                            }}
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
                            <div className="my-4" />
                        </div>
                    )}
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default ProjectShowcasePage;
