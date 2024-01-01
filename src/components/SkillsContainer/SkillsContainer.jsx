import React from "react";
import skillsData from "../../assets/data/skills";

function SkillsContainer() {
  return (
    <section className="mx-auto min-h-screen pb-6" id="skills">
      <div className="px-4">
        <h2 className="heading-text uppercase underline lg:text-4xl dark:text-darkSecondary">
          Skills
        </h2>
        <div className="lg:grid lg:grid-cols-2">
          {Object.keys(skillsData).map((skillCategory) => (
            <div key={skillCategory} className="py-2" id={skillCategory}>
              <h2 className="subheading-text uppercase lg:text-3xl dark:text-darkSecondary">
                {skillCategory}
              </h2>
              <p className="body-text text-secondary lg:text-2xl dark:text-darkSecondary">
                {skillsData[`${skillCategory}`].join(", ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsContainer;
