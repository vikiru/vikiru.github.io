import { Layout } from '@/components/layout/Layout';
import { About } from '@/components/sections/Home/About';
import { Contact } from '@/components/sections/Home/Contact';
import { Education } from '@/components/sections/Home/Education';
import { Hero } from '@/components/sections/Home/Hero';
import { Projects } from '@/components/sections/Home/Projects';
import { Skills } from '@/components/sections/Home/Skills';

export function HomePage() {
  return (
    <Layout>
      <div className="container-custom flex flex-col w-full mx-auto">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </div>
    </Layout>
  );
}
