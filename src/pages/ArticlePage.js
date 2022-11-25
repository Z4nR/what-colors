import React from "react";
import ArticleList from "../components/article/ArticleList";

export default function ArticlePage() {
  return (
    <section>
      <div className="article-title">
        <h2>Article Page</h2>
      </div>
      <div className="article-container">
        <h3>Article Title</h3>
        <h5>Category : </h5>
        <p className="article-desc">
          Description <br /> Description <br /> Description <br /> Description{" "}
          <br /> Description
        </p>
      </div>
      <ArticleList />
    </section>
  );
}
