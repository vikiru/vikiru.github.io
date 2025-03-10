import { Layout, ShowcaseSection } from '~components/index';
import { Project } from '~types/index';

type ProjectShowcaseProps = {
    project: Project;
};

function ProjectShowcasePage({ project }: ProjectShowcaseProps) {
    return (
        <Layout>
            <ShowcaseSection project={project} />
        </Layout>
    );
}

export default ProjectShowcasePage;
