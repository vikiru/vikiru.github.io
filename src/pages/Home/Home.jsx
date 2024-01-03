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
    <div className="flex h-screen w-screen snap-y flex-col overflow-x-hidden overflow-y-scroll scroll-smooth bg-primary scrollbar scrollbar-track-primary scrollbar-thumb-secondary dark:bg-darkPrimary dark:scrollbar-thumb-darkSecondary">
      <NavBar />
      {/* Main Content - XL and up */}
      <main className="gap-2 p-10 xxs:hidden xl:grid xl:grid-cols-2">
        <section>
          <section id="hero">
            <h2 className="heading-text dark:text-primary">
              {aboutData.greeting}{" "}
              <span className="text-accent dark:text-darkAccent">
                {aboutData.fullName}
              </span>
            </h2>
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

          <section id="cta" className="flex gap-3 py-4">
            <div className="cta-btn">
              <Link
                to="/about"
                target="_blank"
                rel="noopener noreferrer"
                id="about"
              >
                <p className="body-text m-auto py-2 text-center font-body font-semibold text-secondary dark:bg-darkAccent dark:hover:bg-darkAccent/80">
                  Read more
                </p>
              </Link>
            </div>
            <div className="cta-btn">
              <Link
                to="/projects"
                target="_blank"
                rel="noopener noreferrer"
                id="projects"
              >
                <p className="body-text m-auto py-2 text-center font-body font-semibold text-secondary dark:bg-darkAccent dark:hover:bg-darkAccent/80">
                  View my work
                </p>
              </Link>
            </div>
            <div className="cta-btn">
              <Link
                to="mailto:viskirubakaran@outlook.com"
                target="_blank"
                rel="noopener noreferrer"
                id="projects"
              >
                <p className="body-text m-auto py-2 text-center font-body font-semibold text-secondary dark:bg-darkAccent dark:hover:bg-darkAccent/80">
                  Contact me
                </p>
              </Link>
            </div>
          </section>
        </section>

        <section id="profile" className="mx-auto mr-10">
          <div className="m-auto flex justify-center rounded-full  py-2">
            <img
              className="xxs:h-30 w-full rounded-full xxs:w-20 lg:h-full lg:w-[500px] xl:w-[600px]"
              src={aboutData.profilePic}
              alt="GitHub Profile Pic"
            ></img>
          </div>
          <div className="flex justify-center py-1">
            <span className="subheading-text text-secondary dark:text-primary">
              {aboutData.location}
            </span>
          </div>

          <section
            id="social-icons"
            className="flex justify-center space-x-4 pt-2"
          >
            <a
              href="https://github.com/vikiru"
              target="_blank"
              rel="noopener noreferrer"
              id="github-url"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="lg:ease-in-out-anim text-white text-3xl text-accent lg:text-5xl xl:text-6xl dark:text-darkAccent"
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
                className="lg:ease-in-out-anim text-white text-3xl text-accent lg:text-5xl xl:text-6xl dark:text-darkAccent"
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
                className="lg:ease-in-out-anim text-white text-3xl text-accent lg:text-5xl  xl:text-6xl dark:text-darkAccent"
              />
            </a>
          </section>
        </section>
      </main>

      {/* Main Content - XXS and up */}
      <main className="p-10 xl:hidden">
        <section>
          <section id="hero">
            <h2 className="heading-text dark:text-primary">
              {aboutData.greeting}{" "}
              <span className="text-accent dark:text-darkAccent">
                {aboutData.fullName}
              </span>
            </h2>
            <section id="profile" className="flex justify-center pt-2">
              <div className="flex justify-center rounded-full">
                <img
                  className="h-auto w-full rounded-full object-scale-down xxs:w-[180px] md:w-[260px]"
                  src={aboutData.profilePic}
                  alt="GitHub Profile Pic"
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
                id="github-url"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="lg:ease-in-out-anim text-white pr-2 text-accent xxs:text-2xl sm:text-4xl md:text-5xl dark:text-darkAccent"
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
                  className="lg:ease-in-out-anim text-white pr-2 text-accent xxs:text-2xl sm:text-4xl md:text-5xl dark:text-darkAccent"
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
                  className="lg:ease-in-out-anim text-white text-accent xxs:text-2xl sm:text-4xl md:text-5xl dark:text-darkAccent"
                />
              </a>
            </section>

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
          <section
            id="cta"
            className="gap-3 py-4 xxs:space-y-2 lg:flex lg:space-y-0"
          >
            <div className="w-38 rounded-lg border-b-4 border-secondary  bg-accent px-2 drop-shadow-lg hover:cursor-pointer hover:bg-accent/80  xxs:w-full  dark:bg-darkAccent dark:hover:bg-darkAccent/80">
              <Link
                to="/about"
                target="_blank"
                rel="noopener noreferrer"
                id="about"
              >
                <h2 className="body-text m-auto py-2 text-center font-heading font-semibold text-secondary dark:bg-darkAccent dark:hover:bg-darkAccent/80">
                  Read more
                </h2>
              </Link>
            </div>
            <div className="w-38 rounded-lg border-b-4 border-secondary  bg-accent px-2 drop-shadow-lg hover:cursor-pointer hover:bg-accent/80 xxs:w-full  dark:bg-darkAccent dark:hover:bg-darkAccent/80">
              <Link
                to="/projects"
                target="_blank"
                rel="noopener noreferrer"
                id="projects"
              >
                <h2 className="body-text m-auto py-2 text-center font-heading font-semibold text-secondary dark:bg-darkAccent dark:hover:bg-darkAccent/80">
                  View projects
                </h2>
              </Link>
            </div>
            <div className="w-38 rounded-lg border-b-4 border-secondary  bg-accent px-2 drop-shadow-lg hover:cursor-pointer hover:bg-accent/80 xxs:w-full  dark:bg-darkAccent dark:hover:bg-darkAccent/80">
              <a
                href="mailto:viskirubakaran@outlook.com"
                target="_blank"
                rel="noopener noreferrer"
                id="email"
              >
                <h2 className="body-text m-auto py-2 text-center font-heading font-semibold text-secondary dark:bg-darkAccent dark:hover:bg-darkAccent/80">
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
