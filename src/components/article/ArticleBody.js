import React from "react";
import { Link } from "react-router-dom";

export default function ArticleBody({ url, title, category, description }) {
  return (
    <div className="article-container">
      <h3>
        <Link to={url}>{title}</Link>
      </h3>
      <h5>Category : {category}</h5>
      <p className="article-desc">{description}</p>
    </div>
  );
}
