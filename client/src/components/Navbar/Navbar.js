import React, { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Button } from "../Button/Button";
import { LoggedMenu } from "./LoggedMenu";
import { MenuItems } from "./MenuItems";
import NestedSearch from "./NestedSearch/NestedSearch";
import "./Navbar.css";
import MenuSearch from "./MenuSearch/MenuSearch";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [logged, setLogged] = useState(false);
  const [home, setHome] = useState(false)
  const menu = useRef();
  const search = useRef();
  const handleClick = () => {
    menu.current.classList.toggle('active')
    search.current.classList.toggle('active')
    clicked ? setClicked(false) : setClicked(true);
  };
  const location = useLocation()

  setLogged(false)

  useEffect(() => {
    if (location.pathname === '/') {
      setHome(true)
    } else {
      setHome(false)
    }
  },[location])

  if (!logged) {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          RiftStats
        </h1>
        {(!home) &&
            <div className="navbar-search">
            <NestedSearch />
          </div>
        }
        <div className="menu-icon" onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul ref={menu} className="nav-menu hidden">
          <div ref={search} key="search" className="nav-menu-search">
            <MenuSearch />
          </div>
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
        <div className="navbar-search">
            <NestedSearch />
        </div>
        <div className="menu-icon" onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul ref={menu} className="nav-menu hidden">
          <div ref={search} key="search" className="nav-menu-search">
            <MenuSearch />
          </div>
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
