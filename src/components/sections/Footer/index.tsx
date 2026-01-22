import { Link } from '@tanstack/react-router';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa6';
import FooterLogo from '@/components/ui/FooterLogo';
import navData from '@/data/nav';

function FooterLink({ item }: { item: (typeof navData)[0] }) {
  if (item.navHash) {
    return (
      <Link
        className="text-sm text-muted-foreground hover:text-primary transition-colors motion-reduce:transition-none"
        hash={item.navHash}
        to={item.navLink}
      >
        {item.navTitle}
      </Link>
    );
  }

  return (
    <Link
      className="text-sm text-muted-foreground hover:text-primary transition-colors motion-reduce:transition-none"
      to={item.navLink}
    >
      {item.navTitle}
    </Link>
  );
}

function Footer() {
  return (
    <footer className="mt-auto w-full bg-secondary/50 border-t border-border py-8">
      <div className="container mx-auto grid grid-cols-1 px-6 md:grid-cols-3 gap-8">
        <div className="flex justify-center md:justify-start">
          <FooterLogo />
        </div>

        <section className="text-center md:text-left" id="read-more">
          <h3 className="text-sm font-heading font-semibold text-muted-foreground mb-4">
            Read More
          </h3>
          <div className="flex flex-col gap-2 md:items-start items-center">
            {navData.map((item) => (
              <FooterLink item={item} key={item.navTitle} />
            ))}
          </div>
        </section>

        <section className="text-center md:text-left" id="social-icons">
          <h3 className="text-sm font-heading font-semibold text-muted-foreground mb-4">
            Connect With Me
          </h3>
          <div className="flex items-center justify-center gap-3 md:justify-start">
            <a
              aria-label="GitHub"
              className="p-2 text-muted-foreground hover:text-accent transition-colors rounded-md motion-reduce:transition-none"
              href="https://github.com/vikiru"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              aria-label="LinkedIn"
              className="p-2 text-muted-foreground hover:text-accent transition-colors rounded-md motion-reduce:transition-none"
              href="https://linkedin.com/in/viskirubakaran"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
            <Link
              aria-label="Email"
              className="p-2 text-muted-foreground hover:text-accent transition-colors rounded-md motion-reduce:transition-none"
              to="/contact"
            >
              <FaEnvelope className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>

      <section
        className="text-center mt-8 pt-6 border-t border-border/50"
        id="copyright"
      >
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Visakan Kirubakaran. All rights
          reserved.
        </p>
        <Link
          className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block mt-1 motion-reduce:transition-none"
          to="/sitemap"
        >
          Sitemap
        </Link>
      </section>
    </footer>
  );
}

export default Footer;
