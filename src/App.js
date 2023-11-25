import "./App.css";

import Footer from "./components/Footer/Footer";
import ProjectContainer from "./components/ProjectContainer/ProjectContainer";
import React from "react";

function App() {
  return (
    <div className="App h-screen w-screen overflow-x-hidden bg-black">
      <ProjectContainer />
      <Footer />
    </div>
  );
}

export default App;
