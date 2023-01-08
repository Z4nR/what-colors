import React from "react";

export default function SectionOne() {
  return (
    <div className="resume-section">
      <div className="resume-text">
        <h1>Info</h1>
      </div>
      <div className="resume-image">
        <img
          className="image-section"
          src={require("../../../asset/img/colourblind.webp")}
          alt="Kind of Color Blind"
        />
      </div>
    </div>
  );
}
