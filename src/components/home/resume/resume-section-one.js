import React from "react";

export default function SectionOne() {
  return (
    <div className="resume-section odd-section">
      <div className="resume-text">
        <h1>
          Coba lihat gambar disamping, mana yang <b>Warna Asli?</b>
        </h1>
        <h4>
          Apabila kamu mengalami kebingungan <br /> maka kamu menderita{" "}
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