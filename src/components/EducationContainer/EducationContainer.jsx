import "./EducationContainer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import educationData from "../../assets/data/education";
import { faLink } from "@fortawesome/free-solid-svg-icons";

function EducationContainer() {
  const certificates = educationData.certificates;
  const courseraCertificates = certificates.filter(
    (cert) => cert.provider === "Coursera",
  );

  return (
    <section className="snap-center" id="education">
      <p className="section-text">Education</p>
      <section className="section-container p-2">
        <section
          id="university-enrollment-info"
          className="flex justify-between"
        >
          <section>
            <p className="university-name">{educationData.universityName}</p>
          </section>
          <section>
            <p className="date">
              {educationData.enrollmentStart} - {educationData.enrollmentEnd}
            </p>
          </section>
        </section>
        <section id="university-degree" className="flex pb-1">
          <p className="university-degree">
            {educationData.degree} - {educationData.acronym}.,{" "}
            {educationData.degreeProgram}
          </p>
        </section>
        <section id="certificates">
          <section id="coursera-certificates">
            <p className="certificate-provider">Coursera</p>
            {courseraCertificates.map((certificate) => (
              <section
                key={certificate}
                id={certificate.certificationName.toLowerCase()}
                className="flex justify-between"
              >
                <section>
                  <p className="certificate-name">
                    {certificate.certificationName}{" "}
                    <span id="certificate-link">
                      <a
                        href={certificate.certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faLink}
                          className="ease-in-out-anim certificate-link"
                        />
                      </a>
                    </span>
                  </p>
                </section>
                <section>
                  <p className="date">
                    {certificate.startDate} - {certificate.completionDate}
                  </p>
                </section>
              </section>
            ))}
          </section>
        </section>
      </section>
    </section>
  );
}

export default EducationContainer;
