import React from 'react';
import MainHeader from "./MainHeader";
// import NavLinks from "./NavLinks";

import { useNavigate, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const MainNavigation = (props) => {
  const history = useNavigate();

  // TODO this can be set as global state since it won't change throughout
  const [username, setUsername] = useState("")

  // useEffect(() => {
  //   fetch("/api/auth/isUserAuth", {
  //     headers: {
  //       "x-access-token": localStorage.getItem("token")
  //     }
  //   })
  //     .then(res => res.json())
  //     .then(data => data.isLoggedIn ? setUsername(data.username) : null )
  // }, []);

  async function logout() {
    localStorage.removeItem("token")
    await history.push("/login")
  }

  const user_menu =
    username ?
        <React.Fragment>
          <li className="nav-item">
            <NavLink className="nav-link" to={"/u/" + username}>Profile</NavLink>
          </li>
          <li className="nav-item">
            <div className="nav-link" onClick={logout}>Logout</div>
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

  return (
    <MainHeader>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">

          <li className="nav-item">
            <NavLink className="nav-link" to="/">Home</NavLink>
          </li>

          {user_menu}

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
