import React from 'react';
import MainHeader from "./MainHeader";
// import NavLinks from "./NavLinks";

import { useNavigate, NavLink } from "react-router-dom";
// import { useEffect, useState } from "react";
// import EventBus from "../../../common/EventBus";
// import AuthService from "../../../services/auth.service";
import { useAuth } from "../../../services/auth.service";

const MainNavigation = (props) => {
  const { user, logout } = useAuth();
  console.log("username: ", user)
  // const logout = () => {
  //   AuthService.logout();
  // }

  return (
    <MainHeader>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">

          <li className="nav-item">
            <NavLink className="nav-link" to="/">Home</NavLink>
          </li>


          {user ?
            <React.Fragment>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/u/" + "insertUname"}>Profile</NavLink>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={logout}>
                  Logout dude
                </a>
              </li>
            </React.Fragment>
            :
            <React.Fragment>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/login"}>Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/register"}>Register</NavLink>
              </li>
            </React.Fragment>
          }
        </ul>

        {/*<NavLinks sendNav={sendNav} />*/}
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </MainHeader>
  );
};

export default MainNavigation;
