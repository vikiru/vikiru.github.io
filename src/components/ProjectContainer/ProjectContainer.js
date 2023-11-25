import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import projectData from "../../assets/projects";

console.log(projectData);

function ProjectContainer() {
  const projects = projectData.projects;
  const projectDisplay = (
    <div>
      <div className="bg-black">
        <h1 className="text-left text-xl text-white underline">Projects</h1>
        <div className="flex flex-col">
          {projects.map((project) => (
            <div
              className="m-2 rounded-xl bg-blue-400 p-5 text-white"
              key={project}
            >
              <div className="flex justify-between">
                <p className="text-md font-semibold uppercase text-slate-100">
                  {project.name}
                </p>
                <p className="text-md text-right uppercase text-slate-100">
                  {project.startDate} - {project.endDate}
                </p>
              </div>
              <p className="text-left text-sm text-lime-200">
                {project.description}
              </p>
              <div className="flex">
                <a href={project.githubUrl}>
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="pr-2 pt-4 text-3xl"
                  />
                </a>
                {project.documentationUrl != "" && (
                  <a href={project.documentationUrl}>
                    <FontAwesomeIcon
                      icon={faBookOpen}
                      className="pt-4 text-3xl"
                    />
                  </a>
                )}
              </div>
              <details>
                <summary className="text-black">
                  View My Accomplishments
                </summary>
                <ul className="list-disc">
                  {project.accomplishments.map((accomplishment) => (
                    <li
                      className="text-left text-sm text-black"
                      key={accomplishment}
                    >
                      {accomplishment}
                    </li>
                  ))}
                </ul>
                <div className="flex">
                  {project.technologiesUsed.map((technology) => (
                    <p key={technology}>{technology}</p>
                  ))}
                </div>
              </details>
            </div>
          ))}
          ;
        </div>
      </div>
    </div>
  );
  return projectDisplay;
}

export default ProjectContainer;
