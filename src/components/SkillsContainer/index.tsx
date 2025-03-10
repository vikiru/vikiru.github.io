import { skillsData } from '~assets/data/index';

function SkillsContainer() {
    return (
        <section className="min-h-[30vh] bg-background-950 pb-8" id="skills">
            <div>
                <h2 className="h2-text text-center">Skills</h2>
                <div className="mx-4 grid gap-3 xs:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 10xl:mx-10">
                    {Object.values(skillsData).map((category) => (
                        <section
                            className="rounded-2xl p-2"
                            id={category.title}
                            key={category.title}
                        >
                            <h4 className="h4-text">{category.title}</h4>
                            <p className="body-text text-text-600">
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
