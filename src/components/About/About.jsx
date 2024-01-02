import React from "react";

function About() {
  return (
    <section id="about" className="mx-auto min-h-screen">
      <div className="pt-4">
        <div className="px-4">
          <h2 className="heading-text pt-2 uppercase underline lg:text-4xl  dark:text-primary">
            About
          </h2>
        </div>

        <div className="mx-auto px-4 pt-2">
          <p className="body-text mt-2 text-secondary lg:text-2xl xl:text-3xl  dark:text-primary">
            As a recent graduate in software engineering, I stand on the
            precipice of an exciting journey into the professional realm.
          </p>
          <p className="body-text mt-2 text-secondary lg:text-2xl xl:text-3xl  dark:text-primary">
            Equipped with a solid foundation of knowledge and a thirst for
            learning, I am eager to navigate the dynamic landscape of the
            industry. My readiness to embrace challenges, both familiar and
            unfamiliar, is fueled by a passion for problem-solving and
            innovation.
          </p>
          <p className="body-text mt-2 text-secondary lg:text-2xl xl:text-3xl  dark:text-primary">
            I am committed to leveraging my skills and education to contribute
            to meaningful projects, fostering growth and driving progress.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
