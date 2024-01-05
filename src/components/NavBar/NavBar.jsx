import React, { useState } from "react";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import navData from "../../assets/data/nav";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <section
        id="small-navigation-menu"
        className="flex items-center justify-between bg-secondary lg:hidden dark:bg-darkSecondary"
      >
        <div className="px-2 lg:hidden">
          <h2 className="text-center font-cinzel tracking-widest text-primary xxs:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl dark:text-primary">
            <span className="text-primary  dark:text-primary">Visa</span>
            <span className="text-accent dark:text-darkAccent">kan</span>
          </h2>
        </div>

        <div
          id="small-screen-nav-toggler"
          className="py-2 pr-3 xs:block lg:hidden"
        >
          <button onClick={handleClick}>
            {!isOpen ? (
              <FontAwesomeIcon
                icon={faBars}
                className="font-primary pl-1 text-accent dark:text-darkAccent"
              />
            ) : (
              <FontAwesomeIcon
                icon={faX}
                className="font-primary pl-1 text-accent dark:text-darkAccent"
              />
            )}
          </button>
        </div>
      </section>

      {isOpen ? (
        <section className="block justify-center lg:hidden" id="nav-links">
          <h2 className="subheading-text bg-secondary py-2 uppercase tracking-widest text-primary hover:underline hover:decoration-accent xxs:text-center lg:text-2xl dark:bg-darkSecondary dark:text-primary dark:hover:decoration-darkAccent">
            <Link to="/" title="View my homepage" id="homepage-navbar-sm">
              Home
            </Link>
          </h2>

          <h2 className="subheading-text bg-secondary py-2 uppercase tracking-widest text-primary hover:underline hover:decoration-accent xxs:text-center lg:text-2xl dark:bg-darkSecondary dark:text-primary dark:hover:decoration-darkAccent">
            <Link to="/about" title="Read more about me" id="about-navbar-sm">
              About
            </Link>
          </h2>

          <h2 className="subheading-text bg-secondary py-2 uppercase tracking-widest text-primary hover:underline hover:decoration-accent xxs:text-center lg:text-2xl dark:bg-darkSecondary dark:text-primary dark:hover:decoration-darkAccent">
            <Link
              to="/education/courses"
              title="View my courses"
              id="courses-navbar-sm"
            >
              Courses
            </Link>
          </h2>

          <h2 className="subheading-text bg-secondary py-2 uppercase tracking-widest text-primary hover:underline hover:decoration-accent xxs:text-center lg:text-2xl dark:bg-darkSecondary dark:text-primary dark:hover:decoration-darkAccent">
            <Link to="/projects" title="View my work" id="projects-navbar-sm">
              Projects
            </Link>
          </h2>
        </section>
      ) : (
        <section
          id="navigation-menu"
          className="hidden bg-secondary py-4 lg:flex lg:justify-between dark:bg-darkSecondary"
        >
          <div className="lg:px-1 xl:px-4">
            <h2 className="text-center font-cinzel tracking-widest text-primary xxs:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl dark:text-primary">
              <span className="text-primary  dark:text-primary">Visa</span>
              <span className="text-accent dark:text-darkAccent">kan</span>
            </h2>
          </div>

          <section
            id="nav-links"
            className="flex justify-between space-x-8 px-2 pt-2 xl:pt-1"
          >
            {navData.map((nav) => (
              <Link
                key={nav.navTitle}
                to={nav.navLink}
                title={nav.navDesc}
                id={nav.navTitle.toLowerCase() + "-navbar-lg"}
                className="subheading-text uppercase tracking-widest text-primary hover:underline hover:decoration-accent xl:pt-2 dark:text-primary dark:hover:decoration-darkAccent"
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
