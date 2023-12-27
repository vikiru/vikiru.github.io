import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../../components/Footer/Footer";
import NavBar from "./../../components/NavBar/NavBar";
import React from "react";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function HomePage() {
  return (
    <div className="bg-primary scrollbar-track-primary scrollbar-thumb-secondary h-screen w-screen snap-y overflow-x-hidden overflow-y-scroll scroll-smooth scrollbar">
      <NavBar />
      <main>
        <div className="flex justify-center">
          <h2 className="text-secondary text-center font-cinzel tracking-widest lg:text-8xl">
            Visakan Kirubakaran
          </h2>
        </div>

        <div className="mx-auto flex max-w-lg justify-center">
          <h3 className="text-secondary font-subheading text-5xl font-thin">
            Software Developer
          </h3>
        </div>

        <div className="flex justify-center py-1">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="px-2 pt-1 text-2xl"
          />
          <span className="text-secondary font-subheading text-2xl">
            Ottawa, ON
          </span>
        </div>

        <div className="mx-auto max-w-xl py-1">
          <p className="text-secondary text-center font-body text-4xl">
            I have a passion for software design and web technologies. Committed
            to learning and contributing to meaningful projects!
          </p>
        </div>

        <div className="flex justify-center gap-2 py-4">
          <div className="bg-accent w-60 rounded-full bg-blue-400 p-2 hover:cursor-pointer hover:ring-4">
            <a href="/about" target="_blank" rel="noopener noreferrer">
              <h2 className="text-secondary text-center text-2xl uppercase">
                Read More
              </h2>
            </a>
          </div>
          <div className="bg-accent w-60 rounded-full p-2 hover:cursor-pointer hover:ring-4">
            <a href="/projects" target="_blank" rel="noopener noreferrer">
              <h2 className="text-secondary text-center text-2xl uppercase tracking-widest">
                View My Work
              </h2>
            </a>
          </div>
          <div className="bg-accent w-60 rounded-full p-2 hover:cursor-pointer hover:ring-4">
            <a
              href="mailto:viskirubakaran@outlook.com"
              target="_blank"
              rel="noopener noreferrer"
              id="email"
            >
              <h2 className="text-secondary text-center text-2xl uppercase tracking-widest">
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
