import { createFileRoute } from '@tanstack/react-router';
import Layout from '@/components/layout/Layout';
import ShowcaseSection from '@/components/sections/ShowcaseSection';
import { projectData } from '@/data/projects';
import type { Project } from '@/types/Project';

export const Route = createFileRoute('/projects/$slug')({
  component: ProjectShowcase,
  loader: ({ params }) => {
    const slug = params.slug;
    if (!slug) {
      return { project: null, slug: null };
    }
    const project = projectData.projects.find(
      (p: Project) => p.slug.toLowerCase() === slug.toLowerCase(),
    );
    if (!project) {
      throw new Error(`Project not found: ${slug}`);
    }
    return { project, slug };
  },
});

function ProjectShowcase() {
  const data = Route.useLoaderData() as {
    project: Project | null;
    slug: string | null;
  };

  if (!data.project || !data.slug) {
    return (
      <Layout description="Loading project..." title="Loading...">
        <div className="container-custom py-20 text-center">
          <p className="text-muted-foreground">Loading project...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout
      description={`Learn about ${data.project.name}, explore its goals, my accomplishments, and check out the project demo.`}
      title={`Visakan Kirubakaran | ${data.project.name}`}
    >
      <ShowcaseSection project={data.project} />
    </Layout>
  );
}
