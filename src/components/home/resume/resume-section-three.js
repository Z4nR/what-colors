import React from "react";

export default function SectionThree() {
  return (
    <div className="resume-section odd-section">
      <div className="resume-text">
        <h1>Info</h1>
        <h4>Info</h4>
      </div>
      <div className="resume-image">
        <img
          className="image-section"
          src={require("../../../asset/img/Ophthalmologist-amico.png")}
          alt="Kind of Color Blind"
        />
      </div>
    </div>
  );
}
