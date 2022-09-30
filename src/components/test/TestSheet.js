import React, { useEffect, useState } from "react";

export default function TestSheet() {
  const [getData, setGetData] = useState(null);

  useEffect(() => {
    const dataInput = localStorage.getItem("data");
    setGetData(JSON.parse(dataInput));
    console.log(getData.value);
  }, []);

  return <p>Hello</p>;
}
