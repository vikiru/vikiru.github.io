import { Course } from '~types/index';

type CourseCardProps = {
    course: Course;
};

function CourseCard(props: CourseCardProps) {
    const course = props.course;

    return (
        <section className="rounded-2xl bg-slate-100 p-6 shadow-md 10xl:p-20">
            <div className="flex min-h-20 items-center justify-between">
                <div>
                    <h3
                        className="font-heading font-semibold text-gray-800"
                        style={{ fontSize: 'clamp(1rem, 1.5vw, 4rem)' }}
                    >
                        {course.name}
                    </h3>
                </div>

                <div className="mx-2">
                    <p
                        className="font-body italic text-gray-500"
                        style={{ fontSize: 'clamp(0.65rem, 1.12vw, 4rem)' }}
                    >
                        {course.courseCode}
                    </p>
                </div>
            </div>

            <div className="xs:min-h-36 10xl:min-h-72">
                <p
                    className="font-body leading-relaxed text-gray-600"
                    style={{ fontSize: 'clamp(0.8rem, 1.2vw, 4rem)' }}
                >
                    {course.description}
                </p>
            </div>
        </section>
    );
}

export default CourseCard;
