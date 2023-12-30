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
    <section className="mx-auto bg-primary py-4 dark:bg-darkPrimary">
      <div className="mx-auto">
        <h2 className="pt-2 text-center text-2xl font-bold uppercase underline lg:text-4xl dark:text-darkSecondary">
          Education
        </h2>
      </div>

      {/* University Section - XSS - XL screens*/}
      <section className="m-2 mx-auto max-w-lg" id="unversity-info">
        <div className="mx-2 px-2">
          <h2 className="text-center font-heading font-semibold uppercase lg:text-3xl dark:text-darkSecondary">
            {educationData.universityName}
          </h2>
        </div>
        <div className="max-w-lg px-2">
          <h3 className="text-center font-subheading lg:text-2xl dark:text-darkSecondary">
            {educationData.degree} - {educationData.acronym}.,{" "}
            {educationData.degreeProgram}
          </h3>
        </div>
        <div className="mx-auto max-w-sm pt-1">
          <h3 className="pl-2 text-center font-body font-thin uppercase lg:text-xl dark:text-darkSecondary">
            {educationData.enrollmentStart} - {educationData.enrollmentEnd}
          </h3>
        </div>

        <div className="mt-2 flex justify-center bg-accent dark:bg-darkAccent">
          <button className="rounded px-4 py-2">
            <span className="text-md font-subheading uppercase tracking-widest text-secondary dark:text-darkSecondary">
              View Courses
            </span>
            <a
              href="/education/courses"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="lg:ease-in-out-anim pl-1 text-lg text-secondary dark:text-darkSecondary dark:text-darkSecondary"
                icon={faArrowUpRightFromSquare}
              />
            </a>
          </button>
        </div>
      </section>

      {/* Coursera Section - XXS - XL Screens */}
      <section className="m-2 mx-auto" id="coursera-certificate-info">
        <div className="mx-2 px-2">
          <h2 className="text-center font-heading font-semibold uppercase lg:text-3xl dark:text-darkSecondary">
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
                    <h3 className="text-center font-subheading lg:text-2xl dark:text-darkSecondary">
                      {certificate.certificationName}
                    </h3>
                  </div>
                  <div className="mx-auto max-w-xs">
                    <p className="text-md pl-2 text-center font-body font-thin uppercase lg:text-xl dark:text-darkSecondary">
                      {certificate.startDate} - {certificate.completionDate}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mx-2 mt-2 flex bg-accent py-1 xxs:justify-center dark:bg-darkAccent">
                <button className="bg-black rounded px-4 py-2">
                  <span className="text-md text-white font-subheading uppercase tracking-widest dark:text-darkSecondary">
                    View Certificate
                  </span>
                  <a
                    href={certificate.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      className="lg:ease-in-out-anim text-white pl-1 text-lg dark:text-darkSecondary"
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
