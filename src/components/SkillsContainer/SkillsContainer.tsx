import skillsData from '~assets/data/skills';

function SkillsContainer() {
    return (
        <section className="mx-auto pb-6" id="skills">
            <div className="px-4">
                <h2 className="heading-text dark:text-primary text-center uppercase underline">
                    Skills
                </h2>

                <div className="lg:grid lg:grid-cols-2">
                    {Object.keys(skillsData).map((skillCategory) => (
                        <div
                            className="py-2"
                            id={skillCategory}
                            key={skillCategory}
                        >
                            <h2 className="subheading-text dark:text-primary text-center uppercase">
                                {skillCategory}
                            </h2>
                            <p className="body-text text-secondary dark:text-primary text-center">
                                Skill
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SkillsContainer;
