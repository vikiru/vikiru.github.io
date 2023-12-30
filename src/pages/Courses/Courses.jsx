import CourseContainer from "../../components/CourseContainer/CourseContainer";
import Footer from "./../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import React from "react";

function CoursesPage() {
  return (
    <div className="flex h-screen w-screen snap-y flex-col overflow-x-hidden overflow-y-scroll scroll-smooth bg-primary scrollbar scrollbar-track-primary scrollbar-thumb-secondary dark:bg-darkPrimary">
      <NavBar />
      <main>
        <CourseContainer />
      </main>
      <Footer />
    </div>
  );
}

export default CoursesPage;
