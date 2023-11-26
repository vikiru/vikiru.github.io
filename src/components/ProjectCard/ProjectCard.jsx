import "./ProjectCard.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React from "react";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import shieldImages from "../../assets/shieldImages";

function ProjectCard(props) {
  const project = props.project;
  return (
    <div className="project-card" key={project}>
      {/* Project Name, Start - End Section */}
      <div className="flex justify-between">
        <p className="project-name">{project.name}</p>
        <p className="project-dates">
          {project.startDate} - {project.endDate}
        </p>
      </div>
      <p className="project-desc">{project.description}</p>
      <div className="2xl:flex 2xl:justify-between">
        {/* Technologies Used within Project Section */}
        <div className="grid grid-cols-1 lg:flex">
          {project.technologiesUsed.map((technology) =>
            shieldImages[`${technology}`] != "" ? (
              <div key={technology} className="relative">
                <img
                  src={shieldImages[`${technology}`]}
                  className="shield-image w-full"
                  alt={technology}
                ></img>
              </div>
            ) : null,
          )}
        </div>
        {/* Project URLs */}
        <div className="pt-4 2xl:flex">
          {project.githubUrl != "" && (
            <a href={project.githubUrl}>
              <FontAwesomeIcon icon={faGithub} className="social-icon pr-1" />
            </a>
          )}
          {project.documentationUrl != "" && (
            <a href={project.documentationUrl}>
              <FontAwesomeIcon icon={faBookOpen} className="social-icon" />
            </a>
          )}
        </div>
      </div>
      <details>
        <summary className="font-mono capitalize text-black">
          View My Accomplishments
        </summary>
        <ul className="list-disc marker:text-black">
          {project.accomplishments.map((accomplishment) => (
            <li
              className="text-left font-mono text-sm text-slate-50"
              key={accomplishment}
            >
              {accomplishment}
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectCard;
