import ProjectCard from "../ProjectCard/ProjectCard";
import React from "react";
import projectData from "../../assets/projects";

function ProjectContainer() {
  const projects = projectData.projects;
  return (
    <section id="projects" className="snap-center">
      <h1 className="section-text">Projects</h1>
      <div className="flex flex-col">
        {/* Project Info Div */}
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectContainer;
