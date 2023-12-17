import "../../index";

import React from "react";
import aboutData from "../../assets/data/about";

function Home() {
  return (
    <main className="bg-white px-10">
      <section className="" id="about">
        <h2 className="logo">VK</h2>
        <section className="mx-auto max-w-lg py-5">
          <p className="max-w-sm rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 text-center font-heading text-4xl text-white shadow-xl">
            {aboutData.fullName}
          </p>
          <p className="max-w-sm rounded-2xl bg-white bg-gradient-to-r from-blue-500 to-cyan-500 text-center font-subheading text-xl text-white">
            {aboutData.title}
          </p>
        </section>
      </section>
    </main>
  );
}

export default Home;
