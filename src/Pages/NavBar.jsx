import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../Styles/Nav.css'

const NavBar = () => {
  return (
    <div>
      <nav className="nav">
        <h1>
          {" "}
          <Link className="logo" to="/"> MhideyWears</Link>{" "}
        </h1>

        <ul>
          <li>
            {" "}
            <Link to="/About">About </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
