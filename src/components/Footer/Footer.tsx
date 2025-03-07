import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { navData } from '~assets/data/index';

function Footer() {
    return (
        <footer className="mt-auto w-full bg-gray-800 py-6 text-white">
            <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-3">
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
                                    to={item.navLink}
                                    target="_blank"
                                    className="font-body text-white transition-colors duration-300 hover:text-accent hover:underline"
                                    style={{
                                        fontSize: 'clamp(0.8rem, 1.25vw, 4rem)',
                                    }}
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
                    <div className="flex items-center justify-center space-x-4 md:justify-start">
                        <a
                            href="https://github.com/vikiru"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faGithub}
                                className="transition-colors duration-300 hover:text-accent"
                                style={{
                                    fontSize: 'clamp(0.8rem, 2vw, 4rem)',
                                }}
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/viskirubakaran"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                className="text-2xl transition-colors duration-300 hover:text-accent"
                                style={{
                                    fontSize: 'clamp(0.8rem, 2vw, 4rem)',
                                }}
                            />
                        </a>
                        <Link to="/contact" target="_blank">
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                className="text-2xl transition-colors duration-300 hover:text-accent"
                                style={{
                                    fontSize: 'clamp(0.8rem, 2vw, 4rem)',
                                }}
                            />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="mt-8 text-center">
                <p className="text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} Visakan Kirubakaran. All
                    rights reserved.
                    <span className="mx-2">|</span>
                    <Link
                        to="/sitemap"
                        className="transition duration-300 hover:text-accent hover:underline"
                    >
                        Sitemap
                    </Link>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
