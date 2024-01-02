import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import navData from "./../../assets/data/nav";

function Footer() {
  return (
    <footer className="mt-auto w-full">
      <div className="bg-secondary xxs:flex xxs:flex-col md:grid md:grid-cols-2 xl:grid-cols-3 dark:bg-darkPrimary">
        <section
          id="logo"
          className="py-2 md:col-span-2 md:mx-auto md:flex md:justify-center xl:m-auto"
        >
          <h2 className="text-center font-cinzel tracking-widest text-primary xxs:text-2xl md:text-3xl lg:text-4xl xl:text-5xl dark:text-darkSecondary">
            <span className="text-primary  dark:text-darkSecondary">Visa</span>
            <span className="text-accent dark:text-darkAccent">kan</span>
          </h2>
        </section>

        <div className="col-span-2 sm:grid sm:grid-cols-2">
          <section id="footer-navigation">
            <h2 className="heading-text text-center uppercase tracking-wide text-primary lg:text-2xl dark:text-darkSecondary">
              Read more
            </h2>
            {navData.map((navItem) => (
              <div key={navItem.navTitle} className="mx-auto w-20">
                <Link to={navItem.navLink}>
                  <h2 className="subheading-text text-center uppercase tracking-wide text-primary decoration-accent hover:underline lg:text-xl dark:text-darkSecondary dark:decoration-darkAccent">
                    {navItem.navTitle}
                  </h2>
                </Link>
              </div>
            ))}
          </section>
          <section id="contact" className="mx-auto lg:px-4">
            <h2 className="heading-text text-center uppercase tracking-wide text-primary dark:text-darkSecondary">
              Connect with me
            </h2>
            <div>
              <h2 className="subheading-text py-2 text-center text-primary dark:text-darkSecondary">
                Ottawa, ON
              </h2>
              <div className="flex justify-center">
                <a
                  href="https://github.com/vikiru"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="github-url"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="lg:ease-in-out-anim px-2 py-4 text-accent xxs:text-2xl sm:text-4xl md:text-5xl dark:text-darkAccent"
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
                    className="lg:ease-in-out-anim px-2 py-4 text-accent xxs:text-2xl sm:text-4xl md:text-5xl dark:text-darkAccent"
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
                    className="lg:ease-in-out-anim px-2 py-4 text-accent xxs:text-2xl sm:text-4xl md:text-5xl dark:text-darkAccent"
                  />
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section id="copyright" className="bg-secondary dark:bg-darkPrimary">
        <div className="mx-auto flex max-w-lg items-center justify-center py-2">
          <span className="body-text text-center font-thin text-primary lg:text-lg dark:text-darkSecondary">
            Visakan Kirubakaran &copy; {new Date().getFullYear()}. All rights
            reserved.
          </span>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
