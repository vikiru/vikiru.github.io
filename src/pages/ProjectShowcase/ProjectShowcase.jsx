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
    <div className="flex h-screen w-screen snap-y flex-col overflow-x-hidden overflow-y-scroll scroll-smooth bg-primary scrollbar scrollbar-track-primary scrollbar-thumb-accent dark:bg-darkPrimary dark:scrollbar-thumb-darkAccent">
      <NavBar />
      <main>
        <section
          className="bg-primary p-4 pb-2 xxs:p-2 dark:bg-darkPrimary"
          id="project-info"
        >
          <h2 className="heading-text pb-2 dark:text-primary">
            <Link
              to="/projects"
              className="text-accent underline hover:bg-accent hover:text-secondary dark:text-darkAccent hover:dark:bg-darkAccent hover:dark:text-darkSecondary"
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
            className="py-2 xxs:grid sm:grid-cols-2"
          >
            {project.technologiesUsed.map((tech) => (
              <div
                key={tech}
                className="mb-2 mr-2 rounded-full border-4 border-accent bg-secondary hover:cursor-pointer sm:w-[90%] md:w-[80%] xl:w-[90%] dark:border-darkAccent dark:bg-darkSecondary"
              >
                <h2 className="body-text m-auto py-2 text-center text-primary dark:text-primary">
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
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="lg:ease-in-out-anim pr-4 text-accent xxs:text-4xl md:text-5xl lg:text-5xl xl:text-6xl dark:text-darkAccent"
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
                    className="lg:ease-in-out-anim pr-1 text-accent xxs:text-4xl md:text-5xl lg:text-5xl xl:text-6xl dark:text-darkAccent"
                  />
                </a>
              )}
            </div>
          </section>
        </section>

        {project.imagePath !== "" && (
          <section
            id="project-demo"
            className="bg-primary pb-2 xxs:p-2 dark:bg-darkPrimary"
          >
            <h2 className="heading-text py-2 uppercase underline dark:text-primary">
              Demo
            </h2>
            <div className="flex justify-center xxs:h-[8rem] sm:h-[20rem] md:h-auto">
              <img
                className="w-full border-4 border-accent object-cover dark:border-darkAccent"
                src={project.imagePath}
                alt={`${project.name} Demo`}
                title={`${project.name} Demo`}
              ></img>
            </div>
          </section>
        )}

        <section id="project-accomplishments" className="pb-6 xxs:px-2 lg:px-4">
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
      </main>
      <Footer />
    </div>
  );
}

ProjectShowcasePage.propTypes = {
  project: PropTypes.object,
};

export default ProjectShowcasePage;
