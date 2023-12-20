import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React from "react";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ProjectShowcase(props) {
  const project = props.project;
  return (
    <main className="h-screen w-screen snap-y overflow-x-hidden overflow-y-scroll scroll-smooth bg-gradient-to-r from-red-500 to-teal-400 pb-4 scrollbar scrollbar-track-teal-400 scrollbar-thumb-red-500">
      {/* Project Main Image/GIF */}
      <div className="mx-auto max-w-sm justify-center bg-gradient-to-r from-red-500 to-teal-400 px-2 shadow-xl">
        <img
          src={
            "https://github.com/vikiru/Urvo/raw/docs/urvo-docs/public/utility/help.gif"
          }
          className="h-auto w-full"
        ></img>
      </div>
      <div>
        {/* Project Name*/}
        <div className="flex justify-center">
          <h2 className="text-bold text-center font-heading text-2xl text-white">
            {project.name}
          </h2>
        </div>

        {/* Project Start and End Date*/}
        <div>
          <p className="text-center font-body text-sm font-thin uppercase text-white">
            {project.startDate} - {project.endDate}
          </p>
        </div>

        {/* Project Description*/}
        <div className="mx-auto max-w-sm">
          <h3 className="text-center font-subheading text-sm leading-4 text-white">
            {project.description}
          </h3>
        </div>

        {/* Project URLs*/}
        <div className="flex justify-center py-2">
          {project.githubUrl != "" && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="lg:ease-in-out-anim pr-1 text-3xl text-white"
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
                className="lg:ease-in-out-anim pr-1 text-3xl text-white"
              />
            </a>
          )}
        </div>

        {/* Project Technologies*/}
        <div className="mx-auto max-w-sm">
          <p className="text-center font-body font-thin text-white">
            {project.technologiesUsed.join(", ")}
          </p>
        </div>
      </div>

      <div className="mx-auto bg-white py-6">
        <h2 className="pt-2 text-center text-2xl font-bold uppercase underline">
          Accomplishments
        </h2>
        <ol className="list-inside list-disc pl-1">
          {project.accomplishments.map((accomplishment) => (
            <li key={accomplishment}>{accomplishment}</li>
          ))}
        </ol>
      </div>
    </main>
  );
}

ProjectShowcase.propTypes = {
  project: PropTypes.object,
};

export default ProjectShowcase;
