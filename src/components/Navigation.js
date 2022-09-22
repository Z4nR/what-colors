import React from "react";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { useMediaQuery } from "react-responsive";

function AppNav() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 350px)",
  });

  return isDesktop ? (
    <nav className="app-nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/test">Test</Link>
        </li>
        <li>
          <Link to="/article">Article</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  ) : (
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
