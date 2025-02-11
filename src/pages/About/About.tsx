import About from "~components/About/About";
import EducationContainer from "~components/EducationContainer/EducationContainer";
import Footer from "~components/Footer/Footer";
import NavBar from "~components/NavBar/NavBar";
import React from "react";
import SkillsContainer from "~components/SkillsContainer/SkillsContainer";

function AboutPage() {
  return (
    <div className="flex h-screen w-screen snap-y flex-col overflow-x-hidden overflow-y-scroll scroll-smooth bg-primary scrollbar-thin scrollbar-track-primary scrollbar-thumb-accent lg:scrollbar dark:bg-darkPrimary dark:scrollbar-track-darkPrimary dark:scrollbar-thumb-darkAccent">
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
