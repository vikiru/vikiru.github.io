import { Link } from "react-router-dom";
import React from "react";
import educationData from "~assets/data/education";

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
        <h2 className="heading-text pt-2 text-center uppercase underline dark:text-primary">
          Education
        </h2>
      </div>

      <section className="grid grid-cols-1">
        {/* University Section*/}
        <section id="unversity-info" className="px-4 pt-4">
          <div>
            <h3 className="subheading-text text-center uppercase dark:text-primary">
              {educationData.universityName}
            </h3>
          </div>

          <div className="xxs:block">
            <div>
              <div>
                <p className="subheading-text text-center dark:text-primary">
                  {educationData.degree} - {educationData.acronym}.,{" "}
                  {educationData.degreeProgram}
                </p>
              </div>

              <div>
                <h3 className="body-text text-center uppercase  tracking-wide dark:text-primary">
                  {educationData.enrollmentStart} -{" "}
                  {educationData.enrollmentEnd}
                </h3>
              </div>
            </div>

            <div className="2xl:w-[50%]dark:border-primary mx-auto rounded-lg border-b-4 border-secondary bg-accent drop-shadow-lg hover:cursor-pointer hover:bg-accent/80 xxs:h-auto xxs:w-full xl:h-[50%] xl:w-[53%] 2xl:w-[50%] dark:bg-darkAccent dark:hover:bg-darkAccent/80">
              <Link
                to="/education/courses"
                title="View my courses"
                id="Courses Link"
              >
                <h2 className="body-text m-auto py-2 text-center font-body font-semibold uppercase text-secondary dark:text-primary">
                  View courses {"  "}
                </h2>
              </Link>
            </div>
          </div>
        </section>

        {/* Coursera Section */}
        <section
          className="m-2 mx-auto xxs:block"
          id="coursera-certificate-info"
        >
          <div className="px-4">
            <h2 className="subheading-text text-center uppercase dark:text-primary">
              Coursera
            </h2>
          </div>
          {courseraCertificates.map((certificate) => (
            <div
              key={certificate.certificationName}
              className="px-4 pb-2 xxs:block"
              id={certificate.certificationName.toLowerCase()}
            >
              <div>
                <div>
                  <h3 className="subheading-text text-center dark:text-primary">
                    {certificate.certificationName}
                  </h3>
                </div>
                <div>
                  <h4 className="body-text text-center uppercase tracking-wide dark:text-primary">
                    {certificate.startDate} - {certificate.completionDate}
                  </h4>
                </div>
              </div>
              <div className="mx-auto rounded-lg border-b-4 border-secondary bg-accent drop-shadow-lg hover:cursor-pointer hover:bg-accent/80 xxs:w-full xl:h-[50%] 5xl:w-[40rem] dark:border-primary dark:bg-darkAccent dark:hover:bg-darkAccent/80">
                <a
                  href={certificate.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View my certificate"
                  id={certificate.certificationName.toLowerCase() + "Link"}
                >
                  <h2 className="body-text m-auto py-2 text-center font-body font-semibold uppercase text-secondary dark:text-primary">
                    View certificate{"  "}
                  </h2>
                </a>
              </div>
            </div>
          ))}
        </section>
      </section>
    </section>
  );
}

export default EducationContainer;
