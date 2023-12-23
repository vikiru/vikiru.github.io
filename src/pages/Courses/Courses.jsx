import CourseContainer from "../../components/CourseContainer/CourseContainer";
import Footer from "./../../components/Footer/Footer";
import React from "react";

function CoursesPage() {
  return (
    <div className="scroll-smoothscrollbar h-screen w-screen snap-y overflow-x-hidden overflow-y-scroll scrollbar-track-teal-400 scrollbar-thumb-red-500">
      <main>
        <CourseContainer />
      </main>
      <Footer />
    </div>
  );
}

export default CoursesPage;
