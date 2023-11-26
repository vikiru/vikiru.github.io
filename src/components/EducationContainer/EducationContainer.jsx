import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import educationData from "../../assets/education";
import { faLink } from "@fortawesome/free-solid-svg-icons";

function EducationContainer() {
  const certificates = educationData.certificates;
  return (
    <section className="snap-center" id="education">
      <p className="section-text">Education</p>
      <section className="m-2 overflow-x-hidden overflow-y-hidden rounded-xl bg-blue-400 p-2">
        <section
          id="university-enrollment-info"
          className="flex justify-between"
        >
          <p className="pl-1 font-sans text-lg uppercase text-black">
            {educationData.universityName}
          </p>
          <p className="font-thin uppercase text-slate-100">
            {educationData.enrollmentStart} - {educationData.enrollmentEnd}
          </p>
        </section>
        <section id="university-degree" className="flex pb-1">
          <p className="left-0 pl-1 font-mono italic text-slate-50">
            {educationData.degree} - {educationData.acronym}.,{" "}
            {educationData.degreeProgram}
          </p>
        </section>
        {certificates.map((certificate) => (
          <section id="certificates" key={certificate}>
            <div className="flex justify-between">
              <p className="pl-1 font-sans text-lg uppercase text-black">
                {certificate.provider}
              </p>
              <p className="font-thin uppercase text-slate-100">
                {certificate.startDate} - {certificate.completionDate}
              </p>
            </div>
            <section className="flex pb-1">
              <p className="left-0 pl-1 font-mono italic text-slate-50">
                {certificate.certificationName}{" "}
                <span>
                  <a href={certificate.certificateLink}>
                    <FontAwesomeIcon
                      icon={faLink}
                      className="ease-in-out-anim text-md pr-2 text-black"
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
