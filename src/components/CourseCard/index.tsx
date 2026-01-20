import { memo } from 'react';
import type { Course } from '@/types/Course';

type CourseCardProps = {
  course: Course;
};

const CourseCard = memo(function CourseCard(props: CourseCardProps) {
  const course = props.course;

  return (
    <section
      className="flex flex-col rounded-2xl bg-light-primary-900 p-6 shadow-md 3xl:p-8 7xl:p-10 9xl:p-20 dark:bg-dark-primary-500"
      id={course.courseCode.toLowerCase()}
    >
      {/* Course Header */}
      <section
        className="flex items-start justify-between lg:min-h-[3.5rem] xl:min-h-10 5xl:min-h-[7.5rem] 6xl:min-h-[8.5rem] 7xl:min-h-[9.5rem] 8xl:min-h-[10.5rem] 9xl:min-h-[11.5rem] 10xl:min-h-[12.5rem] 11xl:min-h-[13.5rem]"
        id="course-header"
      >
        {/* Course Title */}
        <div className="flex items-start">
          <h4 className="h4-text leading-snug text-light-text-900 dark:text-dark-text-800">
            {course.name}
          </h4>
        </div>

        {/* Course Code */}
        <div className="mx-2 flex items-start xs:mt-1 lg:mt-[0.375rem] xl:mt-[0.625rem] 2xl:mt-3 3xl:mt-4 4xl:mt-5 5xl:mt-6 6xl:mt-7 7xl:mt-8 9xl:mt-9 10xl:mt-10 11xl:mt-11">
          <p className="info-text">{course.courseCode}</p>
        </div>
      </section>

      {/* Course Description */}
      <section
        className="mb-auto flex grow lg:min-h-44 2xl:min-h-[11.5rem] 3xl:min-h-[13rem] 4xl:min-h-[15rem] 5xl:min-h-[17rem] 6xl:min-h-[18.5rem] 7xl:min-h-[20rem] 8xl:min-h-[21rem] 9xl:min-h-[23rem] 10xl:min-h-[25rem] 11xl:min-h-[26rem]"
        id="course-description"
      >
        <p className="card-text text-light-text-600 dark:text-dark-text-700">
          {course.description}
        </p>
      </section>
    </section>
  );
});

export default CourseCard;
