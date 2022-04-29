import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
  // Switch
} from "react-router-dom";


import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import MainNavigation from "./mod_shared/components/Navigation/MainNavigation";
import Home from "./mod_home/pages/Home";
import Login from "./mod_login/components/Login";
import Register from "./mod_login/components/Register";
import Footer from "./mod_shared/components/Navigation/Footer";

import { AuthContext } from "./mod_shared/context/auth-context";
import { useAuth } from "./mod_shared/hooks/auth-hook";


function App() {
  const { token, login, logout, userId } = useAuth();
  let routes;
  if (token) {
    routes = (
      <Routes>
        <Route path={"/"} exact element={<Home />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
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
              <main>{routes}</main>
            </Router>
          </div>
        </div>
        <Footer />
      </div>
    </AuthContext.Provider>

  );
}

export default App;
