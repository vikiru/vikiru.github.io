import PropTypes from "prop-types";
import React from "react";

function CourseCard(props) {
  const course = props.course;
  return (
    <div
      key={course.courseCode}
      className="m-2 max-w-sm rounded-md bg-white px-4 pt-2 lg:pb-4"
    >
      <h3 className="text-center font-semibold">{course.courseCode}</h3>

      {/* Course Name */}
      <h4 className="text-center font-subheading text-sm">{course.name}</h4>

      {/* Course Description */}
      <div className="max-w-sm text-center">
        <p className="text-center font-body text-sm leading-6">
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
