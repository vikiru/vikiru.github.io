import { createFileRoute } from '@tanstack/react-router';
import CourseContainer from '@/components/CourseContainer';
import Layout from '@/components/Layout';

export const Route = createFileRoute('/education/courses')({
  component: CoursesPage,
});

function CoursesPage() {
  return (
    <Layout
      description="Explore the university courses I took during my degree at Carleton University."
      title="Visakan Kirubakaran | Courses"
    >
      <CourseContainer />
    </Layout>
  );
}
