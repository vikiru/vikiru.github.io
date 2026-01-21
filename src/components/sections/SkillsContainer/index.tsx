import skillsData from '@/data/skills';

function SkillsContainer() {
  return (
    <section
      className="bg-secondary/50 min-h-[30vh] pb-8 7xl:py-12 11xl:py-16"
      id="skills"
    >
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-center text-foreground sm:text-3xl lg:text-4xl">
          Skills
        </h2>

        <div className="mx-4 grid gap-3 xs:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 7xl:mt-12 7xl:gap-6 8xl:gap-8 9xl:gap-9 10xl:mx-10 10xl:gap-10 11xl:mt-20">
          {Object.values(skillsData).map((category) => (
            <section
              className="rounded-2xl bg-secondary/30 p-2"
              id={category.title.toLowerCase()}
              key={category.title}
            >
              <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                {category.title}
              </h3>
              <div className="7xl:mt-4">
                <p className="text-muted-foreground">
                  {category.data.join(', ')}
                </p>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsContainer;
