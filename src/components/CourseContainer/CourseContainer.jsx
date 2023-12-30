import CourseCard from "../../components/CourseCard/CourseCard";
import React from "react";
import courseData from "./../../assets/data/courses";
import educationData from "../../assets/data/education";

function CourseContainer() {
  return (
    <section id="university-courses">
      <section className="m-2 mx-auto max-w-lg" id="unversity-info">
        <div className="mx-2 px-2">
          <h2 className="xxs:text-md text-center font-heading font-semibold uppercase lg:text-4xl">
            {educationData.universityName}
          </h2>
        </div>
        <div className="mx-auto max-w-sm">
          <h3 className="pl-2 text-center font-body uppercase xxs:text-sm lg:text-2xl">
            {educationData.enrollmentStart} - {educationData.enrollmentEnd}
          </h3>
        </div>
        <div className="max-w-lg px-2">
          <h3 className="text-center font-subheading xxs:text-sm lg:text-3xl">
            {educationData.degree} - {educationData.acronym}.,{" "}
            {educationData.degreeProgram}
          </h3>
        </div>
      </section>
      <div>
        {courseData.years.map((year) => (
          <div key={year.title} className="py-2 ">
            <h3 className="xxs:text-md bg-secondary pl-3 font-subheading font-semibold uppercase text-primary underline xxs:text-center md:text-xl lg:text-4xl">
              {year.title}
            </h3>
            <div className="grid gap-3 px-2 pt-2 lg:grid-cols-2">
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
