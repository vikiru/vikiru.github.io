import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import educationData from "../../assets/data/education";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function EducationContainer() {
  const certificates = educationData.certificates;
  const courseraCertificates = certificates.filter(
    (cert) => cert.provider === "Coursera",
  );

  return (
    <section className="dark:bg-darkPrimary mx-auto bg-primary py-4">
      <div className="mx-auto">
        <h2 className="dark:text-darkSecondary pt-2 text-center text-2xl font-bold uppercase underline lg:text-4xl">
          Education
        </h2>
      </div>

      {/* University Section - XSS - XL screens*/}
      <section className="m-2 mx-auto max-w-lg" id="unversity-info">
        <div className="mx-2 px-2">
          <h2 className="dark:text-darkSecondary text-center font-heading font-semibold uppercase lg:text-3xl">
            {educationData.universityName}
          </h2>
        </div>
        <div className="max-w-lg px-2">
          <h3 className="dark:text-darkSecondary text-center font-subheading lg:text-2xl">
            {educationData.degree} - {educationData.acronym}.,{" "}
            {educationData.degreeProgram}
          </h3>
        </div>
        <div className="mx-auto max-w-sm pt-1">
          <h3 className="dark:text-darkSecondary pl-2 text-center font-body font-thin uppercase lg:text-xl">
            {educationData.enrollmentStart} - {educationData.enrollmentEnd}
          </h3>
        </div>

        <div className="dark:bg-darkAccent mt-2 flex justify-center bg-accent">
          <button className="rounded px-4 py-2">
            <span className="text-md dark:text-darkSecondary font-subheading uppercase tracking-widest text-secondary">
              View Courses
            </span>
            <a
              href="/education/courses"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="lg:ease-in-out-anim dark:text-darkSecondary pl-1 text-lg text-secondary"
                icon={faArrowUpRightFromSquare}
              />
            </a>
          </button>
        </div>
      </section>

      {/* Coursera Section - XXS - XL Screens */}
      <section className="m-2 mx-auto" id="coursera-certificate-info">
        <div className="mx-2 px-2">
          <h2 className="dark:text-darkSecondary text-center font-heading font-semibold uppercase lg:text-3xl">
            Coursera
          </h2>
        </div>
        <div className="lg:grid lg:grid-cols-2">
          {courseraCertificates.map((certificate) => (
            <div
              key={certificate.certificationName}
              className="mx-auto pb-4 pt-1"
            >
              <div>
                <div className="mx-2 max-w-lg">
                  <div>
                    <h3 className="dark:text-darkSecondary text-center font-subheading lg:text-2xl">
                      {certificate.certificationName}
                    </h3>
                  </div>
                  <div className="mx-auto max-w-xs">
                    <p className="text-md dark:text-darkSecondary pl-2 text-center font-body font-thin uppercase lg:text-xl">
                      {certificate.startDate} - {certificate.completionDate}
                    </p>
                  </div>
                </div>
              </div>
              <div className="dark:bg-darkAccent mx-2 mt-2 flex bg-accent py-1 xxs:justify-center">
                <button className="bg-black rounded px-4 py-2">
                  <span className="text-md text-white dark:text-darkSecondary font-subheading uppercase tracking-widest">
                    View Certificate
                  </span>
                  <a
                    href={certificate.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      className="lg:ease-in-out-anim text-white dark:text-darkSecondary pl-1 text-lg"
                      icon={faArrowUpRightFromSquare}
                    />
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}

export default EducationContainer;
