import React from "react";
import shieldImages from "../../assets/shieldImages";
import skillsData from "../../assets/skills";

function SkillsContainer() {
  return (
    <section className="snap-center" id="skills">
      <p className="section-text">Skills</p>
      <section className="m-2 overflow-x-hidden overflow-y-hidden rounded-xl bg-blue-400 2xl:grid 2xl:grid-cols-7">
        {Object.keys(skillsData).map((key) => (
          <section className="sm:flex 2xl:block" key={key}>
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
          </section>
        ))}
      </section>
    </section>
  );
}

export default SkillsContainer;
