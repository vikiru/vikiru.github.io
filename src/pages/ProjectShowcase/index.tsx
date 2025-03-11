import { Layout, ShowcaseSection } from '~components/index';
import { Project } from '~types/index';

type ProjectShowcaseProps = {
    project: Project;
};

function ProjectShowcasePage({ project }: ProjectShowcaseProps) {
    return (
        <Layout
            description={`Learn about ${project.name}, explore its goals, my accomplishments, and check out the project demo.`}
            title={`Visakan Kirubakaran | ${project.name}`}
        >
            <ShowcaseSection project={project} />
        </Layout>
    );
}

export default ProjectShowcasePage;
