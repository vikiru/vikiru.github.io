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
    <div className="rounded-md bg-white px-2 pb-6 shadow-md">
      <h2 className="text-center font-heading font-semibold uppercase lg:text-3xl">
        {project.name}
      </h2>
      <p className="mx-auto text-center font-body uppercase lg:text-xl">
        {project.startDate} - {project.endDate}
      </p>

      <div className="mx-auto max-w-sm">
        <h3 className="text-center font-subheading leading-6 lg:text-2xl">
          {project.description}
        </h3>
      </div>

      <div className="flex justify-center gap-2">
        {project.technologiesUsed.map((tech) => (
          <div key={tech} className="w-auto max-w-lg bg-white px-2 lg:py-2">
            <h2 className="text-center font-subheading font-semibold text-black lg:text-xl">
              {tech}
            </h2>
          </div>
        ))}
      </div>

      {project.githubUrl !== "" ||
        (project.documentationUrl !== "" && (
          <div className="flex justify-center pt-1">
            {project.githubUrl != "" && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="lg:ease-in-out-anim pr-1 text-3xl text-black lg:text-5xl"
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
                  className="lg:ease-in-out-anim pr-1 text-3xl text-black lg:text-5xl"
                />
              </a>
            )}
          </div>
        ))}

      <div className="flex justify-center pt-1">
        <button className="rounded bg-black px-4 py-2">
          <span className="text-md font-subheading uppercase text-white lg:text-xl">
            Read More
          </span>
          <a
            href={project.projectPageUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="lg:ease-in-out-anim pl-1 text-lg text-white"
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
