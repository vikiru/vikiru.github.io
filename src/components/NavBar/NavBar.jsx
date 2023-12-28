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
      <section
        id="navigation-menu"
        className="flex justify-between bg-secondary py-4"
      >
        <div className="mx-auto">
          <h2 className="font-cinzel tracking-widest text-primary xxs:text-lg md:text-3xl">
            <span className="text-primary">Visa</span>
            <span className="text-accent">kan</span>
          </h2>
        </div>
        <div className="flex justify-center">
          {navData.map((nav) => (
            <a key={nav} href={nav.navLink}>
              <h2 className="px-2 text-lg uppercase tracking-widest text-primary hover:underline hover:decoration-accent lg:text-2xl">
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
