import ProjectCard from "../ProjectCard/ProjectCard";
import React from "react";
import projectData from "../../assets/data/projects";

function ProjectContainer() {
  const projects = projectData.projects;
  return (
    <section className="mx-auto py-6">
      <div>
        <h2 className="text-secondary pt-2 text-center text-2xl font-bold uppercase underline lg:text-4xl">
          Projects
        </h2>
        <div className="mx-auto grid grid-cols-2 gap-4">
          {projects.map((project) => (
            <ProjectCard project={project} key={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectContainer;
