import React from "react";
import courseData from "./../../assets/data/courses";

function Courses() {
  return (
    <main className="h-screen w-screen snap-y overflow-x-hidden overflow-y-scroll scroll-smooth bg-gradient-to-r from-red-500 to-teal-400 pb-4 scrollbar scrollbar-track-teal-400 scrollbar-thumb-red-500">
      <h2 className="pt-2 text-center text-2xl font-bold uppercase text-white underline">
        Courses
      </h2>
      <div>
        {courseData.years.map((year) => (
          <div key={year.title}>
            <h3 className="pl-3 font-subheading text-xl font-semibold uppercase text-white underline xxs:text-center lg:text-left">
              {year.title}
            </h3>
            <div className="md:grid md:grid-cols-2 lg:grid-cols-3 lg:overflow-x-auto">
              {year.courses.map((course) => (
                <div
                  key={course.courseCode}
                  className="m-2 max-w-sm rounded-md bg-white px-4 pt-2 lg:pb-4"
                >
                  <h3 className="text-center font-semibold">
                    {course.courseCode}
                  </h3>

                  {/* Course Name */}
                  <h4 className="text-center font-subheading text-sm">
                    {course.name}
                  </h4>

                  {/* Course Description */}
                  <div className="max-w-sm text-center">
                    <p className="text-center font-body text-sm leading-6">
                      {course.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Courses;
