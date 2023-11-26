import ProjectCard from "../ProjectCard/ProjectCard";
import React from "react";
import projectData from "../../assets/projects";

function ProjectContainer() {
  const projects = projectData.projects;
  return (
    <section id="projects" className="snap-center">
      <h1 className="section-text">Projects</h1>
      <section className="grid grid-cols-1">
        {/* Project Info Div */}
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </section>
    </section>
  );
}

export default ProjectContainer;
