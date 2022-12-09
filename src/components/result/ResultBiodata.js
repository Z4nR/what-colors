import React from "react";

export default function ResultBiodata({ data }) {
  return (
    <div className="result">
      <div className="biodata_item">
        <h3>Halllo {data?.fullName}</h3>
      </div>
    </div>
  );
}
