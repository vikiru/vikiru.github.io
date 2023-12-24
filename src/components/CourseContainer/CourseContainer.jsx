import CourseCard from "../../components/CourseCard/CourseCard";
import React from "react";
import courseData from "./../../assets/data/courses";
import educationData from "../../assets/data/education";

function CourseContainer() {
  return (
    <section id="university-courses">
      <div className="m-2 bg-white py-6">
        <div className="mx-2 px-2">
          <h2 className="text-left font-heading font-semibold uppercase lg:text-3xl">
            {educationData.universityName}
          </h2>
        </div>
        <div className="mx-2 flex justify-between">
          <div className="px-2">
            <h3 className="text-left font-subheading font-thin lg:text-2xl">
              {educationData.degree} - {educationData.acronym}.,{" "}
              {educationData.degreeProgram}
            </h3>
          </div>
          <div className="max-w-xs">
            <h3 className="pl-2 text-left font-body uppercase lg:text-xl">
              {educationData.enrollmentStart} - {educationData.enrollmentEnd}
            </h3>
          </div>
        </div>
      </div>
      <div>
        {courseData.years.map((year) => (
          <div key={year.title}>
            <h3 className="pl-3 font-subheading text-xl font-semibold uppercase text-black underline xxs:text-center lg:text-4xl">
              {year.title}
            </h3>
            <div className="grid grid-cols-2">
              {year.courses.map((course) => (
                <CourseCard key={course} course={course} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CourseContainer;
