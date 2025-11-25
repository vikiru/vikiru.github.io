import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars, faEnvelope, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { NavLogo } from '~components/index';
import { navData } from '~data/index';
import { useNav } from '~hooks/index';

function NavBar() {
  const { isOpen, handleClick } = useNav();

  return (
    <nav className="bg-light-background-600 dark:bg-dark-background-800">
      <section
        className="flex items-center justify-between px-6 xs:py-2 md:px-10 9xl:py-4 10xl:py-8 11xl:py-12"
        id="main-nav"
      >
        {/* Logo Section */}
        <NavLogo />

        {/* Navbar Links (Desktop) - Visible on md and up */}
        <div className="hidden gap-6 xs:text-lg md:flex lg:text-clamp-nav 10xl:gap-10">
          {navData.map((item) => (
            <Link className="nav-link" key={item.navTitle} to={item.navLink}>
              {item.navTitle}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button aria-label="Toggle menu" onClick={handleClick}>
            <FontAwesomeIcon
              className="text-2xl text-light-text-300 dark:text-dark-text-600"
              icon={isOpen ? faX : faBars}
            />
          </button>
        </div>
      </section>

      {/* Mobile Menu - Right to Left Slide, Visible on mobile only */}
      <section
        className={`fixed right-0 top-0 h-full w-3/4 bg-light-background-600 text-white transition-all duration-500 ease-in-out motion-reduce:transition-none md:hidden dark:bg-dark-background-800 ${
          isOpen
            ? 'translate-x-0 motion-reduce:transition-none'
            : 'translate-x-full motion-reduce:transition-none'
        }`}
        id="mobile-nav"
      >
        {/* Close Button */}
        <div className="absolute right-6 top-4">
          <button aria-label="Close menu" onClick={handleClick}>
            <FontAwesomeIcon
              className="text-2xl text-light-text-300 dark:text-dark-text-600"
              icon={faX}
            />
          </button>
        </div>

        {/* Mobile Menu Links */}
        <section
          className="mt-8 flex flex-col items-center justify-center pt-4"
          id="mobile-nav-links"
        >
          {navData.map((item) => (
            <Link
              className="nav-link w-full px-6 py-3 text-center"
              key={item.navTitle}
              to={item.navLink}
            >
              {item.navTitle}
            </Link>
          ))}
        </section>

        {/* Divider */}
        <div className="my-4 border-t border-gray-600 dark:border-dark-background-600"></div>

        {/* Social Icons */}
        <section id="social-icons">
          <h3 className="h4-text text-center uppercase text-light-text-400 dark:text-dark-text-500">
            Connect with me
          </h3>

          <div className="flex justify-center space-x-6 xs:py-2 lg:py-4">
            <a
              className="social-icons"
              href="https://github.com/vikiru"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              className="social-icons"
              href="https://www.linkedin.com/in/viskirubakaran"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <Link className="social-icons" to="/contact">
              <FontAwesomeIcon icon={faEnvelope} />
            </Link>
          </div>
        </section>

        {/* Copyright */}
        <section className="text-center" id="copyright">
          <p
            className="text-light-text-400 dark:text-dark-text-500"
            style={{ fontSize: 'clamp(0.9rem, 1.25vw, 4rem)' }}
          >
            &copy; {new Date().getFullYear()} Visakan Kirubakaran. All rights
            reserved.
            <span className="mx-2">|</span>
            <Link
              className="transition-colors duration-300 hover:text-light-accent-500 hover:underline motion-reduce:transition-none dark:hover:text-dark-accent-500"
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
