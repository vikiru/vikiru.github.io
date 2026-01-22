import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { LuArrowRight } from 'react-icons/lu';
import { Button } from '@/lib/components/ui/button';
import { cn } from '@/lib/utils';

interface HeroProps {
  className?: string;
}

export function Hero({ className }: HeroProps) {
  return (
    <section className={cn('relative pt-32 pb-20 px-6 text-center', className)}>
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-h2 md:text-h1 md:whitespace-nowrap font-bold tracking-tight text-foreground font-heading">
          Hello, my name is{' '}
          <span className="text-primary">Visakan Kirubakaran</span>
        </h1>
        <div className="space-y-3 max-w-7xl">
          <p className="text-p text-foreground text-left leading-relaxed">
            I am a dedicated software developer with a passion for software and
            web development. By utilizing my knowledge and skills, I aim to
            challenge myself while contributing to meaningful projects.
            <br />
            <br />
            Whether it's developing new applications for desktop, mobile, or the
            web, integrating and designing APIs, implementing extensive testing
            to ensure code quality and maintainability, writing user-friendly
            documentation, or anything in between, I am eager to learn and grow
            as a developer.
            <br />
            <br />
            Feel free to read more about who I am, view my work, or contact me!
          </p>
        </div>
        <div className="flex flex-wrap gap-4 pt-4 justify-center">
          <Button size="xl">
            <a className="inline-flex items-center gap-2" href="#projects">
              View Work
              <LuArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button size="xl" variant="outline">
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
