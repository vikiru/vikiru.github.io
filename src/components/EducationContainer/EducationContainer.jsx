import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React from "react";
import educationData from "../../assets/data/education";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function EducationContainer() {
  const certificates = educationData.certificates;
  const courseraCertificates = certificates.filter(
    (cert) => cert.provider === "Coursera",
  );

  return (
    <section
      className="mx-auto h-screen w-screen bg-primary pb-6 pt-2 dark:bg-darkPrimary"
      id="education"
    >
      <div className="px-4">
        <h2 className="heading-text pt-2 uppercase underline lg:text-4xl dark:text-darkSecondary">
          Education
        </h2>
      </div>

      {/* University Section - XSS - XL screens*/}
      <section id="unversity-info" className="px-4 pt-4">
        <div>
          <h3 className="subheading-text uppercase lg:text-3xl dark:text-darkSecondary">
            {educationData.universityName}
          </h3>
        </div>

        <div className="xs:block lg:flex lg:justify-between">
          <div className="py-2">
            <div>
              <p className="subheading-text lg:text-2xl dark:text-darkSecondary">
                {educationData.degree} - {educationData.acronym}.,{" "}
                {educationData.degreeProgram}
              </p>
            </div>
            <div className="pt-1">
              <h3 className="body-text uppercase tracking-wide lg:text-xl dark:text-darkSecondary">
                {educationData.enrollmentStart} - {educationData.enrollmentEnd}
              </h3>
            </div>
          </div>
          <div className="rounded-lg border-b-4 border-secondary bg-accent drop-shadow-lg hover:cursor-pointer hover:bg-accent/80 xxs:h-auto xxs:w-full  lg:h-[75px]  lg:w-[300px] dark:bg-darkAccent dark:hover:bg-darkAccent/80">
            <Link
              to="/education/courses"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="m-auto py-2 text-center font-body font-semibold text-secondary xxs:text-sm">
                View courses <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </h2>
            </Link>
          </div>
        </div>
      </section>

      {/* Coursera Section - XXS - XL Screens */}
      <section className="m-2 mx-auto" id="coursera-certificate-info">
        <div className="px-4">
          <h2 className="heading-text uppercase lg:text-3xl dark:text-darkSecondary">
            Coursera
          </h2>
        </div>
        {courseraCertificates.map((certificate) => (
          <div
            key={certificate.certificationName}
            className="px-4 pb-2 xxs:block lg:flex lg:justify-between"
            id={certificate.certificationName.toLowerCase()}
          >
            <div>
              <div>
                <p className="subheading-text lg:text-2xl dark:text-darkSecondary">
                  {certificate.certificationName}
                </p>
              </div>
              <div>
                <p className="body-text uppercase tracking-wide lg:text-xl dark:text-darkSecondary">
                  {certificate.startDate} - {certificate.completionDate}
                </p>
              </div>
            </div>
            <div className="rounded-lg border-b-4 border-secondary bg-accent drop-shadow-lg hover:cursor-pointer hover:bg-accent/80  xxs:w-full lg:h-[75px]  lg:w-[300px] dark:bg-darkAccent dark:hover:bg-darkAccent/80">
              <a
                href={certificate.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="m-auto py-2 text-center font-body font-semibold text-secondary xxs:text-sm">
                  View certificate{"  "}
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </p>
              </a>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}

export default EducationContainer;
