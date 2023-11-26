import React from "react";
import shieldImages from "../../assets/shieldImages";
import skillsData from "../../assets/skills";

function SkillsContainer() {
  return (
    <div className="bg-black-400" id="skills">
      <p className="section-text">Skills</p>
      <div className="m-2 overflow-x-hidden overflow-y-hidden rounded-xl bg-blue-400 2xl:grid 2xl:grid-cols-7">
        {Object.keys(skillsData).map((key, index) => (
          <div className="sm:flex 2xl:block" key={index}>
            <p className="rounded uppercase text-white">{key}</p>
            {skillsData[key].map((skill) =>
              shieldImages[`${skill}`] != "" ? (
                <div key={skill}>
                  <img
                    src={shieldImages[`${skill}`]}
                    className="shield-image w-full"
                    alt={skill}
                  ></img>
                </div>
              ) : null,
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsContainer;
