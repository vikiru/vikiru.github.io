import {
  faArrowUpRightFromSquare,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ProjectCard(props) {
  const project = props.project;
  return (
    <section
      id={project.name}
      className="rounded-lg border-4 border-accent bg-primary bg-gradient-to-r px-2 pb-6 shadow-md dark:bg-darkSecondary"
    >
      <h2 className="heading-text pt-2 text-center text-secondary lg:text-3xl">
        {project.name}
      </h2>

      <p className="subheading-text text-center uppercase text-secondary lg:text-xl">
        {project.startDate} - {project.endDate}
      </p>

      <div>
        <h3 className="body-text text-center leading-8 lg:text-xl">
          {project.description}
        </h3>
      </div>

      <section
        id="technologies-used"
        className="m-2 mx-auto grid max-w-lg justify-center py-2 sm:grid-cols-2 lg:gap-2"
      >
        {project.technologiesUsed.map((tech) => (
          <div
            key={tech}
            className="mx-auto mb-2 w-36 rounded-full border-b-4 border-accent bg-secondary hover:cursor-default dark:bg-darkAccent"
          >
            <h2 className="m-auto py-2 text-center font-body text-sm text-primary">
              {tech}
            </h2>
          </div>
        ))}
      </section>

      {project.githubUrl !== "" && (
        <section
          id="project-icons"
          className="mx-auto flex max-w-xs justify-center pb-2 pt-1"
        >
          {project.githubUrl != "" && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="lg:ease-in-out-anim pr-4 text-5xl text-accent dark:text-darkAccent"
              />
            </a>
          )}
          {project.documentationUrl != "" && (
            <a
              href={project.documentationUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faBookOpen}
                className="lg:ease-in-out-anim pr-1 text-5xl text-accent  dark:text-darkAccent"
              />
            </a>
          )}
        </section>
      )}

      <section
        id="project-additional-info"
        className="mx-auto w-36 rounded-lg border-b-4 border-secondary bg-accent drop-shadow-lg  hover:cursor-pointer  hover:bg-accent/80 dark:bg-darkAccent dark:hover:bg-darkAccent/80"
      >
        <Link
          to={project.projectPageUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="about"
        >
          <h2 className="m-auto py-2 text-center font-heading font-semibold text-secondary">
            Read more <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
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
