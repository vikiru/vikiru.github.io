import React from "react";

function NavBar() {
  return (
    <nav className="mb-2 flex justify-around bg-blue-400 py-4">
      <div className="space-x-8">
        <a href="#" className="nav-text">
          Home
        </a>
        <a href="#projects" className="nav-text">
          Projects
        </a>
        <a href="#contact" className="nav-text">
          Contact
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
