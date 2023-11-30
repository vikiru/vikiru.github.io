import "./About.css";

import React from "react";
import aboutData from "../../assets/data/about";

function About() {
  return (
    <section className="snap-center" id="about">
      <h2 className="section-text">About</h2>
      <section className="section-container">
        <p className="full-name font-primary">{aboutData.fullName}</p>
        <p className="title">{aboutData.title}</p>
        <section id="hero" className="hero-section">
          <p className="hero-text font-primary">{aboutData.hero}</p>
        </section>
      </section>
    </section>
  );
}

export default About;
