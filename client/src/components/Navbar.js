import React from "react";
import { useSelector } from "react-redux";

import Logout from "../pages/LogoutPage";
import "./styles/Navbar.css";

const Navbar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <nav className="navbar">
      <h1 t>Employees Management System</h1>
      <ul className="nav-list">
        {isAuthenticated && (
          <li className="nav-item">
            <Logout />
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
