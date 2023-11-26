import React from "react";
import aboutData from "./../../assets/about";

function About() {
  return (
    <section className="snap-center" id="about">
      <p className="section-text">About</p>
      <div className="m-2 overflow-x-hidden overflow-y-hidden rounded-xl bg-sky-500/80 p-2">
        <div className="md:flex lg:grid lg:grid-cols-2 lg:gap-4">
          <section id="about-greeting">
            <p className="font-mono text-2xl text-black">
              {aboutData.greeting}
            </p>
            <p className="font-mono text-4xl text-slate-100 sm:pb-2 md:pb-4">
              {aboutData.fullName}
            </p>
            <p className="font-mono text-2xl text-black">I am a</p>
            <p className="font-mono text-4xl tracking-widest text-slate-100">
              {aboutData.title}
            </p>
          </section>
          <section id="hero" className="sm:pt-2 md:pl-4 md:pt-0">
            <p className="font-mono text-slate-50  lg:text-justify">
              {aboutData.hero}
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}

export default About;
