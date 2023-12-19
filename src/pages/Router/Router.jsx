import { Route, Routes } from "react-router-dom";

import Home from "../Home/Home";
import ProjectShowcase from "../ProjectShowcase/ProjectShowcase";
import Projects from "../Projects/Projects";
import React from "react";
import projectData from "../../assets/data/projects";

function Router() {
  const projects = projectData.projects;
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/projects" element={<Projects />}></Route>
      {projects.map((project) => (
        <Route
          key={project}
          path={"/projects/" + project.name.toLowerCase()}
          element={<ProjectShowcase project={project} />}
        />
      ))}
      <Route path="/projects/Urvo" element={<ProjectShowcase />}></Route>
    </Routes>
  );
}

export default Router;
