import { Link } from '@tanstack/react-router';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa6';

import { Logo } from '@/components/ui/Logo';

export function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-border bg-background">
      <div className="w-full px-6 py-8 lg:py-12">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8 3xl:gap-10 4xl:gap-12">
          <div className="flex flex-col items-start text-left">
            <Logo className="mb-4 transition-colors duration-200 hover:text-primary" variant="full" />
            <p className="body-base leading-relaxed text-muted-foreground">
              Software developer with a passion for software and web development, committed to learning and contributing
              to meaningful projects.
            </p>
          </div>

          <div className="flex flex-col items-start lg:items-end">
            <section aria-labelledby="connect-heading">
              <h3
                className="mb-4 font-heading text-h5 font-semibold tracking-wider text-foreground uppercase"
                id="connect-heading"
              >
                Connect
              </h3>
              <div className="flex gap-4">
                <a
                  aria-label="Visit GitHub profile"
                  className="bg-card/50 rounded-xl border border-border/50 p-3 text-muted-foreground backdrop-blur-sm transition-colors duration-200 hover:border-primary/50 hover:text-primary focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:outline-none motion-reduce:transition-none lg:p-5"
                  href="https://github.com/vikiru"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaGithub className="size-icon-sm" />
                </a>
                <a
                  aria-label="Visit LinkedIn profile"
                  className="bg-card/50 rounded-xl border border-border/50 p-3 text-muted-foreground backdrop-blur-sm transition-colors duration-200 hover:border-primary/50 hover:text-primary focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:outline-none motion-reduce:transition-none lg:p-5"
                  href="https://linkedin.com/in/viskirubakaran"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaLinkedin className="size-icon-sm" />
                </a>
                <Link
                  aria-label="Send an email"
                  className="bg-card/50 rounded-xl border border-border/50 p-3 text-muted-foreground backdrop-blur-sm transition-colors duration-200 hover:border-primary/50 hover:text-primary focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:outline-none motion-reduce:transition-none lg:p-5"
                  hash="contact"
                  to="/"
                >
                  <FaEnvelope className="size-icon-sm" />
                </Link>
              </div>
            </section>
          </div>
        </div>

        <div className="mt-4 pt-6">
          <div className="flex w-full flex-col items-start gap-4 md:flex-row lg:items-end lg:justify-end">
            <p className="body-base text-muted-foreground">
              &copy; {new Date().getFullYear()} Visakan Kirubakaran. All rights reserved.
            </p>
          </div>
          <nav aria-label="Footer" className="my-4 flex w-full items-start justify-start lg:items-end lg:justify-end">
            <Link
              aria-label="View site sitemap"
              className="body-base text-left text-muted-foreground transition-colors duration-200 hover:text-primary hover:underline focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:outline-none motion-reduce:transition-none"
              to="/sitemap"
            >
              Sitemap
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
