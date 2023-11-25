import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Footer() {
  return (
    <footer id="contact">
      <p className="pb-2 text-lg uppercase text-white">Connect with me</p>
      <div>
        <a href="https://github.com/vikiru">
          <FontAwesomeIcon
            icon={faGithub}
            className="ease-in-out-anim pr-2 text-3xl text-white"
          />
        </a>
        <a href="https://www.linkedin.com/in/viskirubakaran/">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="ease-in-out-anim pr-2 text-3xl text-white"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
