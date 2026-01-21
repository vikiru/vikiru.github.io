import { createFileRoute } from '@tanstack/react-router';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return (
    <Layout
      description="Personal portfolio website of Visakan Kirubakaran, a software developer based in Ottawa, ON. Passionate about software and web development, website built using React, React Router, and TailwindCSS. "
      title="Visakan Kirubakaran | Home"
    >
      <Hero />
    </Layout>
  );
}
