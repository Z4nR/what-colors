import React from "react";
import { useMediaQuery } from "react-responsive";

export default function SectionThree() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 775px)",
  });

  return isDesktop ? (
    <div className="resume-section odd-section">
      <div className="resume-text">
        <h1>
          Gimana cara kita mendeteksi <b>buta warna?</b>
        </h1>
        <h4 style={{ textAlign: "justify" }}>
          Ada beberapa metode yang dapat digunakan untuk mendeteksi buta warna,
          yaitu <b>Metode Ishihara</b>, <b>Farnsworth-Munsell</b> dan{" "}
          <b>Hardy-Rand-Rittler</b>
        </h4>
        <h4
          style={{ marginTop: "1rem", paddingTop: "0", textAlign: "justify" }}
        >
          Setiap metode memiliki keunggulan dan kekurangannya masing-masing
        </h4>
      </div>
      <div className="resume-image">
        <img
          className="image-section ophthal-img"
          src={require("../../../asset/img/Ophthalmologist-amico.png")}
          alt="Kind of Color Blind"
        />
      </div>
    </div>
  ) : (
    <div className="resume-section odd-section">
      <div className="resume-text">
        <h1>
          Gimana cara kita mendeteksi <b>buta warna?</b>
        </h1>
        <h4 style={{ marginTop: "1rem", paddingTop: "0" }}>
          Ada beberapa metode yang dapat digunakan untuk mendeteksi buta warna,
          yaitu <b>Metode Ishihara</b>, <b>Farnsworth-Munsell</b> dan{" "}
          <b>Hardy-Rand-Rittler</b>
        </h4>
      </div>
      <div className="resume-image">
        <img
          className="image-section ophthal-img"
          src={require("../../../asset/img/Ophthalmologist-amico.png")}
          alt="Kind of Color Blind"
        />
      </div>
      <div className="resume-text">
        <h4 style={{ marginTop: "1rem", paddingTop: "0" }}>
          Setiap metode memiliki keunggulan dan kekurangannya masing-masing
        </h4>
      </div>
    </div>
  );
}
