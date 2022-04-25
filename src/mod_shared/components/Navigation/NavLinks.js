import React from 'react';
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <ul className="navbar-nav mr-auto">

      <li className="nav-item">
        <NavLink className="nav-link" to="/">Home</NavLink>
      </li>

      <li className="nav-item">
        <NavLink end className="nav-link" to="/profile">Profile</NavLink>
      </li>

      <li className="nav-item">
        <NavLink end className="nav-link" to="/login">login</NavLink>
      </li>

      <li className="nav-item">
        <NavLink end className="nav-link" to="/register">Register</NavLink>
      </li>

    </ul>
  );
};

export default NavLinks;
