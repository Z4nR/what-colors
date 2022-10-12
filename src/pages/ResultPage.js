import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function ResultPage() {
  const [getMethod, setMethod] = useState(null);
  const [getCompare, setCompare] = useState(null);
  const [getDiscriminant, setDiscriminant] = useState(null);

  useEffect(() => {
    const methodResult = localStorage.getItem("methodResult");
    const compareArray = localStorage.getItem("compareArray");
    const discriminantResult = localStorage.getItem("discriminantResult");

    setMethod(JSON.parse(methodResult));
    setCompare(JSON.parse(compareArray));
    setDiscriminant(JSON.parse(discriminantResult));
  }, []);

  useEffect(() => {
    const compare = getCompare?.comparisonResult;
    console.log(compare);
  }, [getCompare]);

  useEffect(() => {
    const discriminant = getDiscriminant?.number;
    console.log(discriminant);
  }, [getDiscriminant]);

  return (
    <section>
      <p>{getMethod}</p>
    </section>
  );
}
