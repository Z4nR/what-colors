import React from "react";
import { useMediaQuery } from "react-responsive";

export default function SectionTwo() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 775px)",
  });

  return isDesktop ? (
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
        <h4 style={{ marginTop: ".5rem", textAlign: "justify" }}>
          Sebuah keadaan dimana terdapat gangguan dalam membedakan warna pada
          retina mata
        </h4>
        <h4
          style={{ marginTop: "1rem", paddingTop: "0", textAlign: "justify" }}
        >
          Gangguan tersebut menyerang salah satu sel retina yang berfungsi
          menangkap gelombang cahaya, yaitu <b>sel batang</b> dan{" "}
          <b>sel kerucut</b>
        </h4>
      </div>
    </div>
  ) : (
    <div className="resume-section even-section">
      <div className="resume-text even-text">
        <h1>
          Apasih itu <b>Buta warna?</b>
        </h1>
        <h4 style={{ marginTop: "1rem", paddingTop: "0" }}>
          Sebuah keadaan dimana terdapat gangguan dalam membedakan warna pada
          retina mata
        </h4>
      </div>
      <div className="resume-image">
        <img
          className="image-section eye-structure"
          src={require("../../../asset/img/eyestructure.png")}
          alt="Kind of Color Blind"
        />
      </div>
      <div className="resume-text even-text">
        <h4>
          Gangguan tersebut menyerang salah satu sel retina yang berfungsi
          menangkap gelombang cahaya, yaitu <b>sel batang</b> dan{" "}
          <b>sel kerucut</b>
        </h4>
      </div>
    </div>
  );
}
