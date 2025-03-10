import {
    About,
    EducationContainer,
    Layout,
    SkillsContainer,
} from '~components/index';

function AboutPage() {
    return (
        <Layout>
            {/* About Section */}
            <About />
            <div className="my-8 border-t border-gray-300" />

            {/* Education Section */}
            <EducationContainer />
            <div className="my-8 border-t border-gray-300" />

            {/* Skills Section */}
            <SkillsContainer />
        </Layout>
    );
}

export default AboutPage;
