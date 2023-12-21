import React from "react";

function Footer() {
  return (
    <footer className="mt-2 ">
      <div>
        <p className="text-center font-heading font-thin text-white">
          <span>
            Visakan Kirubakaran &copy; {new Date().getFullYear()}. All rights
            reserved.
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
