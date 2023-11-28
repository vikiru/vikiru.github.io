import "./SkillsContainer.css";

import React from "react";
import skillsData from "../../assets/data/skills";

function SkillsContainer() {
  return (
    <section className="snap-center" id="skills">
      <p className="section-text">Skills</p>
      <section className="section-container xs:grid xs:grid-cols-2 2xl:grid 2xl:grid-cols-4">
        {Object.keys(skillsData).map((skillCategory) => (
          <section
            className="m-1 max-w-lg 2xl:block"
            key={skillCategory}
            id={skillCategory}
          >
            <p className="skill-category">{skillCategory}</p>
            <ul className="list-none text-center">
              {skillsData[`${skillCategory}`].map((skill) => (
                <li key={skill} className="skill">
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
