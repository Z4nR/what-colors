import React, { useEffect, useState } from "react";
import ArticleList from "../components/article/ArticleList";
import { getArticle } from "../utils/data-api";
import LoadingPage from "./utils/LoadingPage";

export default function ArticlePage() {
  const [article, setArticle] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getArticle().then((data) => {
      setArticle(data.data);
      setLoading(false);
    });
  }, []);

  return isLoading === false ? (
    <section>
      <div className="section">
        <div className="article">
          <div className="page-title">
            <h2>Artikel Mengenai Buta Warna</h2>
            <p>
              Artikel berikut ini berisi wawasan mengenai buta warna terbaru (5
              tahun terakhir) dan terverifikasi datanya.
            </p>
          </div>
          <div className="article-list_box">
            <ArticleList articles={article} />
          </div>
        </div>
      </div>
    </section>
  ) : (
    <div className="util-box">
      <LoadingPage />
      <p>Harap Tunggu</p>
    </div>
  );
}
