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
          <Link
            to="/"
            className="subheading-text bg-secondary py-2 uppercase tracking-widest text-primary hover:underline hover:decoration-accent xxs:text-center lg:text-2xl dark:bg-darkSecondary dark:text-primary dark:hover:decoration-darkAccent"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="subheading-text bg-secondary py-2 uppercase tracking-widest text-primary hover:underline hover:decoration-accent xxs:text-center lg:text-2xl dark:bg-darkSecondary dark:text-primary dark:hover:decoration-darkAccent"
          >
            About
          </Link>

          <Link
            to="/education/courses"
            className="subheading-text bg-secondary py-2 uppercase tracking-widest text-primary hover:underline hover:decoration-accent xxs:text-center lg:text-2xl dark:bg-darkSecondary dark:text-primary dark:hover:decoration-darkAccent"
          >
            Courses
          </Link>

          <Link
            to="/projects"
            className="subheading-text bg-secondary py-2 uppercase tracking-widest text-primary hover:underline hover:decoration-accent xxs:text-center lg:text-2xl dark:bg-darkSecondary dark:text-primary dark:hover:decoration-darkAccent"
          >
            Projects
          </Link>
        </section>
      ) : (
        <section
          id="navigation-menu"
          className="bg-secondary py-4 xxs:hidden lg:flex lg:justify-between dark:bg-darkSecondary"
        >
          <div className="lg:px-1 xl:px-4">
            <h2 className="text-center font-cinzel tracking-widest text-primary xxs:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl dark:text-primary">
              <span className="text-primary  dark:text-primary">Visa</span>
              <span className="text-accent dark:text-darkAccent">kan</span>
            </h2>
          </div>

          <section
            id="nav-links"
            className="flex justify-between space-x-3 px-2 pt-2 xl:pt-1"
          >
            {navData.map((nav) => (
              <Link
                key={nav.navTitle}
                to={nav.navLink}
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
