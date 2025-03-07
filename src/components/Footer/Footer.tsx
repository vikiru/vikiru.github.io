import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { navData } from '~assets/data/index';

function Footer() {
    return (
        <footer className="mt-auto w-full bg-gray-800 py-6 text-white 10xl:py-10">
            <div className="container mx-auto grid grid-cols-1 px-4 xs:gap-4 md:grid-cols-3 lg:gap-8">
                {/* Logo Section */}
                <div className="text-center md:text-left">
                    <h2
                        className="text-center font-cinzel font-semibold tracking-widest text-primary"
                        style={{ fontSize: 'clamp(2rem, 3vw, 9rem)' }}
                    >
                        Visa<span className="text-accent">kan</span>
                    </h2>
                </div>

                {/* Read More Section */}
                <div className="text-center md:text-left">
                    <h3
                        className="mb-3 font-heading font-semibold tracking-wide text-gray-400"
                        style={{ fontSize: 'clamp(1rem, 1.5vw, 9rem)' }}
                    >
                        Read More
                    </h3>
                    <ul className="space-y-2">
                        {navData.map((item) => (
                            <li key={item.navTitle}>
                                <Link
                                    className="font-body text-white transition-colors duration-300 hover:text-accent hover:underline"
                                    style={{
                                        fontSize: 'clamp(1rem, 1.25vw, 4rem)',
                                    }}
                                    target="_blank"
                                    to={item.navLink}
                                >
                                    {item.navTitle}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Social Icons Section */}
                <div className="text-center md:text-left">
                    <h3
                        className="mb-3 font-heading font-semibold tracking-wide text-gray-400"
                        style={{ fontSize: 'clamp(1rem, 1.5vw, 9rem)' }}
                    >
                        Connect With Me
                    </h3>
                    <div className="flex items-center justify-center space-x-4 md:justify-start 10xl:space-x-8">
                        <a
                            href="https://github.com/vikiru"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <FontAwesomeIcon
                                className="transition-colors duration-300 hover:text-accent"
                                icon={faGithub}
                                style={{
                                    fontSize: 'clamp(1rem, 2vw, 6rem)',
                                }}
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/viskirubakaran"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <FontAwesomeIcon
                                className="transition-colors duration-300 hover:text-accent"
                                icon={faLinkedin}
                                style={{
                                    fontSize: 'clamp(1rem, 2vw, 6rem)',
                                }}
                            />
                        </a>
                        <Link target="_blank" to="/contact">
                            <FontAwesomeIcon
                                className="transition-colors duration-300 hover:text-accent"
                                icon={faEnvelope}
                                style={{
                                    fontSize: 'clamp(1rem, 2vw, 6rem)',
                                }}
                            />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="mt-8 text-center">
                <p
                    className="text-gray-400"
                    style={{ fontSize: 'clamp(0.8rem, 1.25vw, 4rem)' }}
                >
                    &copy; {new Date().getFullYear()} Visakan Kirubakaran. All
                    rights reserved.
                    <span className="mx-2">|</span>
                    <Link
                        className="transition duration-300 hover:text-accent hover:underline"
                        to="/sitemap"
                    >
                        Sitemap
                    </Link>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
