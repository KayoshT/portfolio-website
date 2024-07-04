import React from "react";

const Nav = () => {
  return (
    <nav className="p-4 flex items-center justify-center">
      <ul className="flex space-x-20 text-xl font-medium">
        <li>
          <a href="#about" className="text-midnightgreen">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="text-midnightgreen">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="text-midnightgreen">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
