import { Course } from '~types/index';

type CourseCardProps = {
    course: Course;
};

function CourseCard(props: CourseCardProps) {
    const course = props.course;

    return (
        <section
            className="flex flex-col rounded-2xl bg-primary-900 p-6 shadow-md 9xl:p-20"
            id={course.courseCode.toLowerCase()}
        >
            {/* Course Header */}
            <section
                className="flex min-h-20 items-center justify-between"
                id="course-header"
            >
                <div>
                    <h4 className="h4-text">{course.name}</h4>
                </div>

                <div className="mx-2">
                    <p className="info-text text-secondary-500">
                        {course.courseCode}
                    </p>
                </div>
            </section>

            {/* Course Description */}
            <section
                className="xs:min-h-36 10xl:min-h-72"
                id="course-description"
            >
                <p className="card-text text-text-600">{course.description}</p>
            </section>
        </section>
    );
}

export default CourseCard;
