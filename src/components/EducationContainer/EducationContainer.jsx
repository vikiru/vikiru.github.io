import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import educationData from "../../assets/education";
import { faLink } from "@fortawesome/free-solid-svg-icons";

function EducationContainer() {
  const certificates = educationData.certificates;
  return (
    <div className="bg-black-400" id="education">
      <p className="section-text">Education</p>
      <div className="m-2 overflow-x-hidden overflow-y-hidden rounded-xl bg-blue-400 p-2">
        <div className="flex justify-between">
          <p className="font-sans text-lg uppercase text-black">
            {educationData.universityName}
          </p>
          <p className="font-thin uppercase text-slate-100">
            {educationData.enrollmentStart} - {educationData.enrollmentEnd}
          </p>
        </div>
        <div className="flex pb-1">
          <p className="left-0 font-mono italic text-slate-50">
            {educationData.degree} - {educationData.acronym}.,{" "}
            {educationData.degreeProgram}
          </p>
        </div>
        {certificates.map((certificate) => (
          <div key={certificate}>
            <div className="flex justify-between">
              <p className="font-sans text-lg uppercase text-black">
                {certificate.provider}
              </p>
              <p className="font-thin uppercase text-slate-100">
                {certificate.completionDate}
              </p>
            </div>
            <div className="flex pb-1">
              <p className="left-0 font-mono italic text-slate-50">
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EducationContainer;
