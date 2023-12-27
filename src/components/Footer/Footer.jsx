import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import navData from "./../../assets/data/nav";

function Footer() {
  return (
    <footer className="mt-2 w-full">
      <div className="bg-secondary grid grid-cols-3">
        <div className="m-auto max-w-sm pr-4">
          <h2 className="text-primary font-cinzel tracking-widest xxs:text-lg md:text-5xl">
            Visakan
          </h2>
        </div>
        <div>
          <h2 className="text-primary text-center font-heading text-xl uppercase lg:text-2xl">
            Read More
          </h2>
          {navData.map((navItem) => (
            <div key={navItem} className="mx-auto w-20">
              <a href={navItem.navLink}>
                <h2 className="text-primary text-center text-lg hover:underline lg:text-xl">
                  {navItem.navTitle}
                </h2>
              </a>
            </div>
          ))}
        </div>
        <div className="mx-auto">
          <h2 className="text-primary text-center font-heading text-xl uppercase lg:text-2xl">
            Contact
          </h2>
          <div>
            <h2 className="text-primary py-2 text-center font-subheading text-lg lg:text-xl">
              Ottawa, ON
            </h2>
            <a
              href="https://github.com/vikiru"
              target="_blank"
              rel="noopener noreferrer"
              id="github-url"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="lg:ease-in-out-anim text-accent px-2 py-4 text-3xl lg:text-5xl"
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
                className="lg:ease-in-out-anim text-accent px-2 py-4 text-3xl lg:text-5xl"
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
                className="lg:ease-in-out-anim text-accent px-2 py-4 text-3xl lg:text-5xl"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-secondary">
        <div className="mx-auto flex max-w-lg items-center justify-center py-2">
          <span className="text-primary text-center font-heading font-thin lg:text-lg">
            Visakan Kirubakaran &copy; {new Date().getFullYear()}. All rights
            reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
