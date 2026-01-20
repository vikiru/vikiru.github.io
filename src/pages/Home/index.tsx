import Hero from '@/components/Hero';
import Layout from '@/components/Layout';

function HomePage() {
  return (
    <Layout
      description="Personal portfolio website of Visakan Kirubakaran, a software developer based in Ottawa, ON. Passionate about software and web development, website built using React, React Router, and TailwindCSS. "
      title="Visakan Kirubakaran | Home"
    >
      <Hero />
    </Layout>
  );
}
export default HomePage;
