import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? "active btn btn-danger" : null}`}>
        Home
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? "active btn btn-danger" : null}`}>
        About
      </NavLink>
    </div>
  );
};

export default Navbar;
