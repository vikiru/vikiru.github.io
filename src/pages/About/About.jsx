import "../../index";

import About from "../../components/About/About";
import EducationContainer from "../../components/EducationContainer/EducationContainer";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import React from "react";
import SkillsContainer from "../../components/SkillsContainer/SkillsContainer";

function AboutPage() {
  return (
    <div className="h-screen w-screen snap-y overflow-x-hidden overflow-y-scroll scroll-smooth scrollbar scrollbar-track-teal-400 scrollbar-thumb-red-500">
      <NavBar />
      <main>
        {/* About Section */}
        <About />
        {/* Education Section */}
        <EducationContainer />
        {/* Skills Section */}
        <SkillsContainer />
        {/* Fooer Section */}
      </main>
      <Footer />
    </div>
  );
}

export default AboutPage;
