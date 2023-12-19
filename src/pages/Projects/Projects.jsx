import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import projectData from "../../assets/data/projects";

function Projects() {
  const projects = projectData.projects;
  return (
    <main className="h-screen w-screen snap-y overflow-x-hidden overflow-y-scroll scroll-smooth bg-gradient-to-r from-red-500 to-teal-400 pb-4 scrollbar scrollbar-track-teal-400 scrollbar-thumb-red-500">
      <section className="mx-auto py-6">
        <div>
          <h2 className="pt-2 text-center text-2xl font-bold uppercase text-white underline">
            Projects
          </h2>
          <div className="mx-auto grid max-w-2xl grid-cols-2">
            {projects.map((project) => (
              <div
                key={project}
                className="m-1 rounded-lg bg-white px-2 pb-6 shadow-md"
              >
                <h2 className="text-center font-heading font-semibold uppercase">
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
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
                      href={"/projects/" + project.name.toLowerCase()}
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
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Projects;
