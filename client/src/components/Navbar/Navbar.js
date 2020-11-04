import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
      setClicked(true)
  }

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">
        RiftStats<i className="fab fa-react"></i>
      </h1>
      <div className="menu-icon" onClick={handleClick}>
          <i className={clicked ? "fas fa-times": "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, idx) => {
          return (
            <li key={idx}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
