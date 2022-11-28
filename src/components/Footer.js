import React from "react";
import { FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="foot-desc">
        <div className="foot-desc_item">
          <p>Copyright 2022</p>
        </div>
      </div>
      <nav className="foot-nav">
        <ul>
          <li>
            <Link to="/">{<FiHome />}</Link>
          </li>
          <li>
            <Link to="/test">{<FiHome />}</Link>
          </li>
          <li>
            <Link to="/article">{<FiHome />}</Link>
          </li>
          <li>
            <Link to="/about">{<FiHome />}</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
