import React from "react";
import { Link } from "react-router-dom";

import "./styles/Navbar.css"; // Importing CSS

const Navbar = () => (
  <nav className="navbar">
    <h1>Employees Management System</h1>
    <ul className="nav-list">
      <li className="nav-item">
        <Link to="/" className="nav-link"></Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
