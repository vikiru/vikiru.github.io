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
        <section
            className="mt-2 rounded-lg border-4 border-accent bg-primary bg-gradient-to-r pb-6 shadow-md dark:border-darkAccent dark:bg-darkSecondary"
            id={project.name}
        >
            <h2 className="heading-text px-2 pt-2 text-center text-secondary dark:text-primary">
                {project.name}
            </h2>

            <p className="subheading-text text-center uppercase text-secondary dark:text-primary">
                {project.startDate} - {project.endDate}
            </p>

            <div className="mx-2 py-2 md:px-2">
                <h3 className="body-text text-center dark:text-primary">
                    {project.description}
                </h3>
            </div>

            <section
                className="container m-2 mx-auto grid justify-center py-2 sm:grid sm:grid-cols-2"
                id="technologies-used"
            >
                {project.technologiesUsed.map((tech) => (
                    <div
                        className="container mx-auto mb-2 rounded-full border-4 border-accent bg-secondary hover:cursor-default xxs:w-full xxs:px-2 sm:w-[90%] lg:w-[90%] dark:border-darkAccent dark:bg-darkSecondary dark:text-primary"
                        key={tech}
                    >
                        <h2 className="tech-text text-center text-primary dark:text-primary">
                            {tech}
                        </h2>
                    </div>
                ))}
            </section>

            {project.githubUrl !== '' && (
                <section
                    className="mx-auto flex w-full justify-center space-x-2 pb-4 pt-2 lg:space-x-4"
                    id="project-icons"
                >
                    {project.githubUrl !== '' && (
                        <a
                            href={project.githubUrl}
                            id={project.name + '- github'}
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
                            id={project.name + '- documentation'}
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
            )}

            <section
                className="mx-auto w-36 rounded-lg border-b-4 border-secondary bg-accent drop-shadow-lg hover:cursor-pointer hover:bg-accent/80 xxs:w-[90%] 2xl:py-2  dark:border-primary dark:bg-darkAccent dark:hover:bg-darkAccent/80"
                id="project-additional-info"
            >
                <Link
                    id={project.name + '-showcase'}
                    to={project.projectPageUrl}
                >
                    <h2 className="body-text m-auto py-2 text-center font-semibold uppercase text-secondary dark:text-primary">
                        Read more
                    </h2>
                </Link>
            </section>
        </section>
    );
}

export default ProjectCard;
