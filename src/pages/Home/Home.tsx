import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import aboutData from '~assets/data/about';
import Footer from '~components/Footer/Footer';
import NavBar from '~components/NavBar/NavBar';

function HomePage() {
    return (
        <div className="flex h-screen w-screen snap-y flex-col overflow-x-hidden overflow-y-scroll scroll-smooth bg-primary scrollbar-thin scrollbar-track-primary scrollbar-thumb-accent lg:scrollbar dark:bg-darkPrimary dark:scrollbar-track-darkPrimary dark:scrollbar-thumb-darkAccent">
            <NavBar />

            {/* Main Content*/}
            <main className="p-10">
                <section>
                    {/* Hero Section */}
                    <section id="hero">
                        <h2 className="heading-text py-2 text-center dark:text-primary">
                            {aboutData.greeting}{' '}
                            <span className="text-accentSecondary dark:text-darkAccent">
                                {aboutData.fullName}
                            </span>
                        </h2>

                        {/* Profile Section - Profile Pic, Social Icons, and Location */}
                        <section
                            className="flex justify-center py-2"
                            id="profile"
                        >
                            <div className="flex justify-center rounded-full">
                                <img
                                    alt="GitHub Profile Pic"
                                    className="h-auto w-full rounded-full object-scale-down xxs:w-[180px] md:w-[260px] xl:w-[350px] 5xl:w-full"
                                    src={aboutData.profilePic}
                                    title="GitHub Profile Pic"
                                ></img>
                            </div>
                        </section>

                        <section
                            className="flex justify-center py-4"
                            id="location"
                        >
                            <span className="subheading-text text-secondary dark:text-primary">
                                {aboutData.location}
                            </span>
                        </section>

                        <section
                            className="flex justify-center space-x-2 py-2 xl:space-x-4"
                            id="social-icons"
                        >
                            <a
                                href="https://github.com/vikiru"
                                id="GitHub Profile Link - Mobile"
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
                                id="LinkedIn Link - Mobile"
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
                                id="Email Link - Mobile"
                                title="Send me an email"
                                to="/contact"
                            >
                                <FontAwesomeIcon
                                    className="social-icons"
                                    icon={faEnvelope}
                                />
                            </Link>
                        </section>

                        {/* Hero Body Text */}
                        <section>
                            <p className="body-text pt-2 dark:text-primary">
                                Welcome to my portfolio! I am a dedicated{' '}
                                <span className="font-semibold text-accentSecondary dark:text-darkAccent">
                                    {aboutData.title.toLowerCase()}
                                </span>{' '}
                                with a passion for software and web development.
                            </p>
                            <p className="body-text pt-2 dark:text-primary">
                                Continual learning is my driving force, and I
                                strive to apply my expanding knowledge to
                                meaningful projects.
                            </p>
                            <p className="body-text pt-2 dark:text-primary">
                                Feel free to{' '}
                                <span className="font-semibold text-accentSecondary dark:text-darkAccent">
                                    read more
                                </span>{' '}
                                about me,{' '}
                                <span className="font-semibold text-accentSecondary dark:text-darkAccent">
                                    view
                                </span>{' '}
                                some of my GitHub projects, or{' '}
                                <span className="font-semibold text-accentSecondary dark:text-darkAccent">
                                    contact me!
                                </span>
                            </p>
                        </section>
                    </section>

                    {/* Call to Action */}
                    <section
                        className="gap-3 py-4 xxs:space-y-2 lg:flex lg:space-y-0"
                        id="cta"
                    >
                        <div className="cta-btn">
                            <Link id="about-mobile" to="/about">
                                <h2 className="body-text m-auto py-2 text-center font-heading font-semibold text-secondary dark:text-primary">
                                    Read more about me
                                </h2>
                            </Link>
                        </div>

                        <div className="cta-btn">
                            <Link id="projects-mobile" to="/projects">
                                <h2 className="body-text m-auto py-2 text-center font-heading font-semibold text-secondary dark:text-primary">
                                    View my GitHub projects
                                </h2>
                            </Link>
                        </div>

                        <div className="cta-btn">
                            <Link
                                id="email-mobile"
                                rel="noopener noreferrer"
                                target="_top"
                                to="/contact"
                            >
                                <h2 className="body-text m-auto py-2 text-center font-heading font-semibold text-secondary dark:text-primary">
                                    Send me an email
                                </h2>
                            </Link>
                        </div>
                    </section>
                </section>
            </main>
            <Footer />
        </div>
    );
}
export default HomePage;
