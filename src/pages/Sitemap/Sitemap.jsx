import Footer from "./../../components/Footer/Footer";
import { Link } from "react-router-dom";
import NavBar from "./../../components/NavBar/NavBar";
import React from "react";
import projectData from "../../assets/data/projects";

function Sitemap() {
  return (
    <div className="flex h-screen w-screen snap-y flex-col overflow-x-hidden overflow-y-scroll scroll-smooth bg-primary scrollbar-thin scrollbar-track-primary scrollbar-thumb-accent lg:scrollbar dark:bg-darkPrimary dark:scrollbar-track-darkPrimary dark:scrollbar-thumb-darkAccent">
      <NavBar />
      <main>
        <div className="px-4 pt-4">
          <h2 className="heading-text uppercase underline dark:text-darkAccent">
            Sitemap
          </h2>
        </div>

        <div className="pb-6 lg:grid lg:grid-cols-3">
          <div className="px-4 py-2">
            <Link
              to="/"
              target="_blank"
              rel="noopener noreferrer"
              id="home"
              title="View the homepage"
            >
              <h3 className="subheading-text text-accent decoration-secondary hover:underline dark:text-darkAccent dark:decoration-darkSecondary">
                Home
              </h3>
            </Link>
          </div>

          <div className="px-4 py-2">
            <Link
              to="/about"
              target="_blank"
              rel="noopener noreferrer"
              id="about"
              title="Read more about me"
            >
              <h3 className="subheading-text text-accent decoration-secondary hover:underline dark:text-darkAccent dark:decoration-darkSecondary">
                About
              </h3>
            </Link>

            <div className="py-2">
              <Link
                to="/education/courses"
                target="_blank"
                rel="noopener noreferrer"
                id="courses"
                title="View my university courses"
              >
                <h4 className="body-text text-accent decoration-secondary hover:underline dark:text-darkAccent dark:decoration-darkSecondary">
                  Courses
                </h4>
              </Link>
            </div>
          </div>
          <div className="px-4 pt-2">
            <Link
              to="/projects"
              target="_blank"
              rel="noopener noreferrer"
              id="projects"
              title="Read more about me"
            >
              <h3 className="subheading-text text-accent decoration-secondary hover:underline dark:text-darkAccent dark:decoration-darkSecondary">
                Projects
              </h3>
            </Link>

            {projectData.projects.map((project) => (
              <div key={project.name} className="py-2">
                <Link
                  to={project.projectPageUrl}
                  rel="noopener noreferrer"
                  id={project.name}
                  title={"Read more about " + project.name}
                >
                  <h4 className="body-text text-accent decoration-secondary hover:underline dark:text-darkAccent dark:decoration-darkSecondary">
                    {project.name}
                  </h4>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Sitemap;
