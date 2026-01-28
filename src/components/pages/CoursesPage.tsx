import { Layout } from '@/components/layout/Layout';
import { CourseCard } from '@/components/sections/Education/CourseCard';
import { CourseGrid } from '@/components/sections/Education/CourseGrid';
import { EducationHeader } from '@/components/sections/Education/EducationHeader';
import { YearSection } from '@/components/sections/Education/YearSection';
import { courseData } from '@/data/courses';

export function CoursesPage() {
  return (
    <Layout>
      <section
        className="layout-content-container flex flex-col gap-1 py-10 px-4"
        id="education"
      >
        <div className="layout-content-container flex flex-col w-full flex-1 gap-12">
          <EducationHeader />
          <div className="flex flex-col gap-12">
            {courseData.years.map((yearData) => (
              <YearSection
                key={yearData.title}
                title={yearData.title}
                year={yearData.numericYear}
              >
                <CourseGrid>
                  {yearData.courses.map((course) => (
                    <CourseCard
                      courseCode={course.courseCode}
                      description={course.description}
                      key={course.courseCode}
                      name={course.name}
                    />
                  ))}
                </CourseGrid>
              </YearSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
