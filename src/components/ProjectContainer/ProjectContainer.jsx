import ProjectCard from "../ProjectCard/ProjectCard";
import React from "react";
import projectData from "../../assets/data/projects";

function ProjectContainer() {
  const projects = projectData.projects;
  return (
    <section className="mx-auto py-6">
      <div>
        <h2 className="pt-2 text-center text-2xl font-bold uppercase text-secondary underline lg:text-4xl">
          Projects
        </h2>
        <div className="mx-auto grid gap-4 px-2 pt-2 xl:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard project={project} key={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectContainer;
