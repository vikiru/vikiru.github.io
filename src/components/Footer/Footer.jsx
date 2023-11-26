import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="m-2 rounded-xl">
      <footer id="contact">
        <p className="pb-2 text-lg uppercase text-white">Connect with me</p>
        <div>
          <a href="https://github.com/vikiru">
            <FontAwesomeIcon
              icon={faGithub}
              className="lg:ease-in-out-anim pr-2 text-3xl text-white"
            />
          </a>
          <a href="https://www.linkedin.com/in/viskirubakaran/">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="lg:ease-in-out-anim pr-2 text-3xl text-white"
            />
          </a>
          <a href="mailto:viskirubakaran@outlook.com">
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
        </div>
      </footer>
    </div>
  );
}

export default Footer;
