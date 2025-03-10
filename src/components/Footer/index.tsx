import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { navData } from '~assets/data/index';
import { FooterLogo } from '~components/index';

function Footer() {
    return (
        <footer className="mt-auto w-full bg-background-600 py-6 text-white 10xl:py-10">
            <div className="container mx-auto grid grid-cols-1 px-4 xs:gap-4 md:grid-cols-3 lg:gap-8">
                {/* Logo Section */}
                <FooterLogo />

                {/* Read More Section */}
                <section className="text-center md:text-left" id="read-more">
                    <h4 className="h4-text mb-3 font-heading font-semibold tracking-wide text-gray-400">
                        Read More
                    </h4>
                    <ul className="space-y-2">
                        {navData.map((item) => (
                            <li key={item.navTitle}>
                                <Link
                                    className="font-body text-clamp-nav text-gray-300 transition-all duration-300 hover:text-accent-500 hover:underline"
                                    target="_blank"
                                    title={item.navDesc}
                                    to={item.navLink}
                                >
                                    {item.navTitle}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Social Icons Section */}
                <section className="text-center md:text-left" id="social-icons">
                    <h4 className="h4-text mb-3 font-heading font-semibold tracking-wide text-gray-400">
                        Connect With Me
                    </h4>
                    <div className="flex items-center justify-center space-x-4 md:justify-start 10xl:space-x-8">
                        <a
                            href="https://github.com/vikiru"
                            rel="noopener noreferrer"
                            target="_blank"
                            title="View my GitHub profile"
                        >
                            <FontAwesomeIcon
                                className="text-clamp-icons transition-colors duration-300 hover:text-accent-500"
                                icon={faGithub}
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/viskirubakaran"
                            rel="noopener noreferrer"
                            target="_blank"
                            title="View my LinkedIn profile"
                        >
                            <FontAwesomeIcon
                                className="text-clamp-icons transition-colors duration-300 hover:text-accent-500"
                                icon={faLinkedin}
                            />
                        </a>
                        <Link
                            target="_blank"
                            title="Send me an email"
                            to="/contact"
                        >
                            <FontAwesomeIcon
                                className="text-clamp-icons transition-colors duration-300 hover:text-accent-500"
                                icon={faEnvelope}
                            />
                        </Link>
                    </div>
                </section>
            </div>

            {/* Copyright Section */}
            <section className="mt-8 text-center" id="copyright">
                <p
                    className="text-gray-400"
                    style={{ fontSize: 'clamp(0.9rem, 1.25vw, 4rem)' }}
                >
                    &copy; {new Date().getFullYear()} Visakan Kirubakaran. All
                    rights reserved.
                    <span className="mx-2">|</span>
                    <Link
                        className="transition duration-300 hover:text-accent-500 hover:underline"
                        title="View the sitemap"
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
