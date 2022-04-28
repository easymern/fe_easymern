import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

// import AuthService from "./services/auth.service";
import { ProvideAuth } from "./services/auth.service";

import EventBus from "./common/EventBus";

import MainNavigation from "./mod_shared/components/Navigation/MainNavigation";
import Home from "./mod_home/pages/Home";
import Login from "./mod_login/components/Login";
import Register from "./mod_login/components/Register";

// TODO pick it up here with some magical hooks https://usehooks.com/
function App() {
  // // Establish state
  // const [currentUser, setCurrentUser] = useState(undefined);
  // const [username, setUsername] = useState(undefined)
  // const [showModerator, setShowModerator] = useState(false);
  // const [showAdmin, setShowAdmin] = useState(false);
  //
  // useEffect( () => {
  //   const user =  AuthService.getCurrentUser();
  //
  //   if (user) {
  //     setCurrentUser(user);
  //     setShowModerator(user.roles.includes("ROLE_MODERATOR"));
  //     setShowAdmin(user.roles.includes("ROLE_ADMIN"));
  //   }
  //
  //   EventBus.on("logout", () => {
  //     logout();
  //   });
  //
  //   return () => {
  //     EventBus.remove("logout")
  //   };
  //
  // }, []);
  //
  // const logout = () => {
  //   AuthService.logout();
  //   setShowAdmin(false);
  //   setShowModerator(false);
  //   setCurrentUser(undefined);
  // }

  return (

      <Router>
        <ProvideAuth>
        <MainNavigation username="manual"/>

        {/*<div className="App">*/}
        <div className="container-fluid">
          <div className="row">
            <div className="col content">

                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" exact element={<Login />} />
                  <Route path="/register" exact element={<Register />} />
                  {/*<Route path="/u/:userId" exact element={<Home />} />*/}
                {/*  <Route path="/" exact element={<Home />} />*/}
                  {/*<Route path="/users" element={<Users />} />*/}
                  {/*<Route path="/clubs" element={<AllClubs />} />*/}
                  {/*<Route path="/new/club" element={<NewClub />} />*/}
                  {/*<Route path="/new/syndicate" element={<NewClub />} />*/}
                  {/*<Route path="/new/ticket" element={<NewClub />} />*/}
                  {/*<Route path="/:userId/clubs" exact element={<UserClubs />} />*/}
                </Routes>

            </div>
          </div>
          <div className="footer">
            <p>Created by @jayArghArgh</p>
          </div>

        </div>
        {/*</div>*/}
        </ProvideAuth>
      </Router>

  );
}

export default App;
