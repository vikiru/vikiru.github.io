import "./index.css";

import About from "./components/About/About";
import EducationContainer from "./components/EducationContainer/EducationContainer";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import ProjectContainer from "./components/ProjectContainer/ProjectContainer";
import React from "react";
import SkillsContainer from "./components/SkillsContainer/SkillsContainer";

function App() {
  return (
    <div className="primary-colour scrollbar-track-trk-colour scrollbar-thumb-thmb-colour h-screen w-screen snap-y snap-mandatory overflow-x-hidden scroll-smooth scrollbar">
      <NavBar />
      <About />
      <EducationContainer />
      <SkillsContainer />
      <ProjectContainer />
      <Footer />
    </div>
  );
}

export default App;
