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
                className="flex items-start justify-between xs:min-h-11 lg:min-h-12 xl:min-h-10 5xl:min-h-20 10xl:min-h-44"
                id="course-header"
            >
                {/* Course Title */}
                <div className="flex items-start">
                    <h4 className="h4-text leading-snug text-light-text-900 dark:text-dark-text-800">
                        {course.name}
                    </h4>
                </div>

                {/* Course Code */}
                <div className="mx-2 flex items-start xs:mt-1 xl:mt-2 2xl:mt-3 3xl:mt-4 4xl:mt-5 5xl:mt-6 6xl:mt-7 9xl:mt-9 11xl:mt-10">
                    <p className="info-text">{course.courseCode}</p>
                </div>
            </section>

            {/* Course Description */}
            <section
                className="mb-auto flex grow xs:min-h-36 2xl:min-h-[11.5rem] 3xl:min-h-[13rem] 4xl:min-h-[15rem] 5xl:min-h-[17rem] 6xl:min-h-[18rem] 7xl:min-h-[20rem] 8xl:min-h-[21rem] 9xl:min-h-[23rem] 10xl:min-h-[25rem] 11xl:min-h-[26rem]"
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
