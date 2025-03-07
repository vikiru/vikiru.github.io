import { courseData, educationData } from '~assets/data/index';
import { CourseCard } from '~components/index';

function CourseContainer() {
    return (
        <section className="bg-gray-50 py-12">
            <section>
                <div className="pb-2">
                    <h2 className="h2-text text-center">Education</h2>
                </div>

                <div className="xs:mx-2 10xl:mx-10">
                    <div className="mx-2 flex items-center justify-between">
                        <div>
                            <h4 className="h4-text">
                                {educationData.universityName}
                            </h4>
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
                            <h5
                                className="font-subheading italic"
                                style={{
                                    fontSize: 'clamp(0.65rem, 1.2vw, 4rem)',
                                }}
                            >
                                {educationData.degree} - {educationData.acronym}
                                , {educationData.degreeProgram}
                            </h5>
                        </div>

                        <div>
                            <p className="info-text">
                                {educationData.enrollmentStart} -{' '}
                                {educationData.enrollmentEnd}
                            </p>
                        </div>
                    </div>

                    <div className="mt-3">
                        {courseData.years.map((year) => (
                            <div key={year.title}>
                                <div className="flex items-center justify-center pb-4">
                                    <h3 className="h3-text">{year.title}</h3>
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
