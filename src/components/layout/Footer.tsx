import { Link } from '@tanstack/react-router';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa6';
import { Logo } from '@/components/ui/Logo';

export function Footer() {
  return (
    <footer className="mt-auto w-full bg-background border-t border-border">
      <div className="px-6 py-8 lg:py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 3xl:grid-cols-2 4xl:grid-cols-3 gap-6 lg:gap-8 3xl:gap-10 4xl:gap-12">
          <div className="flex flex-col items-start text-left">
            <Logo
              className="mb-4 hover:text-primary transition-colors duration-200"
              variant="full"
            />
            <p className="text-muted-foreground body-base leading-relaxed">
              Software developer with a passion for software and web
              development, committed to learning and contributing to meaningful
              projects.
            </p>
          </div>

          <div className="flex flex-col items-start lg:items-end">
            <section aria-labelledby="connect-heading">
              <h3
                className="text-h5 font-heading font-semibold text-foreground mb-4 uppercase tracking-wider"
                id="connect-heading"
              >
                Connect
              </h3>
              <div className="flex gap-4">
                <a
                  aria-label="Visit GitHub profile"
                  className="p-3 xs:p-4 lg:p-5 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl text-muted-foreground hover:text-accent hover:border-accent/50 transition-colors duration-200 motion-reduce:transition-none focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2"
                  href="https://github.com/vikiru"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaGithub className="size-icon-sm" />
                </a>
                <a
                  aria-label="Visit LinkedIn profile"
                  className="p-3 xs:p-4 lg:p-5 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl text-muted-foreground hover:text-accent hover:border-accent/50 transition-colors duration-200 motion-reduce:transition-none focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2"
                  href="https://linkedin.com/in/viskirubakaran"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaLinkedin className="size-icon-sm" />
                </a>
                <Link
                  aria-label="Send an email"
                  className="p-3 xs:p-4 lg:p-5 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl text-muted-foreground hover:text-accent hover:border-accent/50 transition-colors duration-200 motion-reduce:transition-none focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2"
                  hash="contact"
                  to="/"
                >
                  <FaEnvelope className="size-icon-sm" />
                </Link>
              </div>
            </section>
          </div>
        </div>

        <div className="mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="body-small text-muted-foreground">
              &copy; {new Date().getFullYear()} Visakan Kirubakaran. All rights
              reserved.
            </p>
            <nav>
              <Link
                aria-label="View site sitemap"
                className="body-small text-muted-foreground hover:text-primary hover:underline transition-colors duration-200 motion-reduce:transition-none focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
                to="/sitemap"
              >
                Sitemap
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
