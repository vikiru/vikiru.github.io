import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { navData } from '~assets/data/index';
import { NavLogo } from '~components/index';
import { useNav } from '~hooks/index';

function NavBar() {
    const { isOpen, handleClick } = useNav();

    return (
        <nav className="bg-background-600 text-white">
            <section
                className="flex items-center justify-between px-6 md:px-10 9xl:py-4 10xl:py-8 11xl:py-12"
                id="main-nav"
            >
                {/* Logo Section */}
                <NavLogo />

                {/* Navbar Links (Desktop) - Visible on md and up */}
                <div className="hidden gap-6 text-clamp-nav md:flex 10xl:gap-10">
                    {navData.map((item) => (
                        <Link
                            className="font-heading uppercase text-gray-300 transition-all duration-300 hover:text-accent-500 hover:underline"
                            key={item.navTitle}
                            title={item.navDesc}
                            to={item.navLink}
                        >
                            {item.navTitle}
                        </Link>
                    ))}
                </div>

                {/* Mobile Toggle Button */}
                <div className="md:hidden">
                    <button aria-label="Toggle menu" onClick={handleClick}>
                        <FontAwesomeIcon
                            className="text-2xl text-gray-300"
                            icon={isOpen ? faX : faBars}
                        />
                    </button>
                </div>
            </section>

            {/* Mobile Menu - Right to Left Slide, Visible on mobile only */}
            <section
                className={`fixed right-0 top-0 h-full w-3/4 bg-gray-800 text-white transition-all duration-500 ease-in-out md:hidden ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
                id="mobile-nav"
            >
                {/* Close Button */}
                <div className="absolute right-6 top-4">
                    <button aria-label="Close menu" onClick={handleClick}>
                        <FontAwesomeIcon
                            className="text-2xl text-gray-300"
                            icon={faX}
                        />
                    </button>
                </div>

                {/* Mobile Menu Links */}
                <div className="mt-8 flex flex-col items-center justify-center py-4">
                    {navData.map((item) => (
                        <Link
                            className="hover:text-accent w-full px-6 py-3 text-center font-heading uppercase text-gray-300 transition-colors duration-300"
                            key={item.navTitle}
                            title={item.navDesc}
                            to={item.navLink}
                        >
                            {item.navTitle}
                        </Link>
                    ))}
                </div>

                {/* Divider */}
                <div className="my-4 border-t border-gray-600"></div>

                {/* Social Icons */}
                <div className="flex justify-center space-x-6 xs:py-2 lg:py-4">
                    <a
                        className="hover:text-accent text-clamp-icons text-gray-300 transition-colors duration-300"
                        href="https://github.com/vikiru"
                        rel="noopener noreferrer"
                        target="_blank"
                        title="GitHub"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a
                        className="hover:text-accent text-clamp-icons text-gray-300 transition-colors duration-300"
                        href="https://www.linkedin.com/in/viskirubakaran"
                        rel="noopener noreferrer"
                        target="_blank"
                        title="LinkedIn"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <Link
                        className="hover:text-accent text-clamp-icons text-gray-300 transition-colors duration-300"
                        title="Contact"
                        to="/contact"
                    >
                        <FontAwesomeIcon icon={faEnvelope} />
                    </Link>
                </div>

                <div className="text-center">
                    <p
                        className="text-gray-400"
                        style={{ fontSize: 'clamp(0.9rem, 1.25vw, 4rem)' }}
                    >
                        &copy; {new Date().getFullYear()} Visakan Kirubakaran.
                        All rights reserved.
                        <span className="mx-2">|</span>
                        <Link
                            className="transition duration-300 hover:text-accent-500 hover:underline"
                            to="/sitemap"
                        >
                            Sitemap
                        </Link>
                    </p>
                </div>
            </section>
        </nav>
    );
}

export default NavBar;
