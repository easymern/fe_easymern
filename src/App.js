import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import MainNavigation from "./mod_shared/components/Navigation/MainNavigation";
import Home from "./mod_home/pages/Home";
// import { useState, useEffect } from "react";


// const [data, setData] = useState({});
//
// useEffect(() => {
//   fetch("/home")
//     .then(res => res.json())
//     .then(data => setData(data))
// }, [])

function App() {
  return (
    <Router>
      <MainNavigation />
      {/*<div className="App">*/}
      <div className="container-fluid">
        <div className="row">
          <div className="col content">
            <Routes>
              <Route path="/" exact element={<Home />} />
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
