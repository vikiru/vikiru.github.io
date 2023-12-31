import { Route, Routes } from "react-router-dom";

import About from "../About/About";
import Contact from "../Contact/Contact";
import Courses from "../Courses/Courses";
import Home from "../Home/Home";
import ProjectShowcase from "../ProjectShowcase/ProjectShowcase";
import Projects from "../Projects/Projects";
import React from "react";
import Sitemap from "../Sitemap/Sitemap";
import projectData from "../../assets/data/projects";

function Router() {
  const projects = projectData.projects;
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/education/courses" element={<Courses />} />
      <Route path="/projects" element={<Projects />} />
      {projects.map((project) => (
        <Route
          key={project.name}
          path={project.projectPageUrl}
          element={<ProjectShowcase project={project} />}
        />
      ))}
      <Route path="/sitemap" element={<Sitemap />} />
    </Routes>
  );
}

export default Router;
