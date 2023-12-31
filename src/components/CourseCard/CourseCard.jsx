import PropTypes from "prop-types";
import React from "react";

function CourseCard(props) {
  const course = props.course;
  return (
    <section
      id={course.courseCode + ":" + course.name}
      key={course.courseCode}
      className="bg-white rounded-lg border-4 border-accent bg-primary pt-2 shadow-md lg:w-full lg:px-4 lg:pb-4 dark:border-darkAccent dark:bg-darkSecondary"
    >
      <div>
        <h3 className="subheading-text px-2 dark:text-primary">
          {course.courseCode}
        </h3>

        {/* Course Name */}
        <h4 className="subheading-text px-2 py-1 dark:text-primary">
          {course.name}
        </h4>
      </div>

      {/* Course Description */}
      <div className="px-2 pb-4">
        <p className="body-text dark:text-primary">{course.description}</p>
      </div>
    </section>
  );
}

CourseCard.propTypes = {
  course: PropTypes.object.isRequired,
};

export default CourseCard;
