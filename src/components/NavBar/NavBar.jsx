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
      <section id="navigation-menu" className="bg-white py-4">
        <div className="flex justify-center">
          {navData.map((nav) => (
            <a key={nav} href={nav.navLink}>
              <h2 className="px-2 text-lg uppercase text-black hover:underline lg:text-2xl">
                {nav.navTitle}
              </h2>
            </a>
          ))}
        </div>
      </section>
    </nav>
  );
}

export default NavBar;
