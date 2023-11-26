import "./App.css";

import EducationContainer from "./components/EducationContainer/EducationContainer";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import ProjectContainer from "./components/ProjectContainer/ProjectContainer";
import React from "react";
import SkillsContainer from "./components/SkillsContainer/SkillsContainer";

function App() {
  return (
    <div className="App h-screen w-screen overflow-x-hidden bg-black">
      <NavBar />
      <EducationContainer />
      <SkillsContainer />
      <ProjectContainer />
      <Footer />
    </div>
  );
}

export default App;
