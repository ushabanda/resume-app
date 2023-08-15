import React from "react";
import image from "../images/app-logo.svg";
import "./navbar.style.css";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div>
      <header>
        <div className="navbar-body">
          <div className="navbar-content">
            <div className="navbar-logo">
              <img src={image} alt="app-logo.svg" className="app-logo" />
            </div>
            <div className="navbar-right">
              <Link to="/">Resume</Link>
              <Link to='/'>Cover Letter</Link>
              <Link to='/'>Resume Writting</Link>
              <Link to='/'>Blog</Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
