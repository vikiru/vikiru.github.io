import About from '~components/About';
import EducationContainer from '~components/EducationContainer';
import Layout from '~components/Layout';
import SkillsContainer from '~components/SkillsContainer';

function AboutPage() {
  return (
    <Layout
      description="Learn more about me, my education, and skills."
      title="Visakan Kirubakaran | About"
    >
      {/* About Section */}
      <About />
      <div className="my-4 border-t border-gray-300 lg:my-8 dark:border-dark-background-600" />

      {/* Education Section */}
      <EducationContainer />
      <div className="my-4 border-t border-gray-300 lg:my-8 dark:border-dark-background-600" />

      {/* Skills Section */}
      <SkillsContainer />
    </Layout>
  );
}

export default AboutPage;
