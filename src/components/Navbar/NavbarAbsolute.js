import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";

const NavbarAbsolute = () => {
  return (
    <nav className="navbar-absolute-container">
      <div className="navbar-inner">
        <div className="logo-link">
          <Link to="/">Palmetto Salon</Link>
        </div>
        <div className="navbar-links">
          <li>
            <NavLink exact to="/" activeClassName="active-navlink">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active-navlink">
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" activeClassName="active-navlink">
              PORTFOLIO
            </NavLink>
          </li>
          <li>
            <NavLink to="/appointments" activeClassName="active-navlink">
              APPOINTMENTS
            </NavLink>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default NavbarAbsolute;
