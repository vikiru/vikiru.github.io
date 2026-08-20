import { LuArrowRight, LuMail } from 'react-icons/lu';

import { Button } from '@/lib/components/ui/button';
import { cn } from '@/lib/utils';

interface HeroProps {
  className?: string;
}

export function Hero({ className }: HeroProps) {
  return (
    <section className={cn('relative scroll-mt-20 px-6 pt-16 pb-20 text-center 2xl:pt-32', className)} id="hero">
      <div className="flex flex-col items-center gap-8">
        <h1 className="font-heading text-h3 font-bold tracking-tight text-balance text-foreground sm:text-h2 lg:text-h1 xl:whitespace-nowrap">
          Hello, my name is <span className="text-primary">Visakan Kirubakaran</span>
        </h1>
        <div className="max-w-[--container-measure] space-y-3">
          <p className="body-large text-left leading-relaxed text-foreground">
            I am a dedicated software developer with a passion for software and web development. By utilizing my
            knowledge and skills, I aim to challenge myself while contributing to meaningful projects.
          </p>
          <p className="body-large text-left leading-relaxed text-foreground">
            Whether it's developing new applications for desktop, mobile, or web, integrating and designing APIs,
            implementing extensive testing to ensure code quality and maintainability, writing user-friendly
            documentation, or anything in between, I am eager to learn and grow as a developer.
          </p>
          <p className="body-large text-left leading-relaxed text-foreground">
            Feel free to read more about who I am, view my work, or contact me!
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Button asChild size="2xl">
            <a
              className="body-large inline-flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              href="#projects"
            >
              View Work
              <LuArrowRight aria-hidden="true" className="size-icon-sm" />
            </a>
          </Button>
          <Button asChild size="2xl" variant="outline">
            <a
              className="body-large inline-flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              href="#contact"
            >
              Contact Me
              <LuMail aria-hidden="true" className="size-icon-sm" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
