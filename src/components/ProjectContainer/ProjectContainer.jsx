import ProjectCard from "../ProjectCard/ProjectCard";
import React from "react";
import projectData from "../../assets/data/projects";

function ProjectContainer() {
  const projects = projectData.projects;
  return (
    <section className="mx-auto py-6" id="projects">
      <div className="px-4">
        <h2 className="heading-text pt-2 font-bold uppercase text-secondary underline dark:text-primary">
          Projects
        </h2>
        <div className="mx-auto gap-4 pb-6 pr-2 pt-2 xl:grid xl:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.name} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectContainer;
