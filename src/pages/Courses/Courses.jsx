import CourseContainer from "../../components/CourseContainer/CourseContainer";
import Footer from "./../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import React from "react";

function CoursesPage() {
  return (
    <div className="bg-primary scrollbar-track-primary scrollbar-thumb-secondary h-screen w-screen snap-y overflow-x-hidden overflow-y-scroll scroll-smooth scrollbar">
      <NavBar />
      <main>
        <CourseContainer />
      </main>
      <Footer />
    </div>
  );
}

export default CoursesPage;
