import React from "react";
import navData from "../../assets/data/nav";

// import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavBar() {
  // const [isOpen, setIsOpen] = useState(false);
  /** const handleClick = () => {
    setIsOpen(!isOpen);
  };
 */

  return (
    <nav>
      <section id="navigation-menu" className="mx-2 mt-1 bg-black py-4">
        <div className="flex justify-center">
          {navData.map((nav) => (
            <a
              key={nav}
              href={nav.navLink}
              className="px-2 text-center font-heading uppercase text-white hover:underline"
            >
              {nav.navTitle}
            </a>
          ))}
        </div>
      </section>
    </nav>
  );
}

export default NavBar;
