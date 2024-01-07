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
          <h2 className="heading-text uppercase text-secondary underline dark:text-primary">
            Sitemap
          </h2>
        </div>

        <div className="pb-6 lg:grid lg:grid-cols-3">
          <div className="px-4 py-2">
            <Link to="/" id="home" title="View the homepage">
              <h3 className="subheading-text text-accent decoration-secondary hover:underline dark:text-darkAccent dark:decoration-primary">
                Home
              </h3>
            </Link>

            <div className="py-2">
              <Link to="/contact" id="contact" title="Send me an email">
                <h4 className="body-text text-accent decoration-secondary hover:underline dark:text-darkAccent dark:decoration-primary">
                  Contact
                </h4>
              </Link>
            </div>
          </div>

          <div className="px-4 py-2">
            <Link to="/about" id="about" title="Read more about me">
              <h3 className="subheading-text text-accent decoration-secondary hover:underline dark:text-darkAccent dark:decoration-primary">
                About
              </h3>
            </Link>

            <div className="py-2">
              <Link
                to="/education/courses"
                id="courses"
                title="View my university courses"
              >
                <h4 className="body-text text-accent decoration-secondary hover:underline dark:text-darkAccent dark:decoration-primary">
                  Courses
                </h4>
              </Link>
            </div>
          </div>
          <div className="px-4 pt-2">
            <Link to="/projects" id="projects" title="Read more about me">
              <h3 className="subheading-text text-accent decoration-secondary hover:underline dark:text-darkAccent dark:decoration-primary">
                Projects
              </h3>
            </Link>

            {projectData.projects.map((project) => (
              <div key={project.name} className="py-2">
                <Link
                  to={project.projectPageUrl}
                  id={project.name}
                  title={"Read more about " + project.name}
                >
                  <h4 className="body-text text-accent decoration-secondary hover:underline dark:text-darkAccent dark:decoration-primary">
                    {project.name}{" "}
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
