import React, { useState } from "react";
import ResultBiodata from "../components/result/ResultBiodata";
import ResultData from "../components/result/ResultData";
import LoadingPage from "./utils/LoadingPage";

export default function ResultPage() {
  const [isLoading, setLoading] = useState(false);

  return isLoading === false ? (
    <section>
      <ResultBiodata />
      <ResultData />
    </section>
  ) : (
    <div className="util-box">
      <LoadingPage />
      <p>Harap Tunggu</p>
    </div>
  );
}
