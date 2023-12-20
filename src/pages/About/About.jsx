import "../../index";

import About from "../../components/About/About";
import EducationContainer from "../../components/EducationContainer/EducationContainer";
import Footer from "../../components/Footer/Footer";
import React from "react";
import SkillsContainer from "../../components/SkillsContainer/SkillsContainer";

function AboutPage() {
  return (
    <main className="h-screen w-screen snap-y overflow-x-hidden overflow-y-scroll scroll-smooth bg-gradient-to-r from-red-500 to-teal-400 pb-4 scrollbar scrollbar-track-teal-400 scrollbar-thumb-red-500">
      {/* About Section */}
      <About />
      {/* Education Section */}
      <EducationContainer />
      {/* Skills Section */}
      <SkillsContainer />
      {/* Fooer Section */}
      <Footer />
    </main>
  );
}

export default AboutPage;
