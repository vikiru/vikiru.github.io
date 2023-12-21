import CourseContainer from "../../components/CourseContainer/CourseContainer";
import React from "react";
function CoursesPage() {
  return (
    <main className="h-screen w-screen snap-y overflow-x-hidden overflow-y-scroll scroll-smooth bg-gradient-to-r from-red-500 to-teal-400 pb-4 scrollbar scrollbar-track-teal-400 scrollbar-thumb-red-500">
      <CourseContainer />
    </main>
  );
}

export default CoursesPage;
