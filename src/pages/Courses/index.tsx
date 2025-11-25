import { CourseContainer, Layout } from '~components/index';

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

export default CoursesPage;
