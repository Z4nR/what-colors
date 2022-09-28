import React, { useState } from "react";

export default function TestSheet() {
  const localData = useState(localStorage.getItem("data") || null);
  console.log(localData);

  return <p>Hello</p>;
}
