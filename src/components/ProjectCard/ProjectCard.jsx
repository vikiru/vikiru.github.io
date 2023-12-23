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
    <div key={project} className="m-1 rounded-lg bg-white px-2 pb-6">
      <h2 className="text-center font-heading font-semibold uppercase ">
        {project.name}
      </h2>
      <p className="text-center font-body font-thin uppercase">
        {project.startDate} - {project.endDate}
      </p>

      <div className="max-w-sm">
        <h3 className="text-center font-subheading leading-6">
          {project.description}
        </h3>
      </div>

      <div className="max-w-sm">
        <p className="text-center font-body font-thin text-slate-500">
          {project.technologiesUsed.join(", ")}
        </p>
      </div>

      <div className="flex justify-center pt-1">
        {project.githubUrl != "" && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faGithub}
              className="lg:ease-in-out-anim pr-1 text-3xl text-black"
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
              className="lg:ease-in-out-anim pr-1 text-3xl text-black"
            />
          </a>
        )}
      </div>

      <div className="flex justify-center pt-1">
        <button className="rounded bg-black px-4 py-2">
          <span className="text-md font-subheading uppercase text-white">
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
