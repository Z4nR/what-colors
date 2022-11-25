import React from "react";
import ArticleBody from "./ArticleBody";

export default function ArticleList({ articles }) {
  return (
    <div className="article_list">
      {articles.map((article) => (
        <ArticleBody key={article.id} id={article.id} {...article} />
      ))}
    </div>
  );
}
