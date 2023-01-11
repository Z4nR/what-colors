import React from "react";

export default function SectionThree() {
  return (
    <div className="resume-section odd-section">
      <div className="resume-text">
        <h1>Info</h1>
      </div>
      <div className="resume-image">
        <img
          className="image-section cap-img"
          src={require("../../../asset/img/capdesign.png")}
          alt="Kind of Color Blind"
        />
      </div>
    </div>
  );
}
