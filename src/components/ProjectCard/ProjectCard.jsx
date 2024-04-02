import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ProjectCard(props) {
  const project = props.project;
  return (
    <section
      id={project.name}
      className="mt-2 rounded-lg border-4 border-accent bg-primary bg-gradient-to-r pb-6 shadow-md dark:border-darkAccent dark:bg-darkSecondary"
    >
      <h2 className="heading-text px-2 pt-2 text-center text-secondary dark:text-primary">
        {project.name}
      </h2>

      <p className="subheading-text text-center uppercase text-secondary dark:text-primary">
        {project.startDate} - {project.endDate}
      </p>

      <div className="mx-2 md:px-2 py-2">
        <h3 className="body-text text-center dark:text-primary">
          {project.description}
        </h3>
      </div>

      <section
        id="technologies-used"
        className="container m-2 mx-auto grid justify-center py-2 sm:grid sm:grid-cols-2"
      >
        {project.technologiesUsed.map((tech) => (
          <div
            key={tech}
            className="container mx-auto mb-2 rounded-full border-4 border-accent bg-secondary hover:cursor-default xxs:w-[100%] xxs:px-2 sm:w-[90%] lg:w-[90%] dark:border-darkAccent dark:bg-darkSecondary dark:text-primary"
          >
            <h2 className="tech-text text-center text-primary dark:text-primary">
              {tech}
            </h2>
          </div>
        ))}
      </section>

      {project.githubUrl !== "" && (
        <section
          id="project-icons"
          className="mx-auto flex w-full justify-center space-x-2 pb-4 pt-2 lg:space-x-4"
        >
          {project.githubUrl != "" && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              id={project.name + "- github"}
              title="View the GitHub repository"
            >
              <FontAwesomeIcon icon={faGithub} className="social-icons" />
            </a>
          )}
          {project.documentationUrl != "" && (
            <a
              href={project.documentationUrl}
              target="_blank"
              rel="noopener noreferrer"
              id={project.name + "- documentation"}
              title="View the project documentation"
            >
              <FontAwesomeIcon icon={faBookOpen} className="social-icons" />
            </a>
          )}
        </section>
      )}

      <section
        id="project-additional-info"
        className="2xl:py-2 mx-auto w-36 rounded-lg border-b-4 border-secondary bg-accent drop-shadow-lg hover:cursor-pointer hover:bg-accent/80 xxs:w-[90%]  dark:border-primary dark:bg-darkAccent dark:hover:bg-darkAccent/80"
      >
        <Link to={project.projectPageUrl} id={project.name + "-showcase"}>
          <h2 className="body-text m-auto py-2 text-center font-semibold uppercase text-secondary dark:text-primary">
            Read more
          </h2>
        </Link>
      </section>
    </section>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectCard;
