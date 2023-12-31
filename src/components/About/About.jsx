import React from "react";

function About() {
  return (
    <section id="about" className="mx-auto min-h-screen">
      <div className="py-4">
        <div className="px-4">
          <h2 className="pt-2 text-2xl font-bold uppercase underline lg:text-4xl dark:text-darkSecondary">
            About
          </h2>
        </div>
        <div className="mx-auto px-4 py-2">
          <p className="my-2 font-body text-xl leading-8 text-secondary lg:text-2xl xl:text-3xl dark:text-darkSecondary">
            As a recent graduate in software engineering, I stand on the
            precipice of an exciting journey into the professional realm.
          </p>
          <p className="my-2 font-body text-xl leading-8 text-secondary lg:text-2xl xl:text-3xl dark:text-darkSecondary">
            Equipped with a solid foundation of knowledge and a thirst for
            learning, I am eager to navigate the dynamic landscape of the
            industry. My readiness to embrace challenges, both familiar and
            unfamiliar, is fueled by a passion for problem-solving and
            innovation.
          </p>
          <p className="my-2 font-body text-xl leading-8 text-secondary lg:text-2xl xl:text-3xl dark:text-darkSecondary">
            I am committed to leveraging my skills and education to contribute
            to meaningful projects, fostering growth and driving progress.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
