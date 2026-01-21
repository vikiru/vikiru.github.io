import { Link } from '@tanstack/react-router';
import { Button } from '@/lib/components/ui/button';

export default function CTA() {
  return (
    <section
      className="mt-2 flex gap-4 pb-8 xs:flex-col md:flex-row lg:justify-start"
      id="cta"
    >
      <Button asChild size="lg" variant="default">
        <Link to="/about">Read more about me</Link>
      </Button>
      <Button asChild size="lg" variant="secondary">
        <Link to="/projects">View my work</Link>
      </Button>
      <Button asChild size="lg" variant="accent">
        <Link to="/contact">Contact me</Link>
      </Button>
    </section>
  );
}
