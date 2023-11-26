import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <section id="contact" className="m-2 snap-center rounded-xl">
      <footer>
        <p className="pb-2 text-lg uppercase text-white">Connect with me</p>
        <section id="social-icons">
          <a
            href="https://github.com/vikiru"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="lg:ease-in-out-anim pr-2 text-3xl text-white"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/viskirubakaran/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="lg:ease-in-out-anim pr-2 text-3xl text-white"
            />
          </a>
          <a
            href="mailto:viskirubakaran@outlook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="lg:ease-in-out-anim pr-2 text-3xl text-white"
            />
          </a>
          <div className=" pt-1">
            <p className="text-white">
              <span>
                Visakan Kirubakaran &copy; {currentYear}. All rights reserved.
              </span>
            </p>
          </div>
        </section>
      </footer>
    </section>
  );
}

export default Footer;
