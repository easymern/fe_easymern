import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import MainNavigation from "./mod_shared/components/Navigation/MainNavigation";
import Home from "./mod_home/pages/Home";
import Login from "./mod_login/components/Login";

import { useState, useEffect } from "react";


function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("/api/auth/home")
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  return (
    <Router>
      <MainNavigation />
      {/*<div className="App">*/}
      <div className="container-fluid">
        <div className="row">
          <div className="col content">
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/login" exact element={<Login />} />
              <Route path="/u/:userId" exact element={<Home />} />
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
    </Router>
  );
}

export default App;
