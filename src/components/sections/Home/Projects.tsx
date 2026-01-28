import { FeaturedProjects } from '@/components/sections/Home/FeaturedProjects';
import { OtherProjects } from '@/components/sections/Home/OtherProjects';

export function Projects() {
  return (
    <section id="projects">
      <FeaturedProjects />
      <OtherProjects />
    </section>
  );
}
