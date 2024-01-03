import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import navData from "./../../assets/data/nav";

function Footer() {
  return (
    <footer className="mt-auto w-full">
      <div className="bg-secondary xxs:flex xxs:flex-col md:grid md:grid-cols-2 dark:bg-darkSecondary">
        <section
          id="logo"
          className="md:col-span-2 md:mx-auto md:flex md:justify-center lg:py-2"
        >
          <h2 className="text-center font-cinzel tracking-widest text-primary xxs:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl dark:text-primary">
            <span className="text-primary  dark:text-primary">Visa</span>
            <span className="text-accent dark:text-darkAccent">kan</span>
          </h2>
        </section>

        <div className="sm:grid sm:grid-cols-2 md:col-span-2">
          <section id="footer-navigation">
            <h2 className="heading-text text-center tracking-wide text-primary dark:text-primary">
              Read more about me
            </h2>
            {navData.map((navItem) => (
              <div key={navItem.navTitle} className="mx-auto w-20">
                <Link to={navItem.navLink}>
                  <h2 className="body-text text-center text-primary decoration-accent hover:underline dark:text-primary dark:decoration-darkAccent">
                    {navItem.navTitle}
                  </h2>
                </Link>
              </div>
            ))}
          </section>

          <section id="contact" className="xxs:mx-auto lg:px-4 xl:mx-0">
            <h2 className="heading-text text-center tracking-wide text-primary dark:text-primary">
              Connect with me
            </h2>
            <div>
              <h2 className="subheading-text text-center text-primary lg:py-2 dark:text-primary">
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
                    className="lg:ease-in-out-anim px-2 text-3xl text-accent xxs:py-2 xxs:text-2xl sm:text-4xl lg:py-4 lg:text-5xl xl:text-6xl dark:text-darkAccent"
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
                    className="lg:ease-in-out-anim px-2 text-3xl text-accent xxs:py-2 xxs:text-2xl sm:text-4xl lg:py-4 lg:text-5xl xl:text-6xl dark:text-darkAccent"
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
                    className="lg:ease-in-out-anim px-2 text-accent xxs:py-2 xxs:text-2xl sm:text-4xl lg:py-4 lg:text-5xl xl:text-6xl dark:text-darkAccent"
                  />
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section id="copyright" className="bg-secondary dark:bg-darkSecondary">
        <div className="mx-auto flex items-center justify-center py-2">
          <p className="body-text text-center font-thin text-primary dark:text-primary">
            Visakan Kirubakaran &copy; {new Date().getFullYear()}. All rights
            reserved.
          </p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
