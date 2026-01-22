import { Link } from '@tanstack/react-router';
import { Button } from '@/lib/components/ui/button';

function CTA() {
  return (
    <section
      className="mt-2 flex gap-4 pb-8 xs:flex-col md:flex-row lg:justify-start"
      id="cta"
    >
      <Button asChild size="lg" variant="default">
        <Link hash="about" to="/">
          Read more about me
        </Link>
      </Button>
      <Button asChild size="lg" variant="secondary">
        <Link hash="projects" to="/">
          View my work
        </Link>
      </Button>
      <Button asChild size="lg" variant="accent">
        <Link hash="contact" to="/">
          Contact me
        </Link>
      </Button>
    </section>
  );
}

export default CTA;
