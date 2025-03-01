import skillsData from '~assets/data/skills';

function SkillsContainer() {
    return (
        <section className="min-h-[30vh] bg-gray-50 pb-8">
            <div>
                <h3
                    className="text-center font-heading font-semibold text-gray-800"
                    style={{ fontSize: 'clamp(2rem, 2vw, 9rem)' }}
                >
                    Skills
                </h3>

                <div className="mx-4 grid gap-3 xs:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                    {Object.values(skillsData).map((category) => (
                        <div key={category.title} className="rounded-2xl p-2">
                            <h3
                                className="font-heading font-semibold text-gray-800"
                                style={{ fontSize: 'clamp(1rem, 1.5vw, 4rem)' }}
                            >
                                {category.title}
                            </h3>

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
