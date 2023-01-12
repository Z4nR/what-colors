import React from "react";

export default function SectionFour() {
  return (
    <div className="resume-section even-section">
      <div className="resume-image">
        <img
          className="image-section cap-img"
          src={require("../../../asset/img/capdesign.png")}
          alt="Kind of Color Blind"
        />
      </div>
      <div className="resume-text even-text">
        <h1>
          Cara Kerja Metode <b>Farnsworth-Munsell</b>
        </h1>
        <h4 style={{ marginTop: ".5rem", textAlign: "justify" }}>
          Tujuan metode ini ialah mengurutkan warna sesuai dengan tingkatan
          gradasi warna yang ada. Metode ini menggunakan kepingan yang terdapat
          bagian warna ditengahnya sebagai media tes buta warna.
        </h4>
        <h4
          style={{ marginTop: "1rem", paddingTop: "0", textAlign: "justify" }}
        >
          Metode Farnsworth-Munsell memiliki dua tipe metode yang populer, yaitu{" "}
          <b>Farnsworth-Munsell 100-Hue</b> dan <b>Farnsworth-Munsell D-15</b>
        </h4>
      </div>
    </div>
  );
}
