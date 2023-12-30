import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../../components/Footer/Footer";
import NavBar from "./../../components/NavBar/NavBar";
import React from "react";
import aboutData from "./../../assets/data/about";

function HomePage() {
  return (
    <div className="flex h-screen w-screen snap-y flex-col overflow-x-hidden overflow-y-scroll scroll-smooth bg-primary scrollbar scrollbar-track-primary scrollbar-thumb-secondary">
      <NavBar />
      <main className="py-4">
        <div className="flex justify-center">
          <h2 className="text-center font-cinzel tracking-widest text-secondary lg:text-6xl">
            {aboutData.fullName}
          </h2>
        </div>
        <div className="mx-auto my-1 flex max-w-sm justify-center rounded-full">
          <img
            className="object-fit xxs:h-30 rounded-full ring-4 xxs:w-20 lg:h-40 lg:w-40"
            src={aboutData.profilePic}
          ></img>
        </div>

        <div className="mx-auto flex max-w-lg justify-center">
          <h3 className="font-subheading font-thin text-secondary lg:text-4xl">
            {aboutData.title}
          </h3>
        </div>

        <div className="flex justify-center py-1">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="px-2 pt-1 text-accent lg:text-2xl"
          />
          <span className="xxs:text-md font-subheading tracking-wide text-secondary lg:text-2xl">
            {aboutData.location}
          </span>
        </div>

        <div id="social-icons" className="flex justify-center space-x-4 pt-2">
          <a
            href="https://github.com/vikiru"
            target="_blank"
            rel="noopener noreferrer"
            id="github-url"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="lg:ease-in-out-anim text-white text-3xl text-accent lg:text-5xl"
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
              className="lg:ease-in-out-anim text-white text-3xl text-accent lg:text-5xl"
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
              className="lg:ease-in-out-anim text-white text-3xl text-accent lg:text-5xl"
            />
          </a>
        </div>
        <div className="mx-auto max-w-xl py-1">
          <p className="text-center font-body text-3xl text-secondary xxs:text-sm">
            I have a passion for software design and web technologies. Committed
            to learning and contributing to meaningful projects!
          </p>
        </div>

        <div className="flex gap-2 xxs:flex-col lg:justify-center lg:py-4">
          <div className="bg-blue-400 rounded-full bg-accent p-2 hover:cursor-pointer hover:ring-4 lg:w-60">
            <a href="/about" target="_blank" rel="noopener noreferrer">
              <h2 className="text-center uppercase text-secondary lg:text-2xl">
                Read More
              </h2>
            </a>
          </div>
          <div className="rounded-full bg-accent p-2 hover:cursor-pointer hover:ring-4 lg:w-60">
            <a href="/projects" target="_blank" rel="noopener noreferrer">
              <h2 className="text-center uppercase tracking-widest text-secondary lg:text-2xl">
                View My Work
              </h2>
            </a>
          </div>
          <div className="rounded-full bg-accent p-2 hover:cursor-pointer hover:ring-4 lg:w-60">
            <a
              href="mailto:viskirubakaran@outlook.com"
              target="_blank"
              rel="noopener noreferrer"
              id="email"
            >
              <h2 className="text-center uppercase tracking-widest text-secondary lg:text-2xl">
                Contact Me
              </h2>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default HomePage;
