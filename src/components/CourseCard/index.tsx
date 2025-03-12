import { Course } from '~types/index';

type CourseCardProps = {
    course: Course;
};

function CourseCard(props: CourseCardProps) {
    const course = props.course;

    return (
        <section
            className="flex flex-col rounded-2xl bg-light-primary-900 p-6 shadow-md 9xl:p-20 dark:bg-dark-primary-500"
            id={course.courseCode.toLowerCase()}
        >
            {/* Course Header */}
            <section
                className="mb-auto flex min-h-20 items-center justify-between"
                id="course-header"
            >
                <div>
                    <h4 className="h4-text text-light-text-900 dark:text-dark-text-800">
                        {course.name}
                    </h4>
                </div>

                <div className="mx-2 my-auto flex items-center">
                    <p className="info-text">{course.courseCode}</p>
                </div>
            </section>

            {/* Course Description */}
            <section
                className="mb-auto flex grow xs:min-h-36 10xl:min-h-72"
                id="course-description"
            >
                <p className="card-text text-light-text-600 dark:text-dark-text-700">
                    {course.description}
                </p>
            </section>
        </section>
    );
}

export default CourseCard;
