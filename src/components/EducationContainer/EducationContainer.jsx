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
      className="mx-auto min-h-screen bg-primary pt-2 dark:bg-darkPrimary"
      id="education"
    >
      <div className="px-4">
        <h2 className="pt-2 text-2xl font-bold uppercase underline lg:text-4xl dark:text-darkSecondary">
          Education
        </h2>
      </div>

      {/* University Section - XSS - XL screens*/}
      <section id="unversity-info" className="px-4 pt-4">
        <div>
          <h2 className="font-heading font-semibold uppercase lg:text-3xl dark:text-darkSecondary">
            {educationData.universityName}
          </h2>
        </div>

        <div className="xs:block lg:flex lg:justify-between">
          <div className="py-2">
            <div>
              <h3 className="font-subheading lg:text-2xl dark:text-darkSecondary">
                {educationData.degree} - {educationData.acronym}.,{" "}
                {educationData.degreeProgram}
              </h3>
            </div>
            <div className="pt-1">
              <h3 className="font-body font-thin uppercase lg:text-xl dark:text-darkSecondary">
                {educationData.enrollmentStart} - {educationData.enrollmentEnd}
              </h3>
            </div>
          </div>
          <div className="h-[75px] w-[300px] rounded-lg bg-accent drop-shadow-lg  hover:cursor-pointer  hover:bg-accent/80 dark:bg-darkAccent dark:hover:bg-darkAccent/80">
            <Link
              to="/education/courses"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="m-auto py-2 text-center font-heading font-semibold text-secondary">
                View courses <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </h2>
            </Link>
          </div>
        </div>
      </section>

      {/* Coursera Section - XXS - XL Screens */}
      <section className="m-2 mx-auto" id="coursera-certificate-info">
        <div className="mx-2 px-2">
          <h2 className=" font-heading font-semibold uppercase lg:text-3xl dark:text-darkSecondary">
            Coursera
          </h2>
        </div>
        {courseraCertificates.map((certificate) => (
          <div
            key={certificate.certificationName}
            className="px-4 xxs:block lg:flex lg:justify-between"
            id={certificate.certificationName.toLowerCase()}
          >
            <div>
              <div>
                <h3 className="font-subheading lg:text-2xl dark:text-darkSecondary">
                  {certificate.certificationName}
                </h3>
              </div>
              <div>
                <p className="text-md font-body font-thin uppercase lg:text-xl dark:text-darkSecondary">
                  {certificate.startDate} - {certificate.completionDate}
                </p>
              </div>
            </div>
            <div className="h-[75px] w-[300px] rounded-lg bg-accent drop-shadow-lg  hover:cursor-pointer  hover:bg-accent/80 dark:bg-darkAccent dark:hover:bg-darkAccent/80">
              <a
                href={certificate.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="m-auto py-2 text-center font-heading font-semibold text-secondary">
                  View certificate{"  "}
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </h2>
              </a>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}

export default EducationContainer;
