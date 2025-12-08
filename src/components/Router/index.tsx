import { Route, Routes } from 'react-router-dom';
import { projectData } from '~data/projects';
import About from '~pages/About';
import Contact from '~pages/Contact';
import Courses from '~pages/Courses';
import Home from '~pages/Home';
import ProjectShowcase from '~pages/ProjectShowcase';
import Projects from '~pages/Projects';
import Sitemap from '~pages/Sitemap';

function Router() {
  const projects = projectData.projects;
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<About />} path="/about" />
      <Route element={<Contact />} path="/contact" />
      <Route element={<Courses />} path="/education/courses" />
      <Route element={<Projects />} path="/projects" />
      {projects.map((project) => (
        <Route
          element={<ProjectShowcase project={project} />}
          key={project.name}
          path={project.projectPageUrl}
        />
      ))}
      <Route element={<Sitemap />} path="/sitemap" />
    </Routes>
  );
}

export default Router;
