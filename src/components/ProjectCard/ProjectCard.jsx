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
    <div className="rounded-md bg-primary px-2 pb-6 shadow-md ring-2 dark:bg-darkSecondary">
      <h2 className="text-center font-heading font-semibold uppercase text-secondary lg:text-3xl">
        {project.name}
      </h2>
      <p className="mx-auto text-center font-body font-thin uppercase text-backup lg:text-xl">
        {project.startDate} - {project.endDate}
      </p>

      <div className="mx-auto max-w-sm">
        <h3 className="text-center font-subheading leading-6 lg:text-xl">
          {project.description}
        </h3>
      </div>

      <div className="m-2 mx-auto grid max-w-lg justify-center sm:grid-cols-2 lg:grid-cols-3 lg:gap-2">
        {project.technologiesUsed.map((tech) => (
          <div
            key={tech}
            className="mx-auto mb-2 flex w-auto max-w-xl items-center rounded-full bg-secondary px-2 lg:py-2 dark:bg-darkPrimary"
          >
            <h2 className="text-center font-subheading font-thin text-primary dark:text-darkSecondary">
              {tech}
            </h2>
          </div>
        ))}
      </div>

      {project.githubUrl !== "" && (
        <div className="mx-auto flex max-w-xs justify-center pb-2 pt-1">
          {project.githubUrl != "" && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="lg:ease-in-out-anim pr-4 text-3xl text-accent lg:text-5xl dark:text-darkAccent"
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
                className="lg:ease-in-out-anim pr-1 text-3xl text-accent  lg:text-5xl dark:text-darkAccent"
              />
            </a>
          )}
        </div>
      )}

      <div className="mx-auto flex max-w-sm justify-center bg-accent pt-1 dark:bg-darkAccent">
        <button className="rounded px-4 py-2">
          <span className="text-md font-subheading uppercase tracking-widest text-secondary lg:text-xl dark:text-darkSecondary">
            Read More
          </span>
          <Link
            to={project.projectPageUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="lg:ease-in-out-anim pl-1 text-lg text-secondary dark:text-darkSecondary"
              icon={faArrowUpRightFromSquare}
            />
          </Link>
        </button>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectCard;
