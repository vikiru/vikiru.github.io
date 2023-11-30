import "./Footer.css";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <section
      id="contact"
      className="section-container flex snap-center justify-center"
    >
      <footer>
        <p className="footer-connect">Connect with me</p>
        <section id="social-icons" className="flex justify-center">
          <a
            href="https://github.com/vikiru"
            target="_blank"
            rel="noopener noreferrer"
            id="github-url"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="social-icon lg:ease-in-out-anim"
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
              className="social-icon lg:ease-in-out-anim"
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
              className="social-icon lg:ease-in-out-anim"
            />
          </a>
        </section>
        <div className="pt-1">
          <p className="text-center font-heading text-gray-400">
            <span>
              Visakan Kirubakaran &copy; {currentYear}. All rights reserved.
            </span>
          </p>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
