import {
  faArrowUpRightFromSquare,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ProjectCard(props) {
  const project = props.project;
  return (
    <div className="bg-primary rounded-md px-2 pb-6 shadow-md ring-2">
      <h2 className="text-secondary text-center font-heading font-semibold uppercase lg:text-3xl">
        {project.name}
      </h2>
      <p className="text-backup mx-auto text-center font-body uppercase lg:text-xl">
        {project.startDate} - {project.endDate}
      </p>

      <div className="mx-auto max-w-sm">
        <h3 className="text-center font-subheading leading-6 lg:text-xl">
          {project.description}
        </h3>
      </div>

      <div className="m-2 mx-auto max-w-lg justify-center xs:grid xs:grid-cols-2 lg:gap-2">
        {project.technologiesUsed.map((tech) => (
          <div
            key={tech}
            className="mx-auto flex w-auto max-w-xl items-center rounded-full px-2 lg:py-2"
          >
            <h2 className="text-secondary text-center font-subheading font-semibold">
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
                className="lg:ease-in-out-anim text-accent pr-4 text-3xl lg:text-5xl"
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
                className="lg:ease-in-out-anim text-accent pr-1 text-3xl lg:text-5xl"
              />
            </a>
          )}
        </div>
      )}

      <div className="bg-secondary mx-auto flex max-w-sm justify-center pt-1">
        <button className="rounded px-4 py-2">
          <span className="text-md text-accent font-subheading uppercase lg:text-xl">
            Read More
          </span>
          <a
            href={project.projectPageUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="lg:ease-in-out-anim text-accent pl-1 text-lg"
              icon={faArrowUpRightFromSquare}
            />
          </a>
        </button>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectCard;
