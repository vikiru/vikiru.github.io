import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import ProjectContainer from "../../components/ProjectContainer/ProjectContainer";
import React from "react";

function ProjectsPage() {
  return (
    <div className="bg-primary scrollbar-track-primary scrollbar-thumb-secondary h-screen w-screen snap-y overflow-x-hidden overflow-y-scroll scroll-smooth scrollbar">
      <NavBar />
      <main>
        <ProjectContainer />
      </main>
      <Footer />
    </div>
  );
}

export default ProjectsPage;
