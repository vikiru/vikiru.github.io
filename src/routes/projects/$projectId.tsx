import { createFileRoute } from '@tanstack/react-router';
import Layout from '@/components/Layout';
import ShowcaseSection from '@/components/ShowcaseSection';
import { projectData } from '@/data/projects';
import type { Project } from '@/types/Project';

export const Route = createFileRoute('/projects/$projectId')({
  component: ProjectShowcase,
  loader: ({ params }) => {
    const project = projectData.projects.find(
      (p: Project) => p.slug === params.projectId,
    );
    if (!project) {
      throw new Error('Project not found');
    }
    return { project };
  },
});

function ProjectShowcase() {
  const { project } = Route.useLoaderData();
  return (
    <Layout
      description={`Learn about ${project.name}, explore its goals, my accomplishments, and check out the project demo.`}
      title={`Visakan Kirubakaran | ${project.name}`}
    >
      <ShowcaseSection project={project} />
    </Layout>
  );
}
