import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";


import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import MainNavigation from "./mod_shared/components/Navigation/MainNavigation";
import Home from "./mod_home/pages/Home";
import Login from "./mod_login/components/Login";
import Register from "./mod_login/components/Register";
import Footer from "./mod_shared/components/Navigation/Footer";

import { AuthContext } from "./mod_shared/context/auth-context";


function App() {
  const { token, login, logout, userId } = useAuth();
  let routes;
  if (token) {
    routes = (
      <Switch>
        <Route path={"/"} exact>
          <Home />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path={"/"} exact>
          <Home />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>
        <Redirect to={"/login"} />
      </Switch>
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
