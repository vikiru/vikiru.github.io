import PropTypes from "prop-types";
import React from "react";

function CourseCard(props) {
  const course = props.course;
  return (
    <div
      key={course.courseCode}
      className="bg-primary mx-auto max-w-lg rounded-md bg-white px-4 pt-4 shadow-md ring-2 lg:pb-4"
    >
      <div>
        <h3 className="text-center font-semibold lg:text-3xl">
          {course.courseCode}
        </h3>
        {/* Course Name */}
        <h4 className="py-2 text-center font-subheading text-sm lg:text-2xl">
          {course.name}
        </h4>
      </div>

      {/* Course Description */}
      <div className="mx-auto pb-4">
        <p className="text-center text-center font-body text-sm leading-6 lg:text-xl">
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
