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
import { navData } from '@/data/nav';
import { useNav } from '@/hooks/useNav';
import type { NavigationItem } from '@/types/NavigationItem';

function NavLink({ item }: { item: NavigationItem }) {
  return (
    <Link
      className="font-heading text-foreground transition-colors hover:text-primary hover:underline motion-reduce:transition-none text-nav-lg"
      hash={item.navHash}
      to={item.navLink}
    >
      {item.navTitle}
    </Link>
  );
}

function MobileNavLink({ item }: { item: NavigationItem }) {
  return (
    <Link
      className="w-full px-6 py-3 text-center text-muted-foreground transition-colors hover:text-primary hover:bg-muted/50 motion-reduce:transition-none text-nav-lg"
      hash={item.navHash}
      to={item.navLink}
    >
      {item.navTitle}
    </Link>
  );
}

export function NavBar() {
  const { isOpen, handleClick } = useNav();

  return (
    <nav className="bg-background sticky top-0 z-50 border-b border-border">
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-3 rounded"
        href="#main-content"
      >
        Skip to main content
      </a>
      <section
        className="flex items-center justify-between px-6 py-3 md:px-10"
        id="main-nav"
      >
        <Logo />

        <div className="xs:hidden md:flex gap-6 items-center">
          {navData.map((item) => (
            <NavLink item={item} key={item.navTitle} />
          ))}
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            onClick={handleClick}
            type="button"
          >
            {isOpen ? (
              <FaXmark aria-hidden="true" className="size-icon-base" />
            ) : (
              <FaBars aria-hidden="true" className="size-icon-base" />
            )}
          </button>
        </div>
      </section>

      <section
        className={`fixed right-0 top-0 h-full xs:w-[65%] sm:w-1/2 bg-background/95 backdrop-blur-sm border-l border-border transition-all duration-500 ease-in-out motion-reduce:transition-none md:hidden z-50 ${
          isOpen
            ? 'translate-x-0 motion-reduce:transition-none'
            : 'translate-x-full motion-reduce:transition-none'
        }`}
        id="mobile-nav"
      >
        <div className="flex flex-col items-center justify-center h-full">
          <button
            aria-label="Close menu"
            className="absolute top-4 right-5 p-3"
            onClick={handleClick}
            type="button"
          >
            <FaXmark aria-hidden="true" className="size-icon-base" />
          </button>

          <div className="-mt-24 flex flex-col items-center gap-2 w-full">
            {navData.map((item) => (
              <MobileNavLink item={item} key={item.navTitle} />
            ))}
          </div>

          <div className="text-center mt-4">
            <h3 className="body-small text-muted-foreground uppercase tracking-wider font-semibold mb-4 border-b border-border pb-2">
              Connect with me
            </h3>
            <div className="flex justify-center gap-4">
              <a
                aria-label="GitHub"
                className="p-3 xs:p-4 lg:p-5 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl text-muted-foreground hover:text-accent hover:border-accent/50 transition-colors motion-reduce:transition-none"
                href="https://github.com/vikiru"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaGithub className="size-icon-base" />
              </a>
              <a
                aria-label="LinkedIn"
                className="p-3 xs:p-4 lg:p-5 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl text-muted-foreground hover:text-accent hover:border-accent/50 transition-colors motion-reduce:transition-none"
                href="https://linkedin.com/in/viskirubakaran"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaLinkedin className="size-icon-base" />
              </a>
              <Link
                aria-label="Email"
                className="p-3 xs:p-4 lg:p-5 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl text-muted-foreground hover:text-accent hover:border-accent/50 transition-colors motion-reduce:transition-none"
                hash="contact"
                to="/"
              >
                <FaEnvelope className="size-icon-base" />
              </Link>
            </div>
          </div>

          <div
            className="absolute bottom-6 left-0 right-0 text-center px-4"
            id="copyright"
          >
            <p className="body-small text-muted-foreground">
              &copy; {new Date().getFullYear()} Visakan Kirubakaran
            </p>
            <Link
              className="body-small text-muted-foreground hover:text-primary transition-colors inline-block mt-1 motion-reduce:transition-none"
              to="/sitemap"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </section>
    </nav>
  );
}
