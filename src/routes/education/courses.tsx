import { createFileRoute } from '@tanstack/react-router';
import Layout from '@/components/layout/Layout';
import CourseContainer from '@/components/sections/CourseContainer';

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
