import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import aboutData from "../../assets/data/about";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <section className="mx-auto bg-gradient-to-r from-red-500 to-teal-400 ">
      <div className="lg:grid lg:grid-cols-2">
        <div className="mx-auto max-w-sm">
          <div className="mx-auto my-1 flex max-w-sm justify-center">
            <img
              className="h-40 w-40 rounded-full"
              src={"https://avatars.githubusercontent.com/u/72267229?v=4"}
            ></img>
          </div>
          <div className="mx-auto max-w-sm">
            <h2 className="text-bold hover: text-center font-heading text-3xl font-bold text-white">
              {aboutData.fullName}
            </h2>
            <h3 className="text-center font-subheading text-2xl font-thin text-white">
              {aboutData.title}
            </h3>
          </div>
          <div id="social-icons" className="flex justify-center space-x-4 pt-2">
            <a
              href="https://github.com/vikiru"
              target="_blank"
              rel="noopener noreferrer"
              id="github-url"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="lg:ease-in-out-anim text-3xl text-white"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/viskirubakaran/"
              target="_blank"
              rel="noopener noreferrer"
              id="linkedin-url"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="lg:ease-in-out-anim text-3xl text-white"
              />
            </a>
            <a
              href="mailto:viskirubakaran@outlook.com"
              target="_blank"
              rel="noopener noreferrer"
              id="email"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="lg:ease-in-out-anim text-3xl text-white"
              />
            </a>
          </div>
        </div>
        <div className="mx-auto max-w-sm ">
          <p className="my-2 font-body text-xl font-thin leading-6 text-white xxs:text-center lg:text-justify">
            {aboutData.hero}
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
