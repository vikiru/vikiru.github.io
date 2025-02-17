import courseData from '~assets/data/courses';
import educationData from '~assets/data/education';
import CourseCard from '~components/CourseCard/CourseCard';

function CourseContainer() {
    return (
        <section id="university-courses">
            <section className="min-w-screen px-4 py-2" id="unversity-info">
                <div className="pt-4">
                    <h2 className="heading-text dark:text-primary uppercase">
                        {educationData.universityName}
                    </h2>
                </div>

                <div>
                    <h3 className="subheading-text dark:text-primary">
                        {educationData.degree} - {educationData.acronym}.,{' '}
                        {educationData.degreeProgram}
                    </h3>
                </div>

                <div>
                    <h3 className="body-text dark:text-primary uppercase">
                        {educationData.enrollmentStart} -{' '}
                        {educationData.enrollmentEnd}
                    </h3>
                </div>
            </section>

            <section className="pb-6" id="course-container">
                {courseData.years.map((year) => (
                    <section
                        className="py-6"
                        id={year.title.toLowerCase() + ' courses'}
                        key={year.title}
                    >
                        <h3 className="heading-text bg-secondary text-primary dark:bg-darkSecondary dark:text-primary px-4 text-center uppercase underline lg:py-6">
                            {year.title}
                        </h3>
                        <div className="grid gap-3 px-2 pt-2 lg:grid-cols-2">
                            {year.courses.map((course) => (
                                <CourseCard
                                    course={course}
                                    key={course.courseCode}
                                />
                            ))}
                        </div>
                    </section>
                ))}
            </section>
        </section>
    );
}

export default CourseContainer;
