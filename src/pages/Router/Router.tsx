import { Route, Routes } from "react-router-dom";

import About from "~pages/About/About";
import Contact from "~pages/Contact/Contact";
import Courses from "~pages/Courses/Courses";
import Home from "~pages/Home/Home";
import ProjectShowcase from "~pages/ProjectShowcase/ProjectShowcase";
import Projects from "~pages/Projects/Projects";
import React from "react";
import Sitemap from "~pages/Sitemap/Sitemap";
import projectData from "~assets/data/projects";

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
