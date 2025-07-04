import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
function Navbar() {
  return (
    <div className="navbar shadow-sm z-50 fixed top-0 w-full">
      <ThemeSwitcher />

      <div className="flex-1"></div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
