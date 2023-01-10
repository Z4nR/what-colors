import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import {
  GrDocumentTest,
  GrHome,
  GrArticle,
  GrCircleInformation,
} from "react-icons/gr";

export default function AppNav() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 381px)",
  });

  return (
    <nav className="app-nav">
      <ul>
        <li>
          <Link to="/">{isDesktop ? "Beranda" : <GrHome />}</Link>
        </li>
        <li>
          <Link to="/test">{isDesktop ? "Tes" : <GrDocumentTest />}</Link>
        </li>
        <li>
          <Link to="/article">{isDesktop ? "Artikel" : <GrArticle />}</Link>
        </li>
        <li>
          <Link to="/about">
            {isDesktop ? "Tentang" : <GrCircleInformation />}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
