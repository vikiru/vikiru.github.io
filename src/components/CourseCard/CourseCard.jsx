import PropTypes from "prop-types";
import React from "react";

function CourseCard(props) {
  const course = props.course;
  return (
    <div
      key={course.courseCode}
      className="bg-white mx-auto rounded-md bg-primary shadow-md ring-2 md:px-4 md:pt-4 lg:pb-4"
    >
      <div>
        <h3 className="text-center font-semibold xxs:text-sm lg:text-3xl">
          {course.courseCode}
        </h3>
        {/* Course Name */}
        <h4 className="py-2 text-center font-subheading xxs:text-sm lg:text-2xl">
          {course.name}
        </h4>
      </div>

      {/* Course Description */}
      <div className="mx-auto pb-4">
        <p className="text-center font-body leading-6 xxs:text-xs sm:text-sm lg:text-xl">
          {course.description}
        </p>
      </div>
    </div>
  );
}

CourseCard.propTypes = {
  course: PropTypes.object.isRequired,
};

export default CourseCard;
