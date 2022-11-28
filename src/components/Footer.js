import React from "react";
import { FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="foot-desc">
        <div className="foot-desc_item">
          <p>
            This website still in development for efficiency and collectible
            color blindness test. <br />
            To get more spesific result, you can call doctor or come to hospital
            / eyecare clinic
          </p>
          <p>
            <b>WhatColors © Copyright 2022</b>
          </p>
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
