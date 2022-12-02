import React from "react";

export default function ArticleBody({
  url,
  title,
  author,
  year,
  category,
  description,
}) {
  return (
    <div className="article-container">
      <div className="article-item">
        <h3>
          <a href={url}>{title}</a>
        </h3>
        <h4>
          Penulis : {author} ({year})
        </h4>
        <h4>Kategori : {category}</h4>
        <p>Deskripsi : {description}</p>
      </div>
      <input className="expand-btn" type="checkbox" />
    </div>
  );
}
