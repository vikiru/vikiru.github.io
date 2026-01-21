import { createFileRoute } from '@tanstack/react-router';
import Layout from '@/components/Layout';
import ProjectContainer from '@/components/ProjectContainer';

export const Route = createFileRoute('/projects/')({
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <Layout
      description="Explore all the projects I've worked on, including both personal and academic projects."
      title="Visakan Kirubakaran | Projects"
    >
      <ProjectContainer />
    </Layout>
  );
}
