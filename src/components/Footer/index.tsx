import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { FooterLogo } from '~components/index';
import { navData } from '~data/index';

function Footer() {
    return (
        <footer className="mt-auto w-full bg-light-background-600 py-6 10xl:py-10 dark:bg-dark-background-800">
            <div className="container mx-auto grid grid-cols-1 px-4 xs:gap-4 md:grid-cols-3 lg:gap-8">
                {/* Logo Section */}
                <FooterLogo />

                {/* Read More Section */}
                <section className="text-center md:text-left" id="read-more">
                    <h3 className="h3-text mb-3 font-heading font-semibold tracking-wide text-light-text-300 dark:text-dark-text-600">
                        Read More
                    </h3>
                    <ul className="space-y-2">
                        {navData.map((item) => (
                            <li key={item.navTitle}>
                                <Link className="footer-link" to={item.navLink}>
                                    {item.navTitle}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Social Icons Section */}
                <section className="text-center md:text-left" id="social-icons">
                    <h3 className="h3-text mb-3 font-heading font-semibold tracking-wide text-light-text-300 dark:text-dark-text-600">
                        Connect With Me
                    </h3>
                    <div className="flex items-center justify-center space-x-4 md:justify-start 10xl:space-x-8">
                        <a
                            href="https://github.com/vikiru"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <FontAwesomeIcon
                                className="social-icons"
                                icon={faGithub}
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/viskirubakaran"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <FontAwesomeIcon
                                className="social-icons"
                                icon={faLinkedin}
                            />
                        </a>
                        <Link target="_blank" to="/contact">
                            <FontAwesomeIcon
                                className="social-icons"
                                icon={faEnvelope}
                            />
                        </Link>
                    </div>
                </section>
            </div>

            {/* Copyright Section */}
            <section className="text-center xs:mt-4 lg:mt-6" id="copyright">
                <p
                    className="text-light-text-400 dark:text-dark-text-500"
                    style={{ fontSize: 'clamp(0.9rem, 1.25vw, 4rem)' }}
                >
                    &copy; {new Date().getFullYear()} Visakan Kirubakaran. All
                    rights reserved.
                    <span className="mx-2">|</span>
                    <Link
                        className="transition-colors duration-300 hover:text-light-accent-500 hover:underline motion-reduce:transition-none dark:hover:text-dark-accent-500"
                        to="/sitemap"
                    >
                        Sitemap
                    </Link>
                </p>
            </section>
        </footer>
    );
}

export default Footer;
