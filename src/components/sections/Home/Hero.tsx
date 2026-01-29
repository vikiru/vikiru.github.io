import { LuArrowRight } from 'react-icons/lu';
import { Button } from '@/lib/components/ui/button';
import { cn } from '@/lib/utils';

interface HeroProps {
  className?: string;
}

export function Hero({ className }: HeroProps) {
  return (
    <section
      className={cn(
        'relative xs:pt-16 2xl:pt-32 pb-20 px-6 text-center scroll-mt-20',
        className,
      )}
      id="hero"
    >
      <div className="flex flex-col items-center gap-8">
        <h1 className="xs:text-h3 sm:text-h2 text-balance lg:text-h1 xl:whitespace-nowrap font-bold tracking-tight text-foreground font-heading">
          Hello, my name is{' '}
          <span className="text-primary">Visakan Kirubakaran</span>
        </h1>
        <div className="space-y-3 max-w-8xl">
          <p className="body-large text-foreground text-left leading-relaxed">
            I am a dedicated software developer with a passion for software and
            web development. By utilizing my knowledge and skills, I aim to
            challenge myself while contributing to meaningful projects.
          </p>
          <p className="body-large text-foreground text-left leading-relaxed">
            Whether it's developing new applications for desktop, mobile, or
            web, integrating and designing APIs, implementing extensive testing
            to ensure code quality and maintainability, writing user-friendly
            documentation, or anything in between, I am eager to learn and grow
            as a developer.
          </p>
          <p className="body-large text-foreground text-left leading-relaxed">
            Feel free to read more about who I am, view my work, or contact me!
          </p>
        </div>
        <div className="flex flex-wrap gap-4 pt-4 justify-center">
          <Button asChild size="xl">
            <a
              className="inline-flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              href="#projects"
            >
              View Work
              <LuArrowRight aria-hidden="true" className="size-icon-sm" />
            </a>
          </Button>
          <Button asChild size="xl" variant="outline">
            <a
              className="focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              href="#contact"
            >
              Contact Me
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
