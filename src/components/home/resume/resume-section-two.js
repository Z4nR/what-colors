import React from "react";

export default function SectionTwo() {
  return (
    <div className="resume-section even-section">
      <div className="resume-text">
        <h1>
          Coba lihat gambar disamping, mana yang <b>Warna Asli?</b>
        </h1>
        <h4>
          Apabila kamu mengalami kebingungan maka kamu menderita{" "}
          <b>buta warna</b>
        </h4>
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
