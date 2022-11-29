import React from "react";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { useMediaQuery } from "react-responsive";

export default function AppNav() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 350px)",
  });

  return (
    <nav className="app-nav">
      <ul>
        <li>
          <Link to="/">{isDesktop ? "Beranda" : <FiHome />}</Link>
        </li>
        <li>
          <Link to="/test">{isDesktop ? "Tes" : <FiHome />}</Link>
        </li>
        <li>
          <Link to="/article">{isDesktop ? "Artikel" : <FiHome />}</Link>
        </li>
        <li>
          <Link to="/about">{isDesktop ? "Tentang" : <FiHome />}</Link>
        </li>
      </ul>
    </nav>
  );
}
