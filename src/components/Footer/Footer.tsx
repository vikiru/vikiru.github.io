import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { navData } from '~assets/data/index';

function Footer() {
    return (
        <footer className="mt-auto w-full">
            <div className="bg-secondary px-1 xxs:flex xxs:flex-col md:grid md:grid-cols-2 dark:bg-darkSecondary">
                {/*  Logo */}
                <section
                    className="mx-auto py-2 md:col-span-2 lg:pt-4"
                    id="logo"
                >
                    <Link
                        className="text-center font-cinzel tracking-widest text-primary xxs:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl dark:text-primary"
                        title="View my homepage"
                        to="/"
                    >
                        <span className="text-primary  dark:text-primary">
                            Visa
                        </span>
                        <span className="text-accent dark:text-darkAccent">
                            kan
                        </span>
                    </Link>
                </section>

                {/* Footer Navigation */}
                <div className="sm:grid sm:grid-cols-2 md:col-span-2">
                    <section className="mx-auto" id="footer-navigation">
                        <h2 className="heading-text text-center uppercase tracking-wide text-primary dark:text-primary">
                            Read more
                        </h2>
                        {navData.map((navItem) => (
                            <div
                                className="mx-auto flex justify-center p-2"
                                key={navItem.navTitle}
                            >
                                <Link
                                    className="
                    subheading-text
                    text-center
                    uppercase
                    text-primary
                    decoration-accent
                    hover:underline
                    dark:text-primary
                    dark:decoration-darkAccent"
                                    id={navItem.navDesc}
                                    title={navItem.navDesc}
                                    to={navItem.navLink}
                                >
                                    {navItem.navTitle}
                                </Link>
                            </div>
                        ))}
                    </section>

                    {/* Footer Contact Section */}
                    <section
                        className="xxs:mx-auto lg:px-4 xl:mx-0"
                        id="contact"
                    >
                        <h2 className="heading-text text-center uppercase tracking-wide text-primary dark:text-primary">
                            Connect with me
                        </h2>

                        <div>
                            <h2 className="subheading-text pt-2 text-center text-primary lg:py-2 dark:text-primary">
                                Ottawa, ON
                            </h2>

                            <div
                                className="flex justify-center space-x-2 pt-1 xl:space-x-4"
                                id="social-icons"
                            >
                                <a
                                    href="https://github.com/vikiru"
                                    id="GitHub Profile Link - Footer"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    title="View my GitHub"
                                >
                                    <FontAwesomeIcon
                                        className="social-icons"
                                        icon={faGithub}
                                    />
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/viskirubakaran/"
                                    id="LinkedIn Link - Footer"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    title="View my LinkedIn"
                                >
                                    <FontAwesomeIcon
                                        className="social-icons"
                                        icon={faLinkedin}
                                    />
                                </a>

                                <Link
                                    id="Email Link - Footer"
                                    rel="noopener noreferrer"
                                    target="_top"
                                    title="Send me an email"
                                    to="/contact"
                                >
                                    <FontAwesomeIcon
                                        className="social-icons"
                                        icon={faEnvelope}
                                    />
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* Copyright Section */}
            <section
                className="bg-secondary dark:bg-darkSecondary"
                id="copyright"
            >
                <div className="mx-auto flex flex-col space-y-2 py-2">
                    <p className="body-text text-center font-thin text-primary dark:text-primary">
                        &copy; {new Date().getFullYear()} Visakan Kirubakaran.
                        All rights reserved.
                    </p>
                </div>
                <div>
                    <Link
                        id="Sitemap"
                        rel="noopener noreferrer"
                        target="_blank"
                        title="View the sitemap for this website"
                        to="/sitemap"
                    >
                        <p className="body-text text-center text-primary decoration-accent hover:underline dark:text-primary dark:decoration-darkAccent">
                            Sitemap
                        </p>
                    </Link>
                </div>
            </section>
        </footer>
    );
}

export default Footer;
