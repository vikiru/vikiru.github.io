import { Link } from '@tanstack/react-router';
import {
  FaBars,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaXmark,
} from 'react-icons/fa6';
import NavLogo from '@/components/ui/NavLogo';
import navData from '@/data/nav';
import useNav from '@/hooks/useNav';

function NavBar() {
  const { isOpen, handleClick } = useNav();

  return (
    <nav className="bg-secondary dark:bg-secondary/20">
      <section
        className="flex items-center justify-between px-6 xs:py-2 md:px-10 9xl:py-4 10xl:py-8 11xl:py-12"
        id="main-nav"
      >
        <NavLogo />

        <div className="hidden gap-6 text-lg md:flex lg:text-xl 10xl:gap-10">
          {navData.map((item) => (
            <Link
              className="font-heading uppercase text-muted-foreground transition-colors hover:text-accent"
              key={item.navTitle}
              to={item.navLink}
            >
              {item.navTitle}
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <button aria-label="Toggle menu" onClick={handleClick} type="button">
            {isOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </section>

      <section
        className={`fixed right-0 top-0 h-full w-3/4 bg-secondary text-white transition-all duration-500 ease-in-out motion-reduce:transition-none md:hidden dark:bg-secondary/20 ${
          isOpen
            ? 'translate-x-0 motion-reduce:transition-none'
            : 'translate-x-full motion-reduce:transition-none'
        }`}
        id="mobile-nav"
      >
        <div className="absolute right-6 top-4">
          <button aria-label="Close menu" onClick={handleClick} type="button">
            <FaXmark />
          </button>
        </div>

        <section
          className="mt-8 flex flex-col items-center justify-center pt-4"
          id="mobile-nav-links"
        >
          {navData.map((item) => (
            <Link
              className="w-full px-6 py-3 text-center font-heading uppercase text-muted-foreground transition-colors hover:text-accent"
              key={item.navTitle}
              to={item.navLink}
            >
              {item.navTitle}
            </Link>
          ))}
        </section>

        <div className="my-4 border-t border-border dark:border-border/10"></div>

        <section id="social-icons">
          <h3 className="text-center font-heading uppercase text-muted-foreground">
            Connect with me
          </h3>

          <div className="flex justify-center gap-6 xs:py-2 lg:py-4">
            <a
              className="text-muted-foreground transition-colors hover:text-accent"
              href="https://github.com/vikiru"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaGithub />
            </a>
            <a
              className="text-muted-foreground transition-colors hover:text-accent"
              href="https://www.linkedin.com/in/viskirubakaran"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <Link
              className="text-muted-foreground transition-colors hover:text-accent"
              to="/contact"
            >
              <FaEnvelope />
            </Link>
          </div>
        </section>

        <section className="text-center" id="copyright">
          <p className="text-muted-foreground 3xl:text-lg 8xl:text-2xl">
            &copy; {new Date().getFullYear()} Visakan Kirubakaran. All rights
            reserved.
            <span className="mx-2">|</span>
            <Link
              className="transition-colors duration-300 hover:text-accent hover:underline motion-reduce:transition-none"
              to="/sitemap"
            >
              Sitemap
            </Link>
          </p>
        </section>
      </section>
    </nav>
  );
}

export default NavBar;
