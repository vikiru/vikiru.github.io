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
    <div className="flex h-screen w-screen snap-y flex-col overflow-x-hidden overflow-y-scroll scroll-smooth bg-primary scrollbar scrollbar-track-primary scrollbar-thumb-secondary dark:bg-darkPrimary">
      <NavBar />
      <main>
        <section
          className="bg-primary p-4 dark:bg-darkPrimary"
          id="project-info"
        >
          <h2 className="heading-text pb-2 xxs:text-lg md:text-4xl lg:text-5xl  dark:text-darkSecondary">
            <Link
              to="/projects"
              className="text-accent underline hover:bg-accent hover:text-secondary"
              title="View my other projects"
            >
              projects
            </Link>{" "}
            / {project.name}
          </h2>
          <h3 className="subheading-text uppercase lg:text-xl  dark:text-darkSecondary">
            {project.startDate} - {project.endDate}
          </h3>
          <div>
            <p className="body-text lg:text-2xl  dark:text-darkSecondary">
              {project.description}
            </p>
          </div>

          <section
            id="technologies-used"
            className="py-2 xxs:grid sm:grid-cols-2 lg:flex lg:gap-2"
          >
            {project.technologiesUsed.map((tech) => (
              <div
                key={tech}
                className="mb-2 w-36 rounded-full bg-secondary hover:cursor-pointer dark:bg-darkAccent"
              >
                <h2 className="py-2 text-center font-body text-sm text-primary">
                  {tech}
                </h2>
              </div>
            ))}
          </section>

          <section id="project-icons" className="flex justify-center">
            <div className="py-2">
              {project.githubUrl != "" && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="lg:ease-in-out-anim pr-4 text-5xl text-accent lg:text-5xl dark:text-darkAccent"
                  />
                </a>
              )}
              {project.documentationUrl != "" && (
                <a
                  href={project.documentationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faBookOpen}
                    className="lg:ease-in-out-anim pr-1 text-5xl text-accent  lg:text-5xl dark:text-darkAccent"
                  />
                </a>
              )}
            </div>
          </section>
        </section>

        {project.imagePath !== "" && (
          <section
            id="project-demo"
            className="bg-primary p-4 dark:bg-darkPrimary"
          >
            <h2 className="heading-text py-2 uppercase underline lg:text-4xl  dark:text-darkSecondary">
              Demo
            </h2>
            <div className="flex justify-center">
              <img
                className="object-fit h-auto w-full"
                src={project.imagePath}
                alt={`${project.name} Demo`}
                title={`${project.name} Demo`}
              ></img>
            </div>
          </section>
        )}

        <section id="project-accomplishments" className="py px-4">
          <h2 className="heading-text pt-2 uppercase underline lg:text-4xl dark:text-darkSecondary">
            Accomplishments
          </h2>
          <div className="p-4">
            <ul className="list-inside list-disc">
              {project.accomplishments.map((accomplishment) => (
                <li
                  key={accomplishment}
                  className="body-text lg:text-2xl  dark:text-darkSecondary"
                >
                  {accomplishment}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

ProjectShowcasePage.propTypes = {
  project: PropTypes.object,
};

export default ProjectShowcasePage;
