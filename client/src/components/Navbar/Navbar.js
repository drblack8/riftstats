import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../Button/Button";
import { LoggedMenu } from "./LoggedMenu";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [logged, setLogged] = useState(false);
  const menu = useRef();
  const handleClick = () => {
    menu.current.classList.toggle('active')
    clicked ? setClicked(false) : setClicked(true);
  };

  if (!logged) {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          RiftStats
        </h1>
        <div className="menu-icon" onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul ref={menu} className="nav-menu hidden">
          {MenuItems.map((item, idx) => {
            return (
              <li key={idx}>
                <NavLink className={item.cName} to={item.url}>
                  {item.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <NavLink to='/login'><Button>Login</Button></NavLink>
      </nav>
    );
  } else {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          RiftStats
        </h1>
        <div className="menu-icon" onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          {LoggedMenu.map((item, idx) => {
            return (
              <li key={idx}>
                <NavLink className={item.cName} to={item.url}>
                  {item.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className="btn-container">
        <div className="shine"></div>
        <NavLink to='/'><Button>Logout</Button></NavLink>
        </div>
      </nav>
    );
  }
};

export default Navbar;
