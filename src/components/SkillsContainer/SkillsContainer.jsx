import "./SkillsContainer.css";

import React from "react";
import skillsData from "../../assets/data/skills";

function SkillsContainer() {
  return (
    <section className="snap-center" id="skills">
      <p className="section-text">Skills</p>
      <section className="section-container sm:grid sm:grid-cols-2 2xl:grid 2xl:grid-cols-7">
        {Object.keys(skillsData).map((skillCategory) => (
          <section
            className="xs:m-2 2xl:block"
            key={skillCategory}
            id={skillCategory}
          >
            <p className="skill-category">
              {skillCategory}
            </p>
            <ul className="list-none text-center">
              {skillsData[`${skillCategory}`].map((skill) => (
                <li
                  key={skill}
                  className="skill"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </section>
    </section>
  );
}

export default SkillsContainer;
