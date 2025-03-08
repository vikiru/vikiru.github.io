import { skillsData } from '~assets/data/index';

function SkillsContainer() {
    return (
        <section className="min-h-[30vh] bg-background-950 pb-8">
            <div>
                <h2 className="h2-text text-center">Skills</h2>

                <div className="mx-4 grid gap-3 xs:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                    {Object.values(skillsData).map((category) => (
                        <div className="rounded-2xl p-2" key={category.title}>
                            <h3 className="h3-text">{category.title}</h3>

                            <p
                                className="font-body leading-relaxed text-gray-600"
                                style={{
                                    fontSize: 'clamp(0.8rem, 1.25vw, 4rem)',
                                }}
                            >
                                {category.data.join(', ')}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SkillsContainer;
