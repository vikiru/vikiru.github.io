import CourseCard from '@/components/CourseCard';
import courseData from '@/data/assets/courses';
import educationData from '@/data/assets/education';

function CourseContainer() {
  return (
    <section className="bg-background-950 xs:py-6 lg:py-12" id="courses">
      <div className="pb-2 7xl:py-12 11xl:py-16">
        <h2 className="h2-text text-center text-light-text-900 dark:text-dark-text-800">
          Education
        </h2>
      </div>

      <div className="xs:mx-0 lg:mx-4 7xl:mx-6 10xl:mx-10">
        {/* University Info */}
        <section id="university-info">
          <div className="mx-4 flex items-center justify-between 10xl:mx-10">
            <div>
              <h3 className="h4-text text-light-text-900 dark:text-dark-text-800">
                {educationData.universityName}
              </h3>
            </div>

            <div>
              <p
                className="font-body text-light-text-600 dark:text-dark-text-700"
                style={{
                  fontSize: 'clamp(0.75rem, 1.45vw, 4.5rem)',
                }}
              >
                {educationData.location}
              </p>
            </div>
          </div>
          <div className="mx-4 flex items-center justify-between 10xl:mx-10">
            <h4
              className="font-subheading italic text-light-text-600 dark:text-dark-text-700"
              style={{
                fontSize: 'clamp(0.65rem, 1.25vw, 5rem)',
              }}
            >
              {educationData.degree} - {educationData.acronym},{' '}
              {educationData.degreeProgram}
            </h4>

            <div>
              <p className="info-text">
                {educationData.enrollmentStart} - {educationData.enrollmentEnd}
              </p>
            </div>
          </div>
        </section>

        {/* Course List */}
        <div className="mt-3">
          {courseData.years.map((year) => (
            <section
              id={year.title.toLowerCase().replace(' ', '-')}
              key={year.title}
            >
              <div className="flex items-center justify-center pb-4 2xl:py-5 3xl:py-6 4xl:py-8 5xl:py-10 7xl:py-12 11xl:py-16">
                <h3 className="h3-text text-light-text-900 dark:text-dark-text-800">
                  {year.title}
                </h3>
              </div>

              <div className="mx-2 grid xs:gap-2 lg:grid-cols-2 lg:gap-4 2xl:gap-6 3xl:pb-8 4xl:pb-10 5xl:pb-12 6xl:pb-14 7xl:pb-16 10xl:mx-10 10xl:gap-10">
                {year.courses.map((course) => (
                  <CourseCard course={course} key={course.name} />
                ))}
              </div>

              <div
                className={`mb-4 mt-8 ${year.title !== 'Fourth Year' ? 'border-t border-gray-300 dark:border-dark-background-600' : ''}`}
              />
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CourseContainer;
