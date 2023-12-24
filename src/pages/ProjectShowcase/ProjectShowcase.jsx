import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import PropTypes from "prop-types";
import React from "react";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ProjectShowcasePage(props) {
  const project = props.project;
  return (
    <div className="h-screen w-screen snap-y overflow-x-hidden overflow-y-scroll scroll-smooth bg-white scrollbar scrollbar-track-teal-400 scrollbar-thumb-red-500">
      <NavBar />
      <main>
        <section className="mb-auto flex justify-center py-6">
          <div className="max-w-md  ">
            <h2 className="text-center font-heading text-4xl font-bold lg:text-5xl">
              {project.name}
            </h2>
            <p className="text-center font-body uppercase lg:text-xl">
              {project.startDate} - {project.endDate}
            </p>
            <div className="mx-auto max-w-sm">
              <h3 className="text-center font-body lg:text-2xl">
                {project.description}
              </h3>
            </div>

            <div className="flex justify-center gap-2">
              {project.technologiesUsed.map((tech) => (
                <div
                  key={tech}
                  className="w-auto max-w-lg bg-white px-2 lg:py-2"
                >
                  <h2 className="text-center font-subheading font-semibold text-black lg:text-xl">
                    {tech}
                  </h2>
                </div>
              ))}
            </div>
            <div>
              <div className="flex justify-center py-2">
                {project.githubUrl != "" && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="lg:ease-in-out-anim pr-1 text-3xl text-black lg:text-5xl"
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
                      className="lg:ease-in-out-anim pr-1 text-3xl text-black lg:text-5xl"
                    />
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {project.imagePath !== "" && (
          <div className="mx-auto bg-white py-4">
            <h2 className="py-2 text-center text-2xl font-bold uppercase underline lg:text-4xl">
              Demo
            </h2>
            <div className="mx-auto flex max-w-2xl justify-center lg:max-w-5xl">
              <img
                className="object-fit h-auto w-full"
                src={project.imagePath}
                alt={`${project.name} Demo`}
                title={`${project.name} Demo`}
              ></img>
            </div>
          </div>
        )}

        <div className="mx-auto max-w-3xl py-4 lg:max-w-7xl">
          <h2 className="pt-2 text-center text-2xl font-bold uppercase underline lg:text-4xl">
            Accomplishments
          </h2>
          <div className="mb-auto p-6">
            <ul className="list-inside list-disc">
              {project.accomplishments.map((accomplishment) => (
                <li key={accomplishment} className="lg:text-2xl">
                  {accomplishment}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

ProjectShowcasePage.propTypes = {
  project: PropTypes.object,
};

export default ProjectShowcasePage;
