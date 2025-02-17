import { Course } from '~types/Course';

type CourseCardProps = {
    course: Course;
};

function CourseCard(props: CourseCardProps) {
    const course = props.course;

    return (
        <section
            className="border-accent bg-primary dark:border-darkAccent dark:bg-darkSecondary rounded-lg border-4 bg-white pt-2 shadow-md lg:w-full lg:px-4 lg:pb-4"
            id={course.courseCode + ':' + course.name}
            key={course.courseCode}
        >
            <div>
                <h3 className="subheading-text dark:text-primary px-2">
                    {course.courseCode}
                </h3>

                {/* Course Name */}
                <h4 className="subheading-text dark:text-primary px-2 py-1">
                    {course.name}
                </h4>
            </div>

            {/* Course Description */}
            <div className="px-2 pb-4">
                <p className="body-text dark:text-primary">
                    {course.description}
                </p>
            </div>
        </section>
    );
}

export default CourseCard;
