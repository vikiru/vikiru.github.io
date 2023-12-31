import { Route, Routes } from "react-router-dom";

import About from "../About/About";
import Courses from "../Courses/Courses";
import Home from "../Home/Home";
import ProjectShowcase from "../ProjectShowcase/ProjectShowcase";
import Projects from "../Projects/Projects";
import React from "react";
import projectData from "../../assets/data/projects";

function Router() {
  const projects = projectData.projects;
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/education/courses" element={<Courses />} />
      <Route path="/projects" element={<Projects />} />
      {projects.map((project) => (
        <Route
          key={project.name}
          path={project.projectPageUrl}
          element={<ProjectShowcase project={project} />}
        />
      ))}
    </Routes>
  );
}

export default Router;
