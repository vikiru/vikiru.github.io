import React from "react";
import skillsData from "../../assets/data/skills";

function SkillsContainer() {
  return (
    <section className="mx-auto py-4" id="skills">
      <div className="mx-auto">
        <h2 className="pt-2 text-center text-2xl font-bold uppercase underline lg:text-4xl dark:text-darkSecondary">
          Skills
        </h2>
        <div className="mx-auto lg:grid lg:grid-cols-2">
          {Object.keys(skillsData).map((skillCategory) => (
            <div key={skillCategory} className="mx-auto max-w-sm pb-2">
              <h2 className="text-center font-heading text-xl font-semibold uppercase lg:text-3xl dark:text-darkSecondary">
                {skillCategory}
              </h2>
              <p className="text-center font-subheading text-lg font-thin leading-6 text-secondary lg:text-2xl dark:text-darkSecondary">
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
