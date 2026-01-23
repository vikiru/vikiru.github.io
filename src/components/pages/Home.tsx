import { About } from '@/components/home/About';
import { Contact } from '@/components/home/Contact';
import { Education } from '@/components/home/Education';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { Hero } from '@/components/home/Hero';
import { OtherProjects } from '@/components/home/OtherProjects';
import { Skills } from '@/components/home/Skills';
import Layout from '@/components/layout/Layout';

export default function HomePage() {
  return (
    <Layout>
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
