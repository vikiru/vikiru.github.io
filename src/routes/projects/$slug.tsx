import { createFileRoute, useParams } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import Layout from '@/components/layout/Layout';
import { ProjectShowcase } from '@/components/sections/ProjectShowcase';
import { projectData } from '@/data/projects';
import type { Project } from '@/types/Project';

export const Route = createFileRoute('/projects/$slug')({
  component: ProjectShowcasePage,
});

function ProjectShowcasePage() {
  const { slug } = useParams({ from: '/projects/$slug' });
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const found = projectData.projects.find(
      (p: Project) => p.slug.toLowerCase() === slug.toLowerCase(),
    );
    setProject(found || null);
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <Layout description="Loading project..." title="Loading...">
        <div className="container-custom py-20 text-center">
          <p className="text-muted-foreground">Loading project...</p>
        </div>
      </Layout>
    );
  }

  if (!project) {
    return (
      <Layout description="Project not found" title="Not Found">
        <div className="container-custom py-20 text-center">
          <p className="text-muted-foreground">Project not found</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout
      description={`Learn about ${project.name}, explore its goals, my accomplishments, and check out the project demo.`}
      title={`Visakan Kirubakaran | ${project.name}`}
    >
      <ProjectShowcase project={project} />
    </Layout>
  );
}
