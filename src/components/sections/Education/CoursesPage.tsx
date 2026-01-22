import Layout from '@/components/layout/Layout';
import courseData from '@/data/courses';
import { CourseCard } from './CourseCard';
import { CourseGrid } from './CourseGrid';
import { EducationHeader } from './EducationHeader';
import { YearSection } from './YearSection';

export default function EducationCoursesPage() {
  return (
    <Layout
      description="Educational background and university coursework"
      title="Visakan Kirubakaran | Courses"
    >
      <div className="flex flex-1 justify-center py-10 px-4 md:px-10 lg:px-12 xl:px-40">
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
