import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React from "react";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ProjectCard(props) {
  const project = props.project;
  return (
    <section
      className="project-card snap-center shadow-lg"
      key={project}
      id={project.name}
    >
      {/* Project Name, Start - End Section */}
      <div className="lg:flex lg:justify-between">
        <p className="project-name xs:text-center">{project.name}</p>
        <p className="lg:project-dates xs:text-center xs:font-body xs:font-thin xs:uppercase xs:text-slate-100">
          {project.startDate} - {project.endDate}
        </p>
      </div>
      <p className="project-desc">{project.description}</p>
      <div className="2xl:flex 2xl:justify-between">
        {/* Technologies Used within Project Section */}
        <div>
          <p className="pl-1 text-sm xs:text-center lg:text-left">
            <span className="font-subheading font-thin text-gray-400">
              {project.technologiesUsed.join(", ")}
            </span>
          </p>
        </div>
        {/* Project URLs */}
        <section id="project-urls" className="flex justify-center pt-4">
          {project.githubUrl != "" && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="social-icon pr-1" />
            </a>
          )}
          {project.documentationUrl != "" && (
            <a
              href={project.documentationUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faBookOpen} className="social-icon" />
            </a>
          )}
        </section>
      </div>
      {/* Project Accomplishments */}
      <details>
        <summary className="text-center font-subheading uppercase text-gray-400 xs:text-sm md:text-base">
          View My Accomplishments
        </summary>
        <ul className="list-disc marker:text-gray-400">
          {project.accomplishments.map((accomplishment) => (
            <li
              className="text-left font-heading text-sm text-slate-50"
              key={accomplishment}
            >
              {accomplishment}
            </li>
          ))}
        </ul>
      </details>
    </section>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectCard;
