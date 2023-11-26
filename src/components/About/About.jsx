import React from "react";
import aboutData from "./../../assets/about";

function About() {
  return (
    <div className="bg-black-400" id="about">
      <p className="section-text">About</p>
      <div className="m-2 overflow-x-hidden overflow-y-hidden rounded-xl bg-blue-400 p-2">
        <div className="md:flex lg:grid lg:grid-cols-2 lg:gap-4">
          <div>
            <p className="font-mono text-2xl text-black">
              {aboutData.greeting}
            </p>
            <p className="pb-1 font-mono text-4xl text-slate-100">
              {aboutData.fullName}
            </p>
            <p className="font-mono text-2xl text-black">I am a</p>
            <p className="font-mono text-4xl text-slate-100">
              {aboutData.title}
            </p>
          </div>
          <div>
            <p className="text-justify font-mono text-slate-50">
              {aboutData.hero}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
