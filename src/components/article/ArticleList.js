import React from "react";
import ArticleBody from "./ArticleBody";

export default function ArticleList({ articles }) {
  return (
    <div className="article_list">
      {articles.map((article) => (
        <ArticleBody key={article._id} id={article._id} {...article} />
      ))}
    </div>
  );
}
