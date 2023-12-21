import ProjectCard from "../ProjectCard/ProjectCard";
import React from "react";
import projectData from "../../assets/data/projects";

function ProjectContainer() {
  const projects = projectData.projects;
  return (
    <section className="mx-auto py-6">
      <div>
        <h2 className="pt-2 text-center text-2xl font-bold uppercase text-white underline">
          Projects
        </h2>
        <div className="mx-auto grid max-w-2xl grid-cols-2">
          {projects.map((project) => (
            <ProjectCard project={project} key={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectContainer;
