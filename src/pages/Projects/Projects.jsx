import Footer from "../../components/Footer/Footer";
import ProjectContainer from "../../components/ProjectContainer/ProjectContainer";
import React from "react";

function ProjectsPage() {
  return (
    <main className="h-screen w-screen snap-y overflow-x-hidden overflow-y-scroll scroll-smooth bg-gradient-to-r from-red-500 to-teal-400 pb-4 scrollbar scrollbar-track-teal-400 scrollbar-thumb-red-500">
      <ProjectContainer />
      <Footer />
    </main>
  );
}

export default ProjectsPage;
