import "./SkillsContainer.css";

import React from "react";
import skillsData from "../../assets/data/skills";

function SkillsContainer() {
  return (
    <section className="snap-center" id="skills">
      <p className="section-text">Skills</p>
      <section className="section-container md:grid md:grid-cols-2 lg:grid-cols-4">
        {Object.keys(skillsData).map((skillCategory) => (
          <section className="2xl:block" key={skillCategory} id={skillCategory}>
            <section id="skills-md" className="xs:hidden md:block">
              <p className="skill-category">{skillCategory}</p>
              <ul className="list-none text-center">
                {skillsData[`${skillCategory}`].map((skill) => (
                  <li key={skill} className="skill">
                    {skill}
                  </li>
                ))}
              </ul>
            </section>
            <section id="skills-xs" className="pl-2 md:hidden">
              <p>
                <span className="font-primary text-justify font-heading font-bold uppercase">
                  {skillCategory}:{" "}
                </span>
                <span className="font-subheading font-semibold text-gray-400">
                  {skillsData[`${skillCategory}`].join(", ")}
                </span>
              </p>
            </section>
          </section>
        ))}
      </section>
    </section>
  );
}

export default SkillsContainer;
