import React, {useContext} from 'react';
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";


const NavLinks = props => {
  const auth = useContext(AuthContext);

  return (
    <ul className="navbar-nav mr-auto">

      <li className="nav-item">
        <NavLink className="nav-link" to="/">Home</NavLink>
      </li>

      {auth.isLoggedIn && (
        <li className="nav-item">
          <NavLink end className="nav-link" to="/profile">Profile</NavLink>
        </li>
      )}

      {!auth.isLoggedIn && (
        <li className="nav-item">
          <NavLink className={"nav-link"} to="/login">login</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li className="nav-item">
          <button className={"nav-link"} onClick={auth.logout}>LOGOUT</button>
        </li>
      )}

    </ul>
  );
};

export default NavLinks;
