import React from 'react';

const MainHeader = (props) => {
  return (
    <header>
      <nav className="navbar navbar-fluid navbar-expand-lg navbar-light bg-light">
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="/">
            &nbsp;easyMERN
          </a>
        </nav>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {props.children}
      </nav>
    </header>
  );
};

export default MainHeader;
