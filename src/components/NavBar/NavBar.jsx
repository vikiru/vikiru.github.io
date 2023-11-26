import React, { useState } from "react";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-400">
      <div className="flex items-center justify-between">
        <div className="xxs:block lg:hidden">
          <button onClick={handleClick}>
            {!isOpen ? (
              <FontAwesomeIcon icon={faBars} className="text-white" />
            ) : (
              <FontAwesomeIcon icon={faX} className="text-white" />
            )}
          </button>
        </div>
      </div>
      {isOpen ? (
        <div className="block px-4 pb-3 pt-2">
          <a href="#" className="nav-text block">
            Home
          </a>
          <a href="#education" className="nav-text block">
            Education
          </a>
          <a href="#skills" className="nav-text block">
            Skills
          </a>
          <a href="#projects" className="nav-text block">
            Projects
          </a>
          <a href="#contact" className="nav-text block">
            Contact
          </a>
        </div>
      ) : (
        <div className="px-4 pb-3 pt-2 xxs:hidden lg:flex lg:items-center lg:justify-center">
          <a href="#" className="nav-text block">
            Home
          </a>
          <a href="#education" className="nav-text block lg:ml-2">
            Education
          </a>
          <a href="#skills" className="nav-text block lg:ml-2">
            Skills
          </a>
          <a href="#projects" className="nav-text block lg:ml-2">
            Projects
          </a>
          <a href="#contact" className="nav-text block lg:ml-2">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
