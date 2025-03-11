import { skillsData } from '~data/index';

function SkillsContainer() {
    return (
        <section className="bg-background-950 min-h-[30vh] pb-8" id="skills">
            <div>
                <h2 className="h2-text text-center text-light-text-900 dark:text-dark-text-800">
                    Skills
                </h2>
                <div className="mx-4 grid gap-3 xs:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 10xl:mx-10">
                    {Object.values(skillsData).map((category) => (
                        <section
                            className="rounded-2xl p-2"
                            id={category.title.toLowerCase()}
                            key={category.title}
                        >
                            <h3 className="h4-text text-light-text-900 dark:text-dark-text-800">
                                {category.title}
                            </h3>
                            <p className="body-text text-light-text-600 dark:text-dark-text-700">
                                {category.data.join(', ')}
                            </p>
                        </section>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SkillsContainer;
