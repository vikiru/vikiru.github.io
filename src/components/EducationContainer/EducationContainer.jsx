import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import educationData from "../../assets/data/education";
import { faLink } from "@fortawesome/free-solid-svg-icons";

function EducationContainer() {
  const certificates = educationData.certificates;
  return (
    <section className="snap-center" id="education">
      <p className="section-text">Education</p>
      <section className="m-2 overflow-x-hidden overflow-y-hidden rounded-xl  p-2">
        <section
          id="university-enrollment-info"
          className="flex justify-between"
        >
          <section>
            <p className="font-heading pl-1 text-lg uppercase text-gray-400">
              {educationData.universityName}
            </p>
          </section>
          <section>
            <p className="font-thin uppercase text-slate-100">
              {educationData.enrollmentStart} - {educationData.enrollmentEnd}
            </p>
          </section>
        </section>
        <section id="university-degree" className="flex pb-1">
          <p className="font-subheading left-0 pl-1 italic text-slate-50">
            {educationData.degree} - {educationData.acronym}.,{" "}
            {educationData.degreeProgram}
          </p>
        </section>
        {certificates.map((certificate) => (
          <section id="certificates" key={certificate}>
            <div className="flex justify-between">
              <section>
                <p className="font-heading text-lg uppercase text-gray-400 sm:pl-11 md:pl-1">
                  {certificate.provider}
                </p>
              </section>
              <section className="sm:pl-10">
                <p className="font-thin uppercase text-slate-100">
                  {certificate.startDate} - {certificate.completionDate}
                </p>
              </section>
            </div>
            <section className="flex pb-1">
              <p className="left-0 pl-1 font-mono italic text-slate-50">
                {certificate.certificationName}{" "}
                <span>
                  <a
                    href={certificate.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faLink}
                      className="ease-in-out-anim text-md pr-2 text-gray-400"
                    />
                  </a>
                </span>
              </p>
            </section>
          </section>
        ))}
      </section>
    </section>
  );
}

export default EducationContainer;
