import React from "react";
import shieldImages from "../../assets/shieldImages";
import skillsData from "../../assets/skills";

function SkillsContainer() {
  return (
    <section className="snap-center" id="skills">
      <p className="section-text">Skills</p>
      <section className="m-2 overflow-x-hidden overflow-y-hidden rounded-xl bg-sky-500/80 xs:grid xs:grid-cols-4 2xl:grid 2xl:grid-cols-7">
        {Object.keys(skillsData).map((key) => (
          <section className="xs:m-2 2xl:block" key={key} id={key}>
            <p className="rounded uppercase text-white">{key}</p>
            {skillsData[key].map((skill) =>
              shieldImages[`${skill}`] != "" ? (
                <section key={skill}>
                  <img
                    src={shieldImages[`${skill}`]}
                    className="shield-image w-full"
                    alt={skill}
                  ></img>
                </section>
              ) : null,
            )}
          </section>
        ))}
      </section>
    </section>
  );
}

export default SkillsContainer;
