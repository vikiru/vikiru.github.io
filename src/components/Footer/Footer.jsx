import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="mt-2 w-full">
      <div className="bg-black">
        <div className="pt-2">
          <h2 className="text-center font-heading uppercase text-white">
            Connect with me
          </h2>
        </div>

        <section id="social-icons" className="flex justify-center gap-2">
          <a
            href="https://github.com/vikiru"
            target="_blank"
            rel="noopener noreferrer"
            id="github-url"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="social-icon lg:ease-in-out-anim text-white"
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
              className="social-icon lg:ease-in-out-anim text-white"
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
              className="social-icon lg:ease-in-out-anim text-white"
            />
          </a>
        </section>
        <div className="mx-auto flex max-w-sm items-center">
          <span className="text-center font-heading font-thin text-white">
            Visakan Kirubakaran &copy; {new Date().getFullYear()}. All rights
            reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
