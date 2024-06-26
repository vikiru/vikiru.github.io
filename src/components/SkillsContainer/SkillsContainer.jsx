import React from "react";
import skillsData from "../../assets/data/skills";

function SkillsContainer() {
  return (
    <section className="mx-auto pb-6" id="skills">
      <div className="px-4">
        <h2 className="heading-text text-center uppercase underline dark:text-primary">
          Skills
        </h2>

        <div className="lg:grid lg:grid-cols-2">
          {Object.keys(skillsData).map((skillCategory) => (
            <div key={skillCategory} className="py-2" id={skillCategory}>
              <h2 className="subheading-text text-center uppercase dark:text-primary">
                {skillCategory}
              </h2>
              <p className="body-text text-center text-secondary dark:text-primary">
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
