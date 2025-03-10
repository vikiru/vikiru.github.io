import { courseData, educationData } from '~assets/data/index';
import { CourseCard } from '~components/index';

function CourseContainer() {
    return (
        <section className="bg-background-950 xs:py-6 lg:py-12" id="courses">
            <div>
                <div className="pb-2">
                    <h2 className="h2-text text-center">Education</h2>
                </div>

                <div className="xs:mx-2 10xl:mx-10">
                    <div className="mx-2 flex items-center justify-between">
                        <div>
                            <h3
                                className="h3-text"
                                style={{
                                    fontSize: 'clamp(1.5rem, 2.125vw, 6.5rem)',
                                }}
                            >
                                {educationData.universityName}
                            </h3>
                        </div>
                        <div>
                            <p
                                className="font-body text-gray-700"
                                style={{
                                    fontSize: 'clamp(0.75rem, 1.45vw, 4.5rem)',
                                }}
                            >
                                {educationData.location}
                            </p>
                        </div>
                    </div>

                    <div className="mx-2 flex items-center justify-between">
                        <div>
                            <h5
                                className="font-subheading italic"
                                style={{
                                    fontSize: 'clamp(0.65rem, 1.45vw, 5rem)',
                                }}
                            >
                                {educationData.degree} - {educationData.acronym}
                                , {educationData.degreeProgram}
                            </h5>
                        </div>

                        <div>
                            <p
                                className="info-text"
                                style={{
                                    fontSize: 'clamp(0.65rem, 1.35vw, 5rem)',
                                }}
                            >
                                {educationData.enrollmentStart} -{' '}
                                {educationData.enrollmentEnd}
                            </p>
                        </div>
                    </div>

                    <div className="mt-3">
                        {courseData.years.map((year) => (
                            <section
                                id={year.title.toLowerCase().replace(' ', '-')}
                                key={year.title}
                            >
                                <div className="flex items-center justify-center pb-4">
                                    <h3 className="h3-text">{year.title}</h3>
                                </div>

                                <div className="mx-2 grid gap-2 md:grid-cols-2 3xl:pb-8 4xl:pb-10 5xl:pb-12 6xl:pb-14 7xl:pb-16 10xl:mx-10 10xl:gap-10">
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
                            </section>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CourseContainer;
