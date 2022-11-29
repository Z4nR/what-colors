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
      <h3>
        <a href={url}>{title}</a>
      </h3>
      <h4>
        Penulis : {author} ({year})
      </h4>
      <h4>Kategori : {category}</h4>
      <p className="article-desc">Deskripsi : {description}</p>
    </div>
  );
}
