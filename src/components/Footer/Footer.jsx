import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import navData from "./../../assets/data/nav";

function Footer() {
  return (
    <footer className="mt-auto w-full">
      <div className="bg-secondary md:grid md:grid-cols-3 xxs:flex xxs:flex-col">
        <div className="m-auto">
          <h2 className="font-cinzel tracking-widest text-primary xxs:text-lg md:text-3xl lg:text-4xl xl:text-5xl">
            <span className="text-primary">Visa</span>
            <span className="text-accent">kan</span>
          </h2>
        </div>
        <div>
          <h2 className="text-center font-heading text-xl uppercase text-primary lg:text-2xl">
            Read More
          </h2>
          {navData.map((navItem) => (
            <div key={navItem} className="mx-auto w-20">
              <a href={navItem.navLink}>
                <h2 className="text-center text-lg uppercase text-primary hover:underline lg:text-xl">
                  {navItem.navTitle}
                </h2>
              </a>
            </div>
          ))}
        </div>
        <div className="mx-auto">
          <h2 className="text-center font-heading text-xl uppercase text-primary lg:text-2xl">
            Contact
          </h2>
          <div>
            <h2 className="py-2 text-center font-subheading text-lg text-primary lg:text-xl">
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
                className="lg:ease-in-out-anim px-2 py-4 text-3xl text-accent lg:text-5xl"
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
                className="lg:ease-in-out-anim px-2 py-4 text-3xl text-accent lg:text-5xl"
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
                className="lg:ease-in-out-anim px-2 py-4 text-3xl text-accent lg:text-5xl"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-secondary">
        <div className="mx-auto flex max-w-lg items-center justify-center py-2">
          <span className="text-center font-heading font-thin text-primary lg:text-lg">
            Visakan Kirubakaran &copy; {new Date().getFullYear()}. All rights
            reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
