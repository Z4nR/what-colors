import React, { useEffect, useState } from "react";

export default function TestSheet() {
  const [getData, setGetData] = useState(null);

  useEffect(() => {
    const dataInput = localStorage.getItem("data");
    setGetData(JSON.parse(dataInput));
  }, []);

  return <p>{getData.firstName}</p>;
}
