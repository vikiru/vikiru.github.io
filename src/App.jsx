import "./App.css";
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
    <div className="App scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-blue-400/80 z-0 h-screen w-screen snap-y snap-mandatory overflow-x-hidden scroll-smooth bg-black">
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
