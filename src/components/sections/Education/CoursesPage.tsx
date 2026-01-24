import Layout from '@/components/layout/Layout';
import { CourseCard } from '@/components/sections/Education/CourseCard';
import { CourseGrid } from '@/components/sections/Education/CourseGrid';
import { EducationHeader } from '@/components/sections/Education/EducationHeader';
import { YearSection } from '@/components/sections/Education/YearSection';
import courseData from '@/data/courses';

export default function EducationCoursesPage() {
  return (
    <Layout>
      <div className="flex flex-1 py-10 px-4">
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
      </div>
    </Layout>
  );
}
