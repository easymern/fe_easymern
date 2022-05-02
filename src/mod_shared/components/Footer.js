import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className={"container"}>
        <div className={"row"}>
          <div className={"col-4"}>
            Created by <a href="https://github.com/jayarghargh">JayArghArgh</a>
          </div>
          <div className={"col-4"}>
            <h3>Backend</h3>
            <li className="nav-item">
              <a href="https://github.com/easymern/be_easymern">GitHub</a>
            </li>
            <li className="nav-item">
              <a href="https://github.com/easymern/be_easymern/wiki">Wiki</a>
            </li>
            <li className="nav-item">
              <a href="https://github.com/easymern/be_easymern/issues">Issues</a>
            </li>
          </div>
          <div className={"col-4"}>
            <h3>Frontend</h3>
            <li className="nav-item">
              <a href="https://github.com/easymern/fe_easymern">GitHub</a>
            </li>
            <li className="nav-item">
              <a href="https://github.com/easymern/fe_easymern/wiki">Wiki</a>
            </li>
            <li className="nav-item">
              <a href="https://github.com/easymern/fe_easymern/issues">Issues</a>
            </li>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Footer;
