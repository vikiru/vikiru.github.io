import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import ProjectContainer from "../../components/ProjectContainer/ProjectContainer";
import React from "react";

function ProjectsPage() {
  return (
    <div className="flex h-screen w-screen snap-y flex-col overflow-x-hidden overflow-y-scroll scroll-smooth bg-primary scrollbar scrollbar-track-primary scrollbar-thumb-secondary dark:bg-darkPrimary dark:scrollbar-thumb-darkSecondary">
      <NavBar />
      <main>
        <ProjectContainer />
      </main>
      <Footer />
    </div>
  );
}

export default ProjectsPage;
