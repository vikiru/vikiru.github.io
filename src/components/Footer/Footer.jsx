import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import navData from "./../../assets/data/nav";

function Footer() {
  return (
    <footer className="mt-auto w-full">
      <div className="bg-secondary px-1 xxs:flex xxs:flex-col md:grid md:grid-cols-2 dark:bg-darkSecondary">
        {/*  Logo */}
        <section id="logo" className="mx-auto py-2 md:col-span-2 lg:pt-4">
          <Link
            to="/"
            title="View my homepage"
            className="text-center font-cinzel tracking-widest text-primary xxs:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl dark:text-primary"
          >
            <span className="text-primary  dark:text-primary">Visa</span>
            <span className="text-accent dark:text-darkAccent">kan</span>
          </Link>
        </section>

        {/* Footer Navigation */}
        <div className="sm:grid sm:grid-cols-2 md:col-span-2">
          <section id="footer-navigation" className="mx-auto">
            <h2 className="heading-text text-center uppercase tracking-wide text-primary dark:text-primary">
              Read more
            </h2>
            {navData.map((navItem) => (
              <div
                key={navItem.navTitle}
                className="mx-auto flex justify-center p-2"
              >
                <Link
                  to={navItem.navLink}
                  className="
                    subheading-text
                    text-center
                    uppercase
                    text-primary
                    decoration-accent
                    hover:underline
                    dark:text-primary
                    dark:decoration-darkAccent"
                  title={navItem.navDesc}
                  id={navItem.navDesc}
                >
                  {navItem.navTitle}
                </Link>
              </div>
            ))}
          </section>

          {/* Footer Contact Section */}
          <section id="contact" className="xxs:mx-auto lg:px-4 xl:mx-0">
            <h2 className="heading-text text-center uppercase tracking-wide text-primary dark:text-primary">
              Connect with me
            </h2>

            <div>
              <h2 className="subheading-text pt-2 text-center text-primary lg:py-2 dark:text-primary">
                Ottawa, ON
              </h2>

              <div
                className="flex justify-center space-x-2 pt-1 xl:space-x-4"
                id="social-icons"
              >
                <a
                  href="https://github.com/vikiru"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="GitHub Profile Link - Footer"
                  title="View my GitHub"
                >
                  <FontAwesomeIcon icon={faGithub} className="social-icons" />
                </a>

                <a
                  href="https://www.linkedin.com/in/viskirubakaran/"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="LinkedIn Link - Footer"
                  title="View my LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="social-icons" />
                </a>

                <Link
                  to="/contact"
                  target="_top"
                  rel="noopener noreferrer"
                  id="Email Link - Footer"
                  title="Send me an email"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="social-icons" />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Copyright Section */}
      <section id="copyright" className="bg-secondary dark:bg-darkSecondary">
        <div className="mx-auto flex flex-col space-y-2 py-2">
          <p className="body-text text-center font-thin text-primary dark:text-primary">
            &copy; {new Date().getFullYear()} Visakan Kirubakaran. All rights
            reserved.
          </p>
        </div>
        <div>
          <Link
            to="/sitemap"
            target="_blank"
            rel="noopener noreferrer"
            id="Sitemap"
            title="View the sitemap for this website"
          >
            <p className="body-text text-center text-primary decoration-accent hover:underline dark:text-primary dark:decoration-darkAccent">
              Sitemap
            </p>
          </Link>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
