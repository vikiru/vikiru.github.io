import { Link } from '@tanstack/react-router';
import {
  FaBars,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaXmark,
} from 'react-icons/fa6';
import { ThemeToggle } from '@/components/layout/ThemeToggle';
import { Logo } from '@/components/ui/Logo';
import navData from '@/data/nav';
import useNav from '@/hooks/useNav';

function NavLink({ item }: { item: (typeof navData)[0] }) {
  if (item.navHash) {
    return (
      <Link
        className="font-heading text-muted-foreground transition-colors hover:text-primary motion-reduce:transition-none"
        hash={item.navHash}
        to={item.navLink}
      >
        {item.navTitle}
      </Link>
    );
  }

  return (
    <Link
      className="font-heading text-muted-foreground transition-colors hover:text-primary motion-reduce:transition-none"
      to={item.navLink}
    >
      {item.navTitle}
    </Link>
  );
}

function MobileNavLink({ item }: { item: (typeof navData)[0] }) {
  if (item.navHash) {
    return (
      <Link
        className="w-full px-6 py-3 text-center body-base text-muted-foreground transition-colors hover:text-primary hover:bg-muted/50 motion-reduce:transition-none"
        hash={item.navHash}
        to={item.navLink}
      >
        {item.navTitle}
      </Link>
    );
  }

  return (
    <Link
      className="w-full px-6 py-3 text-center body-base text-muted-foreground transition-colors hover:text-primary hover:bg-muted/50 motion-reduce:transition-none"
      to={item.navLink}
    >
      {item.navTitle}
    </Link>
  );
}

function NavBar() {
  const { isOpen, handleClick } = useNav();

  return (
    <nav className="bg-background sticky top-0 z-50 border-b border-border">
      <section
        className="flex items-center justify-between px-6 py-3 md:px-10"
        id="main-nav"
      >
        <Logo />

        <div className="hidden gap-6 text-sm md:flex lg:text-base items-center">
          {navData.map((item) => (
            <NavLink item={item} key={item.navTitle} />
          ))}
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            onClick={handleClick}
            type="button"
          >
            {isOpen ? (
              <FaXmark className="h-5 w-5" />
            ) : (
              <FaBars className="h-5 w-5" />
            )}
          </button>
        </div>
      </section>

      <section
        className={`fixed right-0 top-0 h-full w-3/4 bg-background/95 backdrop-blur-sm border-l border-border transition-transform duration-300 md:hidden z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        id="mobile-nav"
      >
        <div className="absolute right-4 top-4">
          <button aria-label="Close menu" onClick={handleClick} type="button">
            <FaXmark className="h-6 w-6" />
          </button>
        </div>

        <section
          className="mt-16 flex flex-col items-center justify-center"
          id="mobile-nav-links"
        >
          {navData.map((item) => (
            <MobileNavLink item={item} key={item.navTitle} />
          ))}
        </section>

        <section className="mt-8" id="social-icons">
          <h3 className="text-center font-heading text-sm text-muted-foreground mb-4">
            Connect with me
          </h3>

          <div className="flex justify-center gap-4">
            <a
              aria-label="GitHub"
              className="p-2 rounded-full text-muted-foreground transition-colors hover:text-primary hover:bg-muted motion-reduce:transition-none"
              href="https://github.com/vikiru"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              aria-label="LinkedIn"
              className="p-2 rounded-full text-muted-foreground transition-colors hover:text-primary hover:bg-muted motion-reduce:transition-none"
              href="https://linkedin.com/in/viskirubakaran"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
            <Link
              aria-label="Email"
              className="p-2 rounded-full text-muted-foreground transition-colors hover:text-primary hover:bg-muted motion-reduce:transition-none"
              hash="contact"
              to="/"
            >
              <FaEnvelope className="h-5 w-5" />
            </Link>
          </div>
        </section>

        <section
          className="absolute bottom-6 left-0 right-0 text-center px-4"
          id="copyright"
        >
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Visakan Kirubakaran
          </p>
          <Link
            className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block mt-1 motion-reduce:transition-none"
            to="/sitemap"
          >
            Sitemap
          </Link>
        </section>
      </section>
    </nav>
  );
}

export default NavBar;
