import React, { useState } from "react";
import ResultBiodata from "../components/result/ResultBiodata";
import ResultData from "../components/result/ResultData";
import LoadingPage from "./utils/LoadingPage";

export default function ResultPage() {
  const [loadingMap, setLoadingMap] = useState({ biodata: true, data: true });
  const { biodata, data } = loadingMap;
  const isLoading = biodata && data;

  console.log(loadingMap);

  return isLoading === false ? (
    <section>
      <ResultBiodata setLoadingMap={setLoadingMap} />
      <ResultData setLoadingMap={setLoadingMap} />
    </section>
  ) : (
    <div className="util-box">
      <LoadingPage />
      <p>Harap Tunggu</p>
    </div>
  );
}
