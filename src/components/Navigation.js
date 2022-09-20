import React from "react";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";

function AppNav() {
  return (
    <nav className="app-nav">
      <ul>
        <li>
          <Link to="/">
            <FiHome />
          </Link>
        </li>
        <li>
          <Link to="/test">
            <FiHome />
          </Link>
        </li>
        <li>
          <Link to="/article">
            <FiHome />
          </Link>
        </li>
        <li>
          <Link to="/about">
            <FiHome />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
