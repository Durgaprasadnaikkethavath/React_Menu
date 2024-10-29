// Menu.js
import React from "react";

const Menu = ({ closeMenu }) => {
  return (
    <div className="menu">
      <button className="close-button" onClick={closeMenu}>
        X
      </button>
      <ul className="menu-links">
        <li>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
        </li>
        <li>
          <a href="#services" onClick={closeMenu}>
            Services
          </a>
        </li>
        <li>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
