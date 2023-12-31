import PropTypes from "prop-types";
import React from "react";

function CourseCard(props) {
  const course = props.course;
  return (
    <section
      id={course.courseCode + ":" + course.name}
      key={course.courseCode}
      className="bg-white w-full rounded-md bg-primary px-4 pt-2 shadow-md ring-2 lg:pb-4 dark:bg-darkSecondary"
    >
      <div>
        <h3 className="font-semibold xxs:text-sm lg:text-3xl dark:text-darkPrimary">
          {course.courseCode}
        </h3>
        {/* Course Name */}
        <h4 className="py-2 font-subheading xxs:text-sm lg:text-2xl dark:text-darkPrimary">
          {course.name}
        </h4>
      </div>

      {/* Course Description */}
      <div className="pb-4">
        <p className="font-body leading-6 xxs:text-xs sm:text-sm lg:text-xl dark:text-darkPrimary">
          {course.description}
        </p>
      </div>
    </section>
  );
}

CourseCard.propTypes = {
  course: PropTypes.object.isRequired,
};

export default CourseCard;
