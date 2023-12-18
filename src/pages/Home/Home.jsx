import "../../index";

import {
  faArrowUpRightFromSquare,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import aboutData from "../../assets/data/about";
import educationData from "./../../assets/data/education";
import skillsData from "../../assets/data/skills";

function Home() {
  const certificates = educationData.certificates;
  const courseraCertificates = certificates.filter(
    (cert) => cert.provider === "Coursera",
  );

  return (
    <main className="h-screen w-screen snap-y overflow-x-hidden overflow-y-scroll scroll-smooth bg-gradient-to-r from-red-500 to-teal-400 pb-4 scrollbar scrollbar-track-teal-400 scrollbar-thumb-red-500">
      <section className="mx-auto">
        <div className="lg:grid lg:grid-cols-2">
          <div className="max-w-sm">
            <div className="mx-auto my-1 flex max-w-sm justify-center">
              <img
                className="h-40 w-40 rounded-full"
                src={"https://avatars.githubusercontent.com/u/72267229?v=4"}
              ></img>
            </div>
            <div className="mx-auto max-w-sm">
              <h2 className="text-bold hover: text-center font-heading text-3xl font-bold text-white">
                {aboutData.fullName}
              </h2>
              <h3 className="text-center font-subheading text-2xl font-thin text-white">
                {aboutData.title}
              </h3>
            </div>
            <div
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
                  className="lg:ease-in-out-anim text-3xl text-white"
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
                  className="lg:ease-in-out-anim text-3xl text-white"
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
                  className="lg:ease-in-out-anim text-3xl text-white"
                />
              </a>
            </div>
          </div>
          <div className="max-w-sm">
            <p className="my-2 font-body text-xl font-thin leading-6 text-white xxs:text-center lg:text-justify">
              {aboutData.hero}
            </p>
          </div>
        </div>
      </section>

      {/* education section */}
      <section className="mx-auto bg-white py-6">
        <div className="mx-auto">
          <h2 className="pt-2 text-center text-2xl font-bold uppercase underline">
            Education
          </h2>
        </div>
        <div className="mx-2">
          <h2 className="text-left font-heading font-semibold uppercase">
            {educationData.universityName}
          </h2>
        </div>
        <div className="mx-2 flex justify-between">
          <div className="max-w-lg">
            <h3 className="text-left font-subheading font-thin">
              {educationData.degree} - {educationData.acronym}.,{" "}
              {educationData.degreeProgram}
            </h3>
          </div>
          <div className="max-w-xs">
            <h3 className="text-left font-body font-thin uppercase">
              {educationData.enrollmentStart} - {educationData.enrollmentEnd}
            </h3>
          </div>
        </div>
        <div className="mx-2">
          <button className="rounded bg-black px-4 py-2">
            <span className="text-md font-subheading uppercase text-white">
              View Courses
            </span>
            <a
              href="/education/courses"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="lg:ease-in-out-anim pl-1 text-lg text-white"
                icon={faArrowUpRightFromSquare}
              />
            </a>
          </button>
        </div>

        <div className="mx-2">
          <h2 className="pt-2 text-left font-heading font-semibold uppercase">
            Coursera
          </h2>
          {courseraCertificates.map((certificate) => (
            <div key={certificate}>
              <div className="flex justify-between">
                <div className="max-w-lg">
                  <h3 className="font-subheading font-thin">
                    {certificate.certificationName}
                  </h3>
                </div>
                <div className="ml-4 max-w-xs text-right font-body font-thin uppercase">
                  {certificate.startDate} - {certificate.completionDate}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* skills section */}
      <section className="mx-auto bg-white py-6">
        <div className="mx-auto">
          <h2 className="pt-2 text-center text-2xl font-bold uppercase underline">
            Skills
          </h2>
          <div className="mx-auto lg:grid lg:grid-cols-2">
            {Object.keys(skillsData).map((skillCategory) => (
              <div key={skillCategory} className="mx-auto max-w-sm">
                <h2 className="text-center font-heading text-xl font-semibold uppercase">
                  {skillCategory}
                </h2>
                <p className="text-center font-subheading text-lg font-thin leading-6 text-black">
                  {skillsData[`${skillCategory}`].join(", ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* footer section */}
      <footer className="mt-2">
        <div>
          <p className="text-center font-heading font-thin text-white">
            <span>
              Visakan Kirubakaran &copy; {new Date().getFullYear()}. All rights
              reserved.
            </span>
          </p>
        </div>
      </footer>
    </main>
  );
}

export default Home;
