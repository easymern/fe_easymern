import React from 'react';
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import NavSearch from "./NavSearch";

const MainNavigation = props => {
  return (
    <React.Fragment>
      <MainHeader>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <NavLinks />
        </div>
        <NavSearch />
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
