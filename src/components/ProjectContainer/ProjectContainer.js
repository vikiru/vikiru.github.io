import ProjectCard from "../ProjectCard/ProjectCard";
import React from "react";
import projectData from "../../assets/projects";

function ProjectContainer() {
  const projects = projectData.projects;
  const projectDisplay = (
    <div className="h-screen w-screen overflow-y-auto overflow-x-hidden bg-black">
      <h1 className="section-text">Projects</h1>
      <div className="flex flex-col">
        {/* Project Info Div */}
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
        ;
      </div>
    </div>
  );
  return projectDisplay;
}

export default ProjectContainer;
