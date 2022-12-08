import React from "react";
import { useMediaQuery } from "react-responsive";

export default function ResultBiodata({ data }) {
  const isDesktop = useMediaQuery({
    query: "(min-width: 450px)",
  });

  return (
    <div className="result">
      <div className="biodata_item">
        <h3>Halllo {data?.fullName}</h3>
      </div>
    </div>
  );
}
