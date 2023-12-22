import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React from "react";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ProjectShowcasePage(props) {
  const project = props.project;
  console.log(project.imagePath);
  return (
    <main className="h-screen w-screen snap-y overflow-x-hidden overflow-y-scroll scroll-smooth bg-white pb-4 scrollbar scrollbar-track-teal-400 scrollbar-thumb-red-500">
      <div className="flex justify-center bg-gradient-to-r from-red-500 to-teal-400">
        <div className="max-w-md  ">
          <h2 className="text-center font-heading text-4xl font-bold">
            {project.name}
          </h2>
          <div className="max-w-sm">
            <h3 className="text-center font-thin">{project.description}</h3>
          </div>
          <div className="max-w-sm">
            <p className="text-center font-body text-black">
              {project.technologiesUsed.join(", ")}
            </p>
          </div>
          <div>
            <div className="flex justify-center pt-1">
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
      </div>

      {project.imagePath !== "" && (
        <div className="mx-auto bg-white py-4">
          <h2 className="pt-2 text-center text-2xl font-bold uppercase underline">
            Demo
          </h2>
          <div className="mx-auto max-w-lg rounded-lg">
            <img className="w-full" src={project.imagePath}></img>
          </div>
        </div>
      )}

      <div className="mx-auto bg-white py-4">
        <h2 className="pt-2 text-center text-2xl font-bold uppercase underline">
          Accomplishments
        </h2>
        <div>
          <ul className="max-w-4xl list-inside list-disc">
            {project.accomplishments.map((accomplishment) => (
              <li key={accomplishment}>{accomplishment}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

ProjectShowcasePage.propTypes = {
  project: PropTypes.object,
};

export default ProjectShowcasePage;
