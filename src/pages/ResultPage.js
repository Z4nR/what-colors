import React, { useEffect, useState } from "react";
import ResultBiodata from "../components/result/ResultBiodata";
import ResultData from "../components/result/ResultData";
import { getUserData } from "../utils/data-api";
import LoadingPage from "./utils/LoadingPage";

export default function ResultPage() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const id = localStorage.getItem("id");

    getUserData(id).then((data) => {
      setData(data.data);
      setLoading(false);
    });
  }, []);

  return isLoading === false ? (
    <section>
      <ResultBiodata data={data} />
      <ResultData data={data} />
    </section>
  ) : (
    <div className="util-box">
      <LoadingPage />
      <p>Harap Tunggu</p>
    </div>
  );
}
