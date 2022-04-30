import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className={"container"}>
        <div className={"row"}>
          <div className={"col-4"}>
            <p>Created by @jayArghArgh</p>
          </div>
          <div className={"col-4"}>
            <h3>Links</h3>
            <ul>
              <li>Github</li>
              <li>LinkedIn</li>
              <li>Dev.to</li>
              <li>Ko-fi (https://dev.to/jayarghargh)</li>
            </ul>
          </div>
          <div className={"col-4"}>
            <h3>Contact</h3>
            <ul>
              <li>My Blog</li>
              <li>Email</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Footer;
