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
      className="mx-auto w-screen bg-primary pb-6 pt-2 dark:bg-darkPrimary"
      id="education"
    >
      <div className="px-4">
        <h2 className="heading-text pt-2 uppercase underline dark:text-primary">
          Education
        </h2>
      </div>

      {/* University Section - XSS - XL screens*/}
      <section id="unversity-info" className="px-4 pt-4">
        <div>
          <h3 className="subheading-text uppercase dark:text-primary">
            {educationData.universityName}
          </h3>
        </div>

        <div className="xs:block xl:flex xl:justify-between">
          <div className="py-2">
            <div>
              <p className="subheading-text dark:text-primary">
                {educationData.degree} - {educationData.acronym}.,{" "}
                {educationData.degreeProgram}
              </p>
            </div>

            <div className="pt-1">
              <h3 className="body-text uppercase tracking-wide  dark:text-primary">
                {educationData.enrollmentStart} - {educationData.enrollmentEnd}
              </h3>
            </div>
          </div>

          <div className="rounded-lg border-b-4 border-secondary bg-accent drop-shadow-lg hover:cursor-pointer hover:bg-accent/80 xxs:h-auto xxs:w-full xl:mr-5 xl:h-[50%] xl:w-[30%] dark:border-primary dark:bg-darkAccent dark:hover:bg-darkAccent/80">
            <Link
              to="/education/courses"
              title="View my courses"
              id="Courses Link"
            >
              <h2 className="m-auto py-2 text-center font-body font-semibold text-secondary xxs:text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl dark:text-primary">
                View courses {"  "}
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </h2>
            </Link>
          </div>
        </div>
      </section>

      {/* Coursera Section - XXS - XL Screens */}
      <section className="m-2 mx-auto" id="coursera-certificate-info">
        <div className="px-4">
          <h2 className="subheading-text uppercase dark:text-primary">
            Coursera
          </h2>
        </div>
        {courseraCertificates.map((certificate) => (
          <div
            key={certificate.certificationName}
            className="px-4 pb-2 xxs:block xl:flex xl:justify-between"
            id={certificate.certificationName.toLowerCase()}
          >
            <div>
              <div>
                <p className="subheading-text dark:text-primary">
                  {certificate.certificationName}
                </p>
              </div>
              <div>
                <p className="body-text uppercase tracking-wide dark:text-primary">
                  {certificate.startDate} - {certificate.completionDate}
                </p>
              </div>
            </div>
            <div className="rounded-lg border-b-4 border-secondary bg-accent drop-shadow-lg hover:cursor-pointer hover:bg-accent/80  xxs:w-full xl:mr-5 xl:h-[50%] xl:w-[30%] dark:border-primary dark:bg-darkAccent dark:hover:bg-darkAccent/80">
              <a
                href={certificate.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                title="View my certificate"
                id={certificate.certificationName.toLowerCase() + "Link"}
              >
                <p className="m-auto py-2 text-center font-body font-semibold text-secondary xxs:text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl dark:text-primary">
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
