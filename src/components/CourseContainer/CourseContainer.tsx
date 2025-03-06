import { courseData, educationData } from '~assets/data/index';
import { CourseCard } from '~components/index';

function CourseContainer() {
    return (
        <section className="bg-gray-50 py-12">
            <section>
                <div className="pb-2">
                    <h3
                        className="text-center font-heading font-semibold text-gray-800"
                        style={{ fontSize: 'clamp(2rem, 2vw, 9rem)' }}
                    >
                        Education
                    </h3>
                </div>

                <div className="mx-2 10xl:mx-10">
                    <div className="mx-2 flex items-center justify-between">
                        <div>
                            <h3
                                className="font-heading font-semibold"
                                style={{ fontSize: 'clamp(1rem, 1.5vw, 4rem)' }}
                            >
                                {educationData.universityName}
                            </h3>
                        </div>
                        <div>
                            <p
                                className="font-body text-gray-700"
                                style={{
                                    fontSize: 'clamp(0.65rem, 1.25vw, 4rem)',
                                }}
                            >
                                {educationData.location}
                            </p>
                        </div>
                    </div>

                    <div className="mx-2 flex items-center justify-between">
                        <div>
                            <h3
                                className="font-subheading italic"
                                style={{
                                    fontSize: 'clamp(0.65rem, 1.25vw, 4rem)',
                                }}
                            >
                                {educationData.degree} - {educationData.acronym}
                                , {educationData.degreeProgram}
                            </h3>
                        </div>

                        <div>
                            <p
                                className="font-body italic text-gray-500"
                                style={{
                                    fontSize: 'clamp(0.65rem, 1.25vw, 4rem)',
                                }}
                            >
                                {educationData.enrollmentStart} -{' '}
                                {educationData.enrollmentEnd}
                            </p>
                        </div>
                    </div>

                    <div className="mt-3">
                        {courseData.years.map((year) => (
                            <div key={year.title}>
                                <div className="flex items-center justify-center pb-4">
                                    <h3
                                        className="font-heading font-semibold"
                                        style={{
                                            fontSize:
                                                'clamp(1rem, 1.75vw, 4rem)',
                                        }}
                                    >
                                        {year.title}
                                    </h3>
                                </div>

                                <div className="mx-2 grid gap-2 md:grid-cols-2 10xl:mx-10 10xl:gap-10">
                                    {year.courses.map((course) => (
                                        <CourseCard
                                            course={course}
                                            key={course.name}
                                        />
                                    ))}
                                </div>

                                <div
                                    className={`mb-4 mt-8 ${year.title !== 'Fourth Year' ? 'border-t border-gray-300' : ''}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </section>
    );
}

export default CourseContainer;
