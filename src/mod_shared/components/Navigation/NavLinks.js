import React, {useContext} from 'react';
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../common/context/auth-context";


const NavLinks = props => {
  const auth = useContext(AuthContext);

  return (
    <ul className="navbar-nav mr-auto">

      <li className="nav-item">
        <NavLink className="nav-link" to="/">Home</NavLink>
      </li>

      {auth.isLoggedIn && (
        <li className="nav-item">
          <NavLink className="nav-link" to="/profile">Profile</NavLink>
        </li>
      )}

      {!auth.isLoggedIn && (
        <React.Fragment>
          <li className="nav-item">
            <NavLink className={"nav-link"} to="/login">Login</NavLink>
          </li>
          <li className="nav-item">
          <NavLink className={"nav-link"} to="/register">Register</NavLink>
          </li>
        </React.Fragment>
      )}
      {auth.isLoggedIn && (
        <li className="nav-item">
          <NavLink className={"nav-link"} to="/login" onClick={auth.logout}>Logout</NavLink>
        </li>
      )}

    </ul>
  );
};

export default NavLinks;
