import {
  faArrowUpRightFromSquare,
  faLink,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import educationData from "../../assets/data/education";

function EducationContainer() {
  const certificates = educationData.certificates;
  const courseraCertificates = certificates.filter(
    (cert) => cert.provider === "Coursera",
  );

  return (
    <section className="mx-auto bg-white py-4">
      <div className="mx-auto">
        <h2 className="pt-2 text-center text-2xl font-bold uppercase underline">
          Education
        </h2>
      </div>

      {/* University Section - XSS - XL screens*/}
      <section className="m-2 mx-auto max-w-lg xl:hidden" id="unversity-info">
        <div className="mx-2 px-2">
          <h2 className="text-center font-heading font-semibold uppercase">
            {educationData.universityName}
          </h2>
        </div>
        <div className="mx-auto max-w-sm">
          <h3 className="pl-2 text-center font-body font-thin uppercase">
            {educationData.enrollmentStart} - {educationData.enrollmentEnd}
          </h3>
        </div>
        <div className="max-w-lg px-2">
          <h3 className="text-center font-subheading font-thin">
            {educationData.degree} - {educationData.acronym}.,{" "}
            {educationData.degreeProgram}
          </h3>
        </div>

        <div className="flex justify-center">
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
      </section>

      {/* University Section - XL and up screens*/}
      <section
        className="m-2 bg-white py-2 xxs:hidden xl:block"
        id="unversity-info"
      >
        <div className="mx-2 px-2">
          <h2 className="text-left font-heading font-semibold uppercase">
            {educationData.universityName}
          </h2>
        </div>
        <div className="mx-2 flex justify-between">
          <div className="max-w-lg px-2">
            <h3 className="text-left font-subheading font-thin">
              {educationData.degree} - {educationData.acronym}.,{" "}
              {educationData.degreeProgram}
            </h3>
          </div>
          <div className="max-w-xs">
            <h3 className="pl-2 text-left font-body font-thin uppercase">
              {educationData.enrollmentStart} - {educationData.enrollmentEnd}
            </h3>
          </div>
        </div>
        <div className="m-2 flex justify-start pl-2">
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
      </section>

      {/* Coursera Section - XXS - XL Screens */}
      <section
        className="m-2 mx-auto max-w-lg xl:hidden"
        id="coursera-certificate-info"
      >
        <div className="mx-2 px-2">
          <h2 className="text-center font-heading font-semibold uppercase">
            Coursera
          </h2>
        </div>
        {courseraCertificates.map((certificate) => (
          <div key={certificate.certificationName}>
            <div>
              <div className="mx-2 max-w-lg">
                <div>
                  <h3 className="text-center font-subheading font-thin">
                    {certificate.certificationName}
                  </h3>
                </div>
                <div className="mx-auto max-w-xs">
                  <p className="text-md pl-2 text-center font-body font-thin uppercase">
                    {certificate.startDate} - {certificate.completionDate}
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-2 flex py-1 xxs:justify-center">
              <button className="rounded bg-black px-4 py-2">
                <span className="text-md font-subheading uppercase text-white">
                  View Certificate
                </span>
                <a
                  href={certificate.certificateLink}
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
          </div>
        ))}
      </section>

      {/* Coursera Section - L and Up Screens */}
      <div
        className="m-2 px-2 xxs:hidden xl:block"
        id="coursera-certificate-info"
      >
        <h2 className="mx-2 pt-2 text-left font-heading font-semibold uppercase">
          Coursera
        </h2>
        {courseraCertificates.map((certificate) => (
          <div key={certificate.certificationName}>
            <div className="flex justify-between">
              <div className="mx-2 max-w-lg">
                <h3 className="font-subheading font-thin">
                  {certificate.certificationName}
                  <span>
                    {" "}
                    <a
                      href={certificate.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faLink}
                        className="lg:ease-in-out-anim text-lg"
                      />
                    </a>
                  </span>
                </h3>
              </div>
              <div className="max-w-xs">
                <h3 className="pl-2 text-left font-body font-thin uppercase">
                  {certificate.startDate} - {certificate.completionDate}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EducationContainer;
