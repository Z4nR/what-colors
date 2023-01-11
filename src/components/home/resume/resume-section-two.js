import React from "react";

export default function SectionTwo() {
  return (
    <div className="resume-section even-section">
      <div className="resume-image">
        <img
          className="image-section eye-structure"
          src={require("../../../asset/img/eyestructure.png")}
          alt="Kind of Color Blind"
        />
      </div>
      <div className="resume-text even-text">
        <h1>
          Apasih itu <b>Buta warna?</b>
        </h1>
        <h4 style={{ marginTop: ".5rem" }}>
          Sebuah keadaan dimana terdapat gangguan dalam membedakan warna pada
          retina mata
        </h4>
        <h4 style={{ marginTop: "1rem", paddingTop: "0" }}>
          Gangguan tersebut menyerang salah satu sel retina yang berfungsi
          menangkap gelombang cahaya, yaitu sel batang dan sel kerucut
        </h4>
      </div>
    </div>
  );
}
