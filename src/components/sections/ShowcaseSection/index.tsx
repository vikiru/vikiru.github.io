import { Link } from '@tanstack/react-router';
import { FaBook, FaGithub } from 'react-icons/fa6';
import VideoPlayer from '@/components/ui/VideoPlayer';
import type { Project } from '@/types/Project';

type ShowcaseSectionProps = {
  project: Project;
};

function ShowcaseSection({ project }: ShowcaseSectionProps) {
  return (
    <section
      className="bg-background-950 min-h-screen overflow-hidden"
      id={`${project.name}-showcase`}
    >
      {/* Project Info Section */}
      <section
        className="flex pt-12 xs:flex-col sm:flex-row sm:items-center sm:justify-between"
        id="project-info"
      >
        <div className="mx-4 flex items-center gap-2 xl:gap-3 7xl:gap-8 10xl:mx-10 10xl:gap-10">
          <div className="7xl:py-12 11xl:py-16">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              <span>
                <Link
                  className="text-muted-foreground underline transition-colors hover:text-accent"
                  to="/projects"
                >
                  projects
                </Link>
                {' / '}
              </span>
              {project.name}
            </h2>
          </div>

          <section
            className="mt-1 flex items-center gap-2 text-muted-foreground xl:gap-3 7xl:gap-8 10xl:gap-10"
            id="project-links"
          >
            {project.githubUrl ? (
              <a
                className="transition-colors hover:text-accent"
                href={project.githubUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaGithub />
              </a>
            ) : (
              <span className="invisible text-muted-foreground">
                <FaGithub />
              </span>
            )}

            {project.documentationUrl ? (
              <a
                className="transition-colors hover:text-accent"
                href={project.documentationUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaBook />
              </a>
            ) : (
              <span className="invisible text-muted-foreground">
                <FaBook />
              </span>
            )}
          </section>
        </div>

        <div className="mx-4 10xl:mx-10">
          <p className="text-muted-foreground 3xl:text-lg 8xl:text-2xl">
            {project.startDate} - {project.endDate}
          </p>
        </div>
      </section>

      {/* Project Description Section */}
      <section
        className="mx-4 lg:my-2 2xl:mt-2 3xl:mt-4 6xl:-mt-2 10xl:mx-10"
        id="project-description"
      >
        <p className="body-text text-muted-foreground">{project.description}</p>
      </section>

      {/* Technologies Used Section */}
      <section
        className="mx-4 mt-2 flex flex-wrap pb-4 xs:gap-2 md:gap-3 8xl:gap-6 10xl:mx-10"
        id="tech-stack"
      >
        {project.technologiesUsed.map((tech) => (
          <div
            className="mt-2 rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground"
            key={tech}
          >
            {tech}
          </div>
        ))}
      </section>

      <div className="my-4 border-t border-gray-300 dark:border-dark-background-600" />

      {/* Project Authors Section */}
      <section
        className="mx-4 7xl:py-12 10xl:mx-10 11xl:py-16"
        id="project-authors"
      >
        <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
          Co-Authors
        </h3>
        <div className="7xl:mt-10">
          <p className="body-text mt-2 pb-4 text-muted-foreground">
            {project.contributors}.
          </p>
        </div>
      </section>

      <div className="my-4 border-t border-gray-300 dark:border-dark-background-600" />

      {/* Accomplishments Section */}
      <section
        className="mx-4 7xl:py-12 10xl:mx-10 11xl:py-16"
        id="project-accomplishments"
      >
        <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
          Accomplishments
        </h3>

        <div className="mx-2 mt-2 pb-4">
          <ul className="list-inside list-disc 7xl:mt-10 8xl:mt-16">
            {project.accomplishments.map((accomplishment) => (
              <li
                className="text-muted-foreground leading-relaxed 3xl:text-lg 8xl:text-2xl"
                key={accomplishment}
              >
                {accomplishment}.
              </li>
            ))}
          </ul>
        </div>
      </section>

      {project.videoPath !== '' && (
        <div className="my-4 border-t border-gray-300 dark:border-dark-background-600" />
      )}

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
