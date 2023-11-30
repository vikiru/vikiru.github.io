import "./NavBar.css";

import React, { useState } from "react";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="secondary-colour mb-2 ml-2 mr-2 snap-center shadow-xl"
      id="mainNav"
    >
      <div className="ml-2 mr-2 flex items-center justify-between">
        <section id="small-screen-nav-toggler" className="xs:block lg:hidden">
          <button onClick={handleClick}>
            {!isOpen ? (
              <FontAwesomeIcon
                icon={faBars}
                className="font-primary pb-1 pl-1 pt-1"
              />
            ) : (
              <FontAwesomeIcon icon={faX} className="font-primary pl-1 pt-1" />
            )}
          </button>
        </section>
      </div>
      {isOpen ? (
        <section className="block justify-center px-4 pb-3 pt-2">
          <a href="#" className="nav-text block text-center">
            Home
          </a>
          <a href="#about" className="nav-text block text-center">
            About
          </a>
          <a href="#education" className="nav-text block text-center">
            Education
          </a>
          <a href="#skills" className="nav-text block text-center">
            Skills
          </a>
          <a href="#projects" className="nav-text block text-center">
            Projects
          </a>
          <a href="#contact" className="nav-text block text-center">
            Contact
          </a>
        </section>
      ) : (
        <section className="px-4 pb-3 pt-2 xxs:hidden lg:flex lg:items-center lg:justify-center">
          <a href="#" className="nav-text lg:ease-in-out-anim block lg:ml-2">
            Home
          </a>
          <a
            href="#about"
            className="nav-text lg:ease-in-out-anim block lg:ml-2"
          >
            About
          </a>
          <a
            href="#education"
            className="nav-text lg:ease-in-out-anim block lg:ml-2"
          >
            Education
          </a>
          <a
            href="#skills"
            className="nav-text lg:ease-in-out-anim block lg:ml-2"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="nav-text lg:ease-in-out-anim block lg:ml-2"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="nav-text lg:ease-in-out-anim block lg:ml-2"
          >
            Contact
          </a>
        </section>
      )}
    </nav>
  );
}

export default NavBar;
