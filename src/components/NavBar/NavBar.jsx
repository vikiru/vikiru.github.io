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
        id="navigation-menu"
        className="flex items-center justify-between bg-secondary dark:bg-darkPrimary"
      >
        <div className="px-2">
          <h2 className="font-cinzel tracking-widest text-primary xxs:text-lg lg:text-2xl">
            <span className="text-primary">Visa</span>
            <span className="text-accent">kan</span>
          </h2>
        </div>
        <div id="small-screen-nav-toggler" className="px-2 xs:block xl:hidden">
          <button onClick={handleClick}>
            {!isOpen ? (
              <FontAwesomeIcon
                icon={faBars}
                className="font-primary py-2 pl-1 text-accent dark:text-darkAccent"
              />
            ) : (
              <FontAwesomeIcon
                icon={faX}
                className="font-primary py-2 pl-1 text-accent dark:text-darkAccent"
              />
            )}
          </button>
        </div>
      </section>
      {isOpen ? (
        <section className="block justify-center xl:hidden" id="nav-links">
          <Link to="/">
            <h2 className="subheading-text bg-secondary px-2 uppercase tracking-widest text-primary hover:underline hover:decoration-accent xxs:text-center lg:text-2xl dark:bg-darkPrimary dark:text-darkSecondary dark:hover:decoration-darkAccent">
              Home
            </h2>
          </Link>
          <Link to="/about">
            <h2 className="subheading-text bg-secondary px-2 uppercase tracking-widest text-primary hover:underline hover:decoration-accent xxs:text-center lg:text-2xl dark:bg-darkPrimary dark:text-darkSecondary dark:hover:decoration-darkAccent">
              About
            </h2>
          </Link>
          <Link to="/education/courses">
            <h2 className="subheading-text bg-secondary px-2 uppercase tracking-widest text-primary hover:underline hover:decoration-accent xxs:text-center lg:text-2xl dark:bg-darkPrimary dark:text-darkSecondary dark:hover:decoration-darkAccent">
              Courses
            </h2>
          </Link>
          <Link to="/projects">
            <h2 className="subheading-text bg-secondary px-2 uppercase tracking-widest text-primary hover:underline hover:decoration-accent xxs:text-center lg:text-2xl dark:bg-darkPrimary dark:text-darkSecondary dark:hover:decoration-darkAccent">
              Projects
            </h2>
          </Link>
        </section>
      ) : (
        <section
          id="navigation-menu"
          className="bg-secondary py-4 xxs:hidden xl:flex xl:justify-between"
        >
          <div className="px-4">
            <h2 className="font-cinzel tracking-widest text-primary xxs:text-lg lg:text-2xl">
              <span className="text-primary">Visa</span>
              <span className="text-accent">kan</span>
            </h2>
          </div>
          <section id="nav-links" className="flex justify-center">
            {navData.map((nav) => (
              <Link key={nav.navTitle} to={nav.navLink}>
                <h2 className="subheading-text px-2 uppercase tracking-widest text-primary hover:underline hover:decoration-accent lg:text-xl dark:hover:decoration-darkAccent">
                  {nav.navTitle}
                </h2>
              </Link>
            ))}
          </section>
        </section>
      )}
    </nav>
  );
}

export default NavBar;
