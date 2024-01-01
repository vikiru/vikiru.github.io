import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import NavBar from "./../../components/NavBar/NavBar";
import React from "react";
import aboutData from "./../../assets/data/about";

function HomePage() {
  return (
    <div className="flex h-screen w-screen snap-y flex-col overflow-x-hidden overflow-y-scroll scroll-smooth bg-primary scrollbar scrollbar-track-primary scrollbar-thumb-secondary dark:bg-darkPrimary">
      <NavBar />
      {/* Main Content - XL and up */}
      <main className="gap-2 p-10 xxs:hidden xl:grid xl:grid-cols-2">
        <section>
          <section id="hero">
            <h2 className="heading-text">
              {aboutData.greeting}{" "}
              <span className="text-accent dark:text-darkAccent">
                {aboutData.fullName}
              </span>
            </h2>
            <p className="body-text pt-2">
              Welcome to my portfolio! I am a dedicated{" "}
              <span className="font-semibold text-accent dark:text-darkAccent">
                {aboutData.title.toLowerCase()}
              </span>{" "}
              with a passion for software and web development. Continual
              learning is my driving force, and I strive to apply my expanding
              knowledge to meaningful projects.
            </p>
            <p className="body-text pt-2">
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
            <div className="w-38 rounded-lg border-b-4 border-secondary bg-accent px-2 drop-shadow-lg  hover:cursor-pointer  hover:bg-accent/80 dark:bg-darkAccent dark:hover:bg-darkAccent/80">
              <Link
                to="/about"
                target="_blank"
                rel="noopener noreferrer"
                id="about"
              >
                <p className="m-auto py-2 text-center font-body font-semibold text-secondary dark:bg-darkAccent dark:hover:bg-darkAccent/80">
                  Read more
                </p>
              </Link>
            </div>
            <div className="w-38 rounded-lg border-b-4 border-secondary bg-accent px-2 drop-shadow-lg  hover:cursor-pointer  hover:bg-accent/80 dark:bg-darkAccent dark:hover:bg-darkAccent/80">
              <Link
                to="/projects"
                target="_blank"
                rel="noopener noreferrer"
                id="projects"
              >
                <p className="m-auto py-2 text-center font-body font-semibold text-secondary dark:bg-darkAccent dark:hover:bg-darkAccent/80">
                  View my work
                </p>
              </Link>
            </div>
            <div className="w-38 rounded-lg border-b-4 border-secondary bg-accent px-2 drop-shadow-lg  hover:cursor-pointer  hover:bg-accent/80 dark:bg-darkAccent dark:hover:bg-darkAccent/80">
              <Link
                to="mailto:viskirubakaran@outlook.com"
                target="_blank"
                rel="noopener noreferrer"
                id="projects"
              >
                <p className="m-auto py-2 text-center font-body font-semibold text-secondary dark:bg-darkAccent dark:hover:bg-darkAccent/80">
                  Contact me
                </p>
              </Link>
            </div>
          </section>
        </section>

        <section id="profile" className="mx-auto mr-10">
          <div className="m-auto flex max-w-sm justify-center rounded-full py-2">
            <img
              className="xxs:h-30 rounded-full xxs:w-20 lg:h-full lg:w-[500px]"
              src={aboutData.profilePic}
            ></img>
          </div>
          <div className="flex justify-center py-1">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="px-2 pt-1 text-xl text-accent dark:text-darkAccent"
            />
            <span className="xxs:text-md subheading-text text-secondary dark:text-darkSecondary">
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
                className="lg:ease-in-out-anim text-white text-3xl text-accent lg:text-5xl dark:text-darkAccent"
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
                className="lg:ease-in-out-anim text-white text-3xl text-accent lg:text-5xl dark:text-darkAccent"
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
                className="lg:ease-in-out-anim text-white text-3xl text-accent lg:text-5xl dark:text-darkAccent"
              />
            </a>
          </section>
        </section>
      </main>

      {/* Main Content - XXS and up */}
      <main className="p-10 xl:hidden">
        <section>
          <section id="hero">
            <h2 className="font-heading text-4xl font-extrabold leading-none tracking-tight">
              {aboutData.greeting}{" "}
              <span className="text-accent dark:text-darkAccent">
                {aboutData.fullName}
              </span>
            </h2>
            <section id="profile" className="flex justify-center">
              <div className="flex justify-center rounded-full">
                <img
                  className="h-auto w-full rounded-full xxs:w-[180px] md:w-[360px]"
                  src={aboutData.profilePic}
                  alt="GitHub Profile Pic"
                ></img>
              </div>
            </section>
            <section id="location" className="flex justify-center py-1">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="px-2 pt-1 text-accent md:text-lg dark:text-darkAccent"
              />
              <span className="xxs:text-md font-heading font-semibold tracking-wide text-secondary xxs:text-xs md:text-lg dark:text-darkSecondary">
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
                  className="lg:ease-in-out-anim text-white text-accent xxs:text-3xl md:text-5xl dark:text-darkAccent"
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
                  className="lg:ease-in-out-anim text-white text-accent xxs:text-3xl md:text-5xl dark:text-darkAccent"
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
                  className="lg:ease-in-out-anim text-white text-accent xxs:text-3xl md:text-5xl dark:text-darkAccent"
                />
              </a>
            </section>

            <p className="pt-2 font-body text-base font-light leading-6">
              Welcome to my portfolio! I am a dedicated{" "}
              <span className="font-semibold text-accent dark:text-darkAccent">
                {aboutData.title.toLowerCase()}
              </span>{" "}
              with a passion for software and web development. Continual
              learning is my driving force, and I strive to apply my expanding
              knowledge to meaningful projects.
            </p>
            <p className="pt-2 text-base leading-6">
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
            <div className="w-38 rounded-lg bg-accent px-2 drop-shadow-lg hover:cursor-pointer  hover:bg-accent/80  xxs:w-full dark:bg-darkAccent dark:hover:bg-darkAccent/80">
              <Link
                to="/about"
                target="_blank"
                rel="noopener noreferrer"
                id="about"
              >
                <h2 className="m-auto py-2 text-center font-heading text-sm font-semibold text-secondary dark:bg-darkAccent dark:hover:bg-darkAccent/80">
                  Read more
                </h2>
              </Link>
            </div>
            <div className="lg:w-38 rounded-lg bg-accent px-2 drop-shadow-lg hover:cursor-pointer hover:bg-accent/80  xxs:w-full dark:bg-darkAccent dark:hover:bg-darkAccent/80">
              <Link
                to="/projects"
                target="_blank"
                rel="noopener noreferrer"
                id="projects"
              >
                <h2 className="m-auto py-2 text-center font-heading text-sm font-semibold text-secondary dark:bg-darkAccent dark:hover:bg-darkAccent/80">
                  View my work
                </h2>
              </Link>
            </div>
            <div className="w-38 rounded-lg bg-accent px-2 drop-shadow-lg hover:cursor-pointer hover:bg-accent/80  xxs:w-full dark:bg-darkAccent dark:hover:bg-darkAccent/80">
              <a
                href="mailto:viskirubakaran@outlook.com"
                target="_blank"
                rel="noopener noreferrer"
                id="email"
              >
                <h2 className="m-auto py-2 text-center font-heading text-sm font-semibold text-secondary dark:bg-darkAccent dark:hover:bg-darkAccent/80">
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
