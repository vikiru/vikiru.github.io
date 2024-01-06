import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./../../components/Footer/Footer";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import PropTypes from "prop-types";
import React from "react";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ProjectShowcasePage(props) {
  const project = props.project;
  return (
    <div className="flex h-screen w-screen snap-y flex-col overflow-x-hidden overflow-y-scroll scroll-smooth bg-primary scrollbar-thin scrollbar-track-primary scrollbar-thumb-accent lg:scrollbar dark:bg-darkPrimary dark:scrollbar-track-darkPrimary dark:scrollbar-thumb-darkAccent">
      <NavBar />
      <main>
        <section
          className="bg-primary p-4 pb-6 xxs:px-2 lg:px-4 dark:bg-darkPrimary"
          id="project-info"
        >
          <h2 className="heading-text pb-2 dark:text-primary">
            <Link
              to="/projects"
              className="text-accentSecondary underline hover:bg-accent hover:text-secondary dark:text-darkAccent hover:dark:bg-darkAccent hover:dark:text-darkSecondary"
              title="View my other projects"
            >
              projects
            </Link>{" "}
            / {project.name}
          </h2>

          <h3 className="body-text py-1 uppercase dark:text-primary">
            {project.startDate} - {project.endDate}
          </h3>

          <div className="py-2">
            <p className="body-text dark:text-primary">{project.description}</p>
          </div>

          <section
            id="technologies-used"
            className="py-2 xxs:grid xxs:grid-cols-2 lg:grid-cols-3"
          >
            {project.technologiesUsed.map((tech) => (
              <div
                key={tech}
                className="container mb-2 rounded-full bg-secondary hover:cursor-default xxs:w-[100%] sm:w-[80%] sm:px-2 lg:w-[90%] dark:border-darkAccent dark:bg-darkSecondary dark:text-primary"
              >
                <h2 className="tech-text text-center text-primary dark:text-primary">
                  {tech}
                </h2>
              </div>
            ))}
          </section>

          <section id="project-icons" className="flex justify-center">
            <div className="p-2">
              {project.githubUrl != "" && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="Project GitHub Link"
                  title="View the GitHub repository"
                >
                  <FontAwesomeIcon icon={faGithub} className="social-icons" />
                </a>
              )}
              {project.documentationUrl != "" && (
                <a
                  href={project.documentationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="Project Documentation Link"
                  title="View the project documentation"
                >
                  <FontAwesomeIcon icon={faBookOpen} className="social-icons" />
                </a>
              )}
            </div>
          </section>
        </section>

        <section id="project-contributors" className="pb-4 xxs:px-2 lg:px-4">
          <h2 className="heading-text uppercase underline dark:text-primary">
            Co-Authors
          </h2>
          <div className="pt-2">
            <h3 className="subheading-text text-secondary dark:text-primary">
              {project.contributors}
            </h3>
          </div>
        </section>

        <section
          id="project-accomplishments"
          className="p-4 pb-6 xxs:px-2 lg:px-4"
        >
          <h2 className="heading-text pt-2 uppercase underline dark:text-primary">
            Accomplishments
          </h2>
          <div className="p-4 pb-6">
            <ul className="list-inside list-disc">
              {project.accomplishments.map((accomplishment) => (
                <li
                  key={accomplishment}
                  className="body-text dark:text-primary"
                >
                  {accomplishment}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {project.videoPath !== "" && (
          <section
            id="project-demo"
            className="w-full bg-primary p-4 pb-6 xxs:px-2 lg:px-4 dark:bg-darkPrimary"
          >
            <h2 className="heading-text py-2 uppercase underline dark:text-primary">
              Demo
            </h2>
            <div className="mx-auto h-full w-full flex-col overflow-hidden">
              <video
                muted
                controls
                preload="auto"
                title={`${project.name} Demo`}
                alt={`${project.name} Demo`}
              >
                <source src={project.videoPath} type="video/mp4" />
              </video>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}

ProjectShowcasePage.propTypes = {
  project: PropTypes.object,
};

export default ProjectShowcasePage;
