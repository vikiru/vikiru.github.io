import {
    About,
    EducationContainer,
    Layout,
    SkillsContainer,
} from '~components/index';

function AboutPage() {
    return (
        <Layout
            description="Learn more about me, my education, and skills."
            title="Visakan Kirubakaran | About"
        >
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
