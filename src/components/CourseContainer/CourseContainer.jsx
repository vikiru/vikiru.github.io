import CourseCard from "../../components/CourseCard/CourseCard";
import React from "react";
import courseData from "./../../assets/data/courses";
import educationData from "../../assets/data/education";

function CourseContainer() {
  return (
    <section id="university-courses">
      <section id="unversity-info" className="px-4 py-2">
        <div>
          <h2 className="xxs:text-md  heading-text uppercase lg:text-4xl dark:text-darkSecondary">
            {educationData.universityName}
          </h2>
        </div>
        <div>
          <h3 className="subheading-text xxs:text-sm lg:text-3xl dark:text-darkSecondary">
            {educationData.degree} - {educationData.acronym}.,{" "}
            {educationData.degreeProgram}
          </h3>
        </div>
        <div>
          <h3 className="body-text uppercase xxs:text-sm lg:text-2xl dark:text-darkSecondary">
            {educationData.enrollmentStart} - {educationData.enrollmentEnd}
          </h3>
        </div>
      </section>
      <section id="course-container" className="pb-6">
        {courseData.years.map((year) => (
          <section
            key={year.title}
            id={year.title.toLowerCase() + " courses"}
            className="min-h-screen py-2"
          >
            <h3 className="xxs:text-md heading-text bg-secondary px-4 uppercase text-primary underline md:text-xl lg:text-4xl dark:bg-darkSecondary dark:text-darkPrimary">
              {year.title}
            </h3>
            <div className="grid gap-3 px-2 pt-2 lg:grid-cols-2">
              {year.courses.map((course) => (
                <CourseCard key={course.courseCode} course={course} />
              ))}
            </div>
          </section>
        ))}
      </section>
    </section>
  );
}

export default CourseContainer;
