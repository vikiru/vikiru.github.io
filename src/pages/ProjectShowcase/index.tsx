import { memo } from 'react';
import Layout from '~components/Layout';
import ShowcaseSection from '~components/ShowcaseSection';
import type { Project } from '~types/Project';

type ProjectShowcaseProps = {
  project: Project;
};

const ProjectShowcasePage = memo(function ProjectShowcasePage({
  project,
}: ProjectShowcaseProps) {
  return (
    <Layout
      description={`Learn about ${project.name}, explore its goals, my accomplishments, and check out the project demo.`}
      title={`Visakan Kirubakaran | ${project.name}`}
    >
      <ShowcaseSection project={project} />
    </Layout>
  );
});

export default ProjectShowcasePage;
