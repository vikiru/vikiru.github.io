import { Route, Routes } from 'react-router-dom';
import { projectData } from '~data/index';
import {
  About,
  Contact,
  Courses,
  Home,
  ProjectShowcase,
  Projects,
  Sitemap,
} from '~pages/index';

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
