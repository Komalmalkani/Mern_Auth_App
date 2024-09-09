import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="logo-brand">
            <a href="/">Komal Malkani</a>
          </div>
          <nav>
            <ul>
                <li>
                    <NavLink to="/">{Home}</NavLink>
                    <NavLink to="/about">{About}</NavLink>
                    <NavLink to="/services">{Service}</NavLink>
                    <NavLink to="/contact">{Contact}</NavLink>
                    <NavLink to="/register">{Register}</NavLink>
                    <NavLink to="/login">{Login}</NavLink>
                </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
