import "./ProjectContainer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import projectData from "../../assets/projects";
import shieldImages from "../../assets/shieldImages";

console.log(projectData);
console.log(shieldImages);
console.log(shieldImages[`Java`]);

function ProjectContainer() {
  const projects = projectData.projects;
  const projectDisplay = (
    <div className="overflow-x- h-screen w-screen overflow-y-auto bg-black">
      <h1 className="section-text">Projects</h1>
      <div className="flex flex-col">
        {/* Project Info Div */}
        {projects.map((project) => (
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
                    <img
                      key={technology}
                      src={shieldImages[`${technology}`]}
                      className="shield-image"
                    ></img>
                  ) : null,
                )}
              </div>
              {/* Project URLs */}
              <div className="pt-4 2xl:flex">
                <a href={project.githubUrl}>
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="social-icon pr-1"
                  />
                </a>
                {project.documentationUrl != "" && (
                  <a href={project.documentationUrl}>
                    <FontAwesomeIcon
                      icon={faBookOpen}
                      className="social-icon"
                    />
                  </a>
                )}
              </div>
            </div>
            <details>
              <summary className=" font-mono text-black">
                View My Accomplishments
              </summary>
              <ul className="list-disc">
                {project.accomplishments.map((accomplishment) => (
                  <li
                    className="text-left font-mono text-sm text-black"
                    key={accomplishment}
                  >
                    {accomplishment}
                  </li>
                ))}
              </ul>
            </details>
          </div>
        ))}
        ;
      </div>
    </div>
  );
  return projectDisplay;
}

export default ProjectContainer;
