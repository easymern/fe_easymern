import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
  // Switch
} from "react-router-dom";


import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Home from "./mod_home/pages/Home";
import Login from "./mod_login/components/Login";
import Register from "./mod_login/components/Register";
import Footer from "./shared/components/Footer";

import { AuthContext } from "./shared/context/auth-context";
import { useAuth } from "./shared/hooks/auth-hook";
import Profile from "./mod_user/pages/Profile";


function App() {
  const { token, login, logout, userId } = useAuth();
  let routes;
  if (token) {
    routes = (
      <Routes>
        <Route path={"/"} exact element={<Home />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path={"/"} exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/" element={<Navigate replace to="/" />} />
      </Routes>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout
      }}
    >

      <div className="container-fluid">
        <div className="row">
          <div className="col content">
            <Router>
              <MainNavigation />
              <div className={"container"}>
                <div className={"row"}>
                  <div className={"col-md-12"}>
                    <main>{routes}</main>
                  </div>
                </div>
              </div>
            </Router>
          </div>
        </div>
        <Footer />
      </div>
    </AuthContext.Provider>

  );
}

export default App;
