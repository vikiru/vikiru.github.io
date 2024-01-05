import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import NavBar from "./../../components/NavBar/NavBar";
import React from "react";
import aboutData from "./../../assets/data/about";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function HomePage() {
  return (
    <div className="flex h-screen w-screen snap-y flex-col overflow-x-hidden overflow-y-scroll scroll-smooth bg-primary scrollbar-thin scrollbar-track-primary scrollbar-thumb-accent lg:scrollbar dark:bg-darkPrimary dark:scrollbar-track-darkPrimary dark:scrollbar-thumb-darkAccent">
      <NavBar />
      {/* Main Content - 2XL and up */}
      <main className="gap-2 p-10 xxs:hidden 2xl:grid 2xl:grid-cols-2">
        <section>
          {/* Hero Section*/}
          <section id="hero">
            <h2 className="heading-text dark:text-primary">
              {aboutData.greeting}{" "}
              <span className="text-accent dark:text-darkAccent">
                {aboutData.fullName}
              </span>
            </h2>

            {/* Hero Body Text */}
            <p className="body-text pt-2 dark:text-primary">
              Welcome to my portfolio! I am a dedicated{" "}
              <span className="font-semibold text-accent dark:text-darkAccent">
                {aboutData.title.toLowerCase()}
              </span>{" "}
              with a passion for software and web development. Continual
              learning is my driving force, and I strive to apply my expanding
              knowledge to meaningful projects.
            </p>

            <p className="body-text pt-2 dark:text-primary">
              Feel free to{" "}
              <span className="font-semibold text-accent dark:text-darkAccent">
                read more
              </span>{" "}
              about me,{" "}
              <span className="font-semibold text-accent dark:text-darkAccent">
                view
              </span>{" "}
              some of my GitHub projects, or{" "}
              <span className="font-semibold text-accent dark:text-darkAccent">
                contact me!
              </span>
            </p>
          </section>

          {/* Call to Action */}
          <section id="cta" className="flex gap-3 py-4">
            <div className="cta-btn">
              <Link
                to="/about"
                target="_blank"
                rel="noopener noreferrer"
                id="about"
                title="Read more about me"
              >
                <h2 className="body-text m-auto py-2 text-center font-body font-semibold text-secondary">
                  Read more
                </h2>
              </Link>
            </div>

            <div className="cta-btn">
              <Link
                to="/projects"
                target="_blank"
                rel="noopener noreferrer"
                id="projects"
                title="View my GitHub projects"
              >
                <h2 className="body-text m-auto py-2 text-center font-body font-semibold text-secondary">
                  View my work
                </h2>
              </Link>
            </div>

            <div className="cta-btn">
              <Link
                to="mailto:viskirubakaran@outlook.com"
                target="_blank"
                rel="noopener noreferrer"
                id="email"
                title="Send me an email"
              >
                <h2 className="body-text m-auto py-2 text-center font-body font-semibold text-secondary">
                  Contact me
                </h2>
              </Link>
            </div>
          </section>
        </section>

        {/* Profile Section - Profile Picture, Social Icons, and Location */}
        <section id="profile" className="mx-auto mr-10">
          <div className="m-auto flex justify-center rounded-full  py-2">
            <img
              className="xxs:h-30 w-full rounded-full xxs:w-20 lg:h-full lg:w-[500px] xl:h-[450px] xl:w-[450px]"
              src={aboutData.profilePic}
              alt="GitHub Profile Pic"
              title="GitHub Profile Pic"
            ></img>
          </div>
          <div className="flex justify-center py-1">
            <span className="subheading-text text-secondary dark:text-primary">
              {aboutData.location}
            </span>
          </div>

          {/* Social Icons */}
          <section
            id="social-icons"
            className="flex justify-center space-x-2 pt-2"
          >
            <a
              href="https://github.com/vikiru"
              target="_blank"
              rel="noopener noreferrer"
              id="GitHub Profile Link"
              title="View my GitHub"
            >
              <FontAwesomeIcon icon={faGithub} className="social-icons" />
            </a>

            <a
              href="https://www.linkedin.com/in/viskirubakaran/"
              target="_blank"
              rel="noopener noreferrer"
              id="LinkedIn Link"
              title="View my LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} className="social-icons" />
            </a>

            <a
              href="mailto:viskirubakaran@outlook.com"
              target="_blank"
              rel="noopener noreferrer"
              id="Email Link"
              title="Send me an email"
            >
              <FontAwesomeIcon icon={faEnvelope} className="social-icons" />
            </a>
          </section>
        </section>
      </main>

      {/* Main Content - XXS - 2XL */}
      <main className="p-10 2xl:hidden">
        <section>
          {/* Hero Section */}
          <section id="hero">
            <h2 className="heading-text dark:text-primary">
              {aboutData.greeting}{" "}
              <span className="text-accent dark:text-darkAccent">
                {aboutData.fullName}
              </span>
            </h2>

            {/* Profile Section - Profile Pic, Social Icons, and Location */}
            <section id="profile" className="flex justify-center pt-2">
              <div className="flex justify-center rounded-full">
                <img
                  className="h-auto w-full rounded-full object-scale-down xxs:w-[180px] md:w-[260px] xl:w-[350px]"
                  src={aboutData.profilePic}
                  alt="GitHub Profile Pic"
                  title="GitHub Profile Pic"
                ></img>
              </div>
            </section>

            <section id="location" className="flex justify-center py-1">
              <span className="subheading-text text-secondary dark:text-primary">
                {aboutData.location}
              </span>
            </section>

            <section
              id="social-icons"
              className="flex justify-center space-x-2"
            >
              <a
                href="https://github.com/vikiru"
                target="_blank"
                rel="noopener noreferrer"
                id="GitHub Profile Link"
                title="View my GitHub"
              >
                <FontAwesomeIcon icon={faGithub} className="social-icons" />
              </a>

              <a
                href="https://www.linkedin.com/in/viskirubakaran/"
                target="_blank"
                rel="noopener noreferrer"
                id="LinkedIn Link"
                title="View my LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} className="social-icons" />
              </a>

              <a
                href="mailto:viskirubakaran@outlook.com"
                target="_blank"
                rel="noopener noreferrer"
                id="Email Link"
                title="Send me an email"
              >
                <FontAwesomeIcon icon={faEnvelope} className="social-icons" />
              </a>
            </section>

            {/* Hero Body Text */}
            <p className="body-text pt-2 dark:text-primary">
              Welcome to my portfolio! I am a dedicated{" "}
              <span className="font-semibold text-accent dark:text-darkAccent">
                {aboutData.title.toLowerCase()}
              </span>{" "}
              with a passion for software and web development. Continual
              learning is my driving force, and I strive to apply my expanding
              knowledge to meaningful projects.
            </p>
            <p className="body-text pt-2 dark:text-primary">
              Feel free to{" "}
              <span className="font-semibold text-accent dark:text-darkAccent">
                read more
              </span>{" "}
              about me,{" "}
              <span className="font-semibold text-accent dark:text-darkAccent">
                view
              </span>{" "}
              some of my GitHub projects, or{" "}
              <span className="font-semibold text-accent dark:text-darkAccent">
                contact me!
              </span>
            </p>
          </section>

          {/* Call to Action */}
          <section
            id="cta"
            className="gap-3 py-4 xxs:space-y-2 lg:flex lg:space-y-0"
          >
            <div className="cta-btn">
              <Link
                to="/about"
                target="_blank"
                rel="noopener noreferrer"
                id="about"
              >
                <h2 className="body-text m-auto py-2 text-center font-heading font-semibold text-secondary">
                  Read more
                </h2>
              </Link>
            </div>

            <div className="cta-btn">
              <Link
                to="/projects"
                target="_blank"
                rel="noopener noreferrer"
                id="projects"
              >
                <h2 className="body-text m-auto py-2 text-center font-heading font-semibold text-secondary ">
                  View my work
                </h2>
              </Link>
            </div>

            <div className="cta-btn">
              <a
                href="mailto:viskirubakaran@outlook.com"
                target="_blank"
                rel="noopener noreferrer"
                id="email"
              >
                <h2 className="body-text m-auto py-2 text-center font-heading font-semibold text-secondary">
                  Contact me
                </h2>
              </a>
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
}
export default HomePage;
