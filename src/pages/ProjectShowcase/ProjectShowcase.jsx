import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./../../components/Footer/Footer";
import PropTypes from "prop-types";
import React from "react";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ProjectShowcasePage(props) {
  const project = props.project;
  return (
    <div className="h-screen w-screen snap-y overflow-x-hidden overflow-y-scroll scroll-smooth bg-white scrollbar scrollbar-track-teal-400 scrollbar-thumb-red-500">
      <main>
        <section className="mb-auto flex justify-center py-6">
          <div className="max-w-md  ">
            <h2 className="text-center font-heading text-4xl font-bold">
              {project.name}
            </h2>
            <p className="text-center font-body font-thin uppercase">
              {project.startDate} - {project.endDate}
            </p>
            <div className="mx-auto max-w-sm">
              <h3 className="text-center font-body">{project.description}</h3>
            </div>
            <div className="mx-auto max-w-sm py-1">
              <p className="text-center font-body text-black">
                {project.technologiesUsed.join(", ")}
              </p>
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
                      className="lg:ease-in-out-anim pr-1 text-3xl text-black"
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
                      className="lg:ease-in-out-anim pr-1 text-3xl text-black"
                    />
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {project.imagePath !== "" && (
          <div className="mx-auto bg-white py-4">
            <h2 className="pt-2 text-center text-2xl font-bold uppercase underline">
              Demo
            </h2>
            <div className="mx-auto flex max-w-3xl justify-center rounded-lg">
              <img
                className="object-fit h-auto w-auto"
                src={project.imagePath}
                alt={`${project.name} Demo`}
                title={`${project.name} Demo`}
              ></img>
            </div>
          </div>
        )}

        <div className="mx-auto mb-auto bg-white py-4">
          <h2 className="pt-2 text-center text-2xl font-bold uppercase underline">
            Accomplishments
          </h2>
          <div className="mb-auto p-6">
            <ul className="max-w-4xl list-inside list-disc">
              {project.accomplishments.map((accomplishment) => (
                <li key={accomplishment}>{accomplishment}</li>
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
