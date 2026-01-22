import Layout from '@/components/layout/Layout';
import { About } from './About';
import { Contact } from './Contact';
import { Education } from './Education';
import { FeaturedProjects } from './FeaturedProjects';
import { Hero } from './Hero';
import { OtherProjects } from './OtherProjects';
import { Skills } from './Skills';

export default function HomePage() {
  return (
    <Layout
      description="Portfolio of Visakan Kirubakaran - Software Developer"
      title="Visakan Kirubakaran | Portfolio"
    >
      <Hero />
      <About />
      <Skills />
      <Education />
      <FeaturedProjects />
      <OtherProjects />
      <Contact />
    </Layout>
  );
}
