import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function ResultPage() {
  const [getResult, setGetResult] = useState(null);

  useEffect(() => {
    const discriminantResult = localStorage.getItem("discriminantResult");
    const compareArray = localStorage.getItem("compareArray");
    const methodResult = localStorage.getItem("methodResult");
    setGetResult(
      JSON.parse(discriminantResult),
      JSON.parse(compareArray),
      JSON.parse(methodResult)
    );
  }, []);

  return (
    <section>
      <p>Result Page</p>
    </section>
  );
}
