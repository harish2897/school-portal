import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";

const Header= ()=> {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/teach" className="nav-link" >Home</Link> 
              {/* <a className="nav-link" href="#">
                Home
              </a> */}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
