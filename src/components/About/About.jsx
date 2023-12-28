import React from "react";
import aboutData from "../../assets/data/about";

function About() {
  return (
    <section className="mx-auto">
      <div className="flex flex-col py-4">
        <div className="mx-auto">
          <h2 className="pt-2 text-center text-2xl font-bold uppercase underline lg:text-4xl">
            About
          </h2>
        </div>
        <div className="mx-auto max-w-sm lg:max-w-xl">
          <p className="my-2 font-body text-xl text-secondary xxs:text-center lg:text-2xl">
            {aboutData.hero}
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
