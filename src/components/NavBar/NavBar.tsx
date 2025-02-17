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
                className="bg-secondary dark:bg-darkSecondary flex items-center justify-between lg:hidden"
                id="small-navigation-menu"
            >
                <div className="px-2 lg:hidden" id="logo">
                    <Link
                        className="text-primary dark:text-primary text-center font-cinzel tracking-widest xxs:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl"
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
                                className="font-primary text-accent dark:text-darkAccent pl-1"
                                icon={faBars}
                            />
                        ) : (
                            <FontAwesomeIcon
                                className="font-primary text-accent dark:text-darkAccent pl-1"
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
                    <h2 className="subheading-text bg-secondary text-primary hover:decoration-accent dark:bg-darkSecondary dark:text-primary dark:hover:decoration-darkAccent py-2 uppercase tracking-widest hover:underline xxs:text-center lg:text-2xl">
                        <Link
                            id="homepage-navbar-sm"
                            title="View my homepage"
                            to="/"
                        >
                            Home
                        </Link>
                    </h2>

                    <h2 className="subheading-text bg-secondary text-primary hover:decoration-accent dark:bg-darkSecondary dark:text-primary dark:hover:decoration-darkAccent py-2 uppercase tracking-widest hover:underline xxs:text-center lg:text-2xl">
                        <Link
                            id="about-navbar-sm"
                            title="Read more about me"
                            to="/about"
                        >
                            About
                        </Link>
                    </h2>

                    <h2 className="subheading-text bg-secondary text-primary hover:decoration-accent dark:bg-darkSecondary dark:text-primary dark:hover:decoration-darkAccent py-2 uppercase tracking-widest hover:underline xxs:text-center lg:text-2xl">
                        <Link
                            id="courses-navbar-sm"
                            title="View my courses"
                            to="/education/courses"
                        >
                            Courses
                        </Link>
                    </h2>

                    <h2 className="subheading-text bg-secondary text-primary hover:decoration-accent dark:bg-darkSecondary dark:text-primary dark:hover:decoration-darkAccent py-2 uppercase tracking-widest hover:underline xxs:text-center lg:text-2xl">
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
                    className="bg-secondary dark:bg-darkSecondary hidden py-4 lg:flex lg:justify-between"
                    id="navigation-menu"
                >
                    <div className="lg:px-3 xl:px-4" id="logo">
                        <Link
                            className="text-primary dark:text-primary text-center font-cinzel tracking-widest xxs:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 7xl:text-8xl"
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
                                className="subheading-text text-primary hover:decoration-accent dark:text-primary dark:hover:decoration-darkAccent uppercase tracking-widest hover:underline xl:pt-2"
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
