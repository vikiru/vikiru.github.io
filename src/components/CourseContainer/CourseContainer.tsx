import CourseCard from "~components/CourseCard/CourseCard";
import React from "react";
import courseData from "~assets/data/courses";
import educationData from "~assets/data/education";

function CourseContainer() {
  return (
    <section id="university-courses">
      <section id="unversity-info" className="min-w-screen px-4 py-2">
        <div className="pt-4">
          <h2 className="heading-text uppercase dark:text-primary">
            {educationData.universityName}
          </h2>
        </div>

        <div>
          <h3 className="subheading-text dark:text-primary">
            {educationData.degree} - {educationData.acronym}.,{" "}
            {educationData.degreeProgram}
          </h3>
        </div>

        <div>
          <h3 className="body-text uppercase dark:text-primary">
            {educationData.enrollmentStart} - {educationData.enrollmentEnd}
          </h3>
        </div>
      </section>

      <section id="course-container" className="pb-6">
        {courseData.years.map((year) => (
          <section
            key={year.title}
            id={year.title.toLowerCase() + " courses"}
            className="py-6"
          >
            <h3 className="heading-text bg-secondary px-4 text-center uppercase text-primary underline lg:py-6 dark:bg-darkSecondary dark:text-primary">
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
