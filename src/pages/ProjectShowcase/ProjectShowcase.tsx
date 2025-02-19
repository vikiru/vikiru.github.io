import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Footer from '~components/Footer/Footer';
import NavBar from '~components/NavBar/NavBar';
import { Project } from '~types/Project';

type ProjectShowcaseProps = {
    project: Project;
};

function ProjectShowcasePage(props: ProjectShowcaseProps) {
    const project = props.project;

    return (
        <div className="flex h-screen w-screen snap-y flex-col overflow-x-hidden overflow-y-scroll scroll-smooth bg-primary scrollbar-thin scrollbar-track-primary scrollbar-thumb-accent lg:scrollbar dark:bg-darkPrimary dark:scrollbar-track-darkPrimary dark:scrollbar-thumb-darkAccent">
            <NavBar />
            <main>
                <section
                    className="bg-primary p-4 pb-6 xxs:px-2 lg:px-4 dark:bg-darkPrimary"
                    id="project-info"
                >
                    <h2 className="heading-text py-2 dark:text-primary">
                        <Link
                            className="text-accentSecondary underline hover:bg-accent hover:text-secondary dark:text-darkAccent hover:dark:bg-darkAccent hover:dark:text-darkSecondary"
                            title="View my other projects"
                            to="/projects"
                        >
                            projects
                        </Link>{' '}
                        / <span className="font-bold">{project.name}</span>
                    </h2>

                    <h3 className="body-text uppercase dark:text-primary">
                        {project.startDate} - {project.endDate}
                    </h3>

                    <div className="py-1">
                        <p className="body-text dark:text-primary">
                            {project.description}
                        </p>
                    </div>

                    <section
                        className="py-2 xxs:grid xxs:grid-cols-2 lg:grid-cols-3"
                        id="technologies-used"
                    >
                        {project.technologiesUsed.map((tech) => (
                            <div
                                className="container mb-2 rounded-full border-4 border-accent bg-secondary hover:cursor-default xxs:w-full sm:w-4/5 sm:px-2 lg:w-[90%] dark:border-darkAccent dark:bg-darkSecondary dark:text-primary"
                                key={tech}
                            >
                                <h2 className="tech-text text-center text-primary dark:text-primary">
                                    {tech}
                                </h2>
                            </div>
                        ))}
                    </section>

                    <section
                        className="mx-auto flex w-full justify-center space-x-2 pb-2 pt-1 lg:space-x-4"
                        id="project-icons"
                    >
                        {project.githubUrl !== '' && (
                            <a
                                href={project.githubUrl}
                                id="Project GitHub Link"
                                rel="noopener noreferrer"
                                target="_blank"
                                title="View the GitHub repository"
                            >
                                <FontAwesomeIcon
                                    className="social-icons"
                                    icon={faGithub}
                                />
                            </a>
                        )}
                        {project.documentationUrl !== '' && (
                            <a
                                href={project.documentationUrl}
                                id="Project Documentation Link"
                                rel="noopener noreferrer"
                                target="_blank"
                                title="View the project documentation"
                            >
                                <FontAwesomeIcon
                                    className="social-icons"
                                    icon={faBookOpen}
                                />
                            </a>
                        )}
                    </section>
                </section>

                <section
                    className="pb-2 xxs:px-2 lg:px-4"
                    id="project-contributors"
                >
                    <h2 className="heading-text uppercase underline dark:text-primary">
                        Co-Authors
                    </h2>
                    <div className="pt-3">
                        <h3 className="body-text text-secondary dark:text-primary">
                            {project.contributors}.
                        </h3>
                    </div>
                </section>

                <section
                    className="xxs:px-2 lg:px-4"
                    id="project-accomplishments"
                >
                    <h2 className="heading-text pt-6 uppercase underline dark:text-primary">
                        Accomplishments
                    </h2>
                    <div className="p-4 pb-6">
                        <ul className="list-inside list-disc">
                            {project.accomplishments.map((accomplishment) => (
                                <li
                                    className="body-text dark:text-primary"
                                    key={accomplishment}
                                >
                                    {accomplishment}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {project.videoPath !== '' && (
                    <section
                        className="w-full bg-primary pb-6 pt-4 xxs:px-2 lg:px-4 dark:bg-darkPrimary"
                        id="project-demo"
                    >
                        <h2 className="heading-text py-2 uppercase underline dark:text-primary">
                            Demo
                        </h2>
                        <div className="mx-auto flex h-full w-full max-w-[4000px] flex-col overflow-hidden">
                            <video
                                controls
                                muted
                                preload="auto"
                                title={`${project.name} Demo`}
                            >
                                <source
                                    src={project.videoPath}
                                    type="video/mp4"
                                />
                            </video>
                        </div>
                    </section>
                )}
            </main>
            <Footer />
        </div>
    );
}

export default ProjectShowcasePage;
