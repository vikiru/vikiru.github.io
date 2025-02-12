import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import navData from '~assets/data/nav';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav>
            <section
                className="flex items-center justify-between bg-secondary lg:hidden dark:bg-darkSecondary"
                id="small-navigation-menu"
            >
                <div className="px-2 lg:hidden" id="logo">
                    <Link
                        className="text-center font-cinzel tracking-widest text-primary xxs:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl dark:text-primary"
                        title="View my homepage"
                        to="/"
                    >
                        <span className="text-primary  dark:text-primary">
                            V
                        </span>
                        <span className="text-accent dark:text-darkAccent">
                            K
                        </span>
                    </Link>
                </div>

                <div
                    className="py-2 pr-3 xs:block lg:hidden"
                    id="small-screen-nav-toggler"
                >
                    <button
                        aria-label="Navigation Menu Mobile"
                        id="nav-menu"
                        onClick={handleClick}
                    >
                        {!isOpen ? (
                            <FontAwesomeIcon
                                className="font-primary pl-1 text-accent dark:text-darkAccent"
                                icon={faBars}
                            />
                        ) : (
                            <FontAwesomeIcon
                                className="font-primary pl-1 text-accent dark:text-darkAccent"
                                icon={faX}
                            />
                        )}
                    </button>
                </div>
            </section>

            {isOpen ? (
                <section
                    className="block justify-center lg:hidden"
                    id="nav-links"
                >
                    <h2 className="subheading-text bg-secondary py-2 uppercase tracking-widest text-primary hover:underline hover:decoration-accent xxs:text-center lg:text-2xl dark:bg-darkSecondary dark:text-primary dark:hover:decoration-darkAccent">
                        <Link
                            id="homepage-navbar-sm"
                            title="View my homepage"
                            to="/"
                        >
                            Home
                        </Link>
                    </h2>

                    <h2 className="subheading-text bg-secondary py-2 uppercase tracking-widest text-primary hover:underline hover:decoration-accent xxs:text-center lg:text-2xl dark:bg-darkSecondary dark:text-primary dark:hover:decoration-darkAccent">
                        <Link
                            id="about-navbar-sm"
                            title="Read more about me"
                            to="/about"
                        >
                            About
                        </Link>
                    </h2>

                    <h2 className="subheading-text bg-secondary py-2 uppercase tracking-widest text-primary hover:underline hover:decoration-accent xxs:text-center lg:text-2xl dark:bg-darkSecondary dark:text-primary dark:hover:decoration-darkAccent">
                        <Link
                            id="courses-navbar-sm"
                            title="View my courses"
                            to="/education/courses"
                        >
                            Courses
                        </Link>
                    </h2>

                    <h2 className="subheading-text bg-secondary py-2 uppercase tracking-widest text-primary hover:underline hover:decoration-accent xxs:text-center lg:text-2xl dark:bg-darkSecondary dark:text-primary dark:hover:decoration-darkAccent">
                        <Link
                            id="projects-navbar-sm"
                            title="View my work"
                            to="/projects"
                        >
                            Projects
                        </Link>
                    </h2>
                </section>
            ) : (
                <section
                    className="hidden bg-secondary py-4 lg:flex lg:justify-between dark:bg-darkSecondary"
                    id="navigation-menu"
                >
                    <div className="lg:px-3 xl:px-4" id="logo">
                        <Link
                            className="text-center font-cinzel tracking-widest text-primary xxs:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 7xl:text-8xl dark:text-primary"
                            title="View my homepage"
                            to="/"
                        >
                            <span className="text-primary  dark:text-primary">
                                V
                            </span>
                            <span className="text-accent dark:text-darkAccent">
                                K
                            </span>
                        </Link>
                    </div>

                    <section
                        className="flex justify-between space-x-8 px-2 pt-0 lg:pt-2 3xl:pt-4"
                        id="nav-links"
                    >
                        {navData.map((nav) => (
                            <Link
                                className="subheading-text uppercase tracking-widest text-primary hover:underline hover:decoration-accent xl:pt-2 dark:text-primary dark:hover:decoration-darkAccent"
                                id={nav.navTitle.toLowerCase() + '-navbar-lg'}
                                key={nav.navTitle}
                                title={nav.navDesc}
                                to={nav.navLink}
                            >
                                {nav.navTitle}
                            </Link>
                        ))}
                    </section>
                </section>
            )}
        </nav>
    );
}

export default NavBar;
