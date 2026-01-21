import { createFileRoute } from '@tanstack/react-router';
import Layout from '@/components/layout/Layout';
import ShowcaseSection from '@/components/sections/ShowcaseSection';
import { projectData } from '@/data/projects';
import type { Project } from '@/types/Project';

export const Route = createFileRoute('/projects/$slug')({
  component: ProjectShowcase,
  loader: ({ params }) => {
    if (!params.slug) {
      throw new Error('Project slug is required');
    }
    const project = projectData.projects.find(
      (p: Project) => p.slug.toLowerCase() === params.slug.toLowerCase(),
    );
    if (!project) {
      throw new Error(`Project not found: ${params.slug}`);
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
