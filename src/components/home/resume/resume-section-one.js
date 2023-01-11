import React from "react";
import { useMediaQuery } from "react-responsive";

export default function SectionOne() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 775px)",
  });

  return isDesktop ? (
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
          className="image-section blind-desc"
          src={require("../../../asset/img/colourblind.webp")}
          alt="Kind of Color Blind"
        />
      </div>
    </div>
  ) : (
    <div className="resume-section odd-section">
      <div className="resume-text">
        <h1>
          Coba lihat gambar disamping, mana yang <b>Warna Asli?</b>
        </h1>
      </div>
      <div className="resume-image">
        <img
          className="image-section blind-desc"
          src={require("../../../asset/img/colourblind.webp")}
          alt="Kind of Color Blind"
        />
      </div>
      <div className="resume-text">
        <h4>
          Apabila kamu mengalami kebingungan maka kamu menderita <br />
          <b>buta warna</b>
        </h4>
      </div>
    </div>
  );
}
