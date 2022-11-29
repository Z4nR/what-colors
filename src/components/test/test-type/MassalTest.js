import React from "react";
import { useMediaQuery } from "react-responsive";

export default function MassalTest({ openModal }) {
  const ID = 2;

  const isMobile = useMediaQuery({
    query: "(max-width: 350px)",
  });

  return isMobile ? (
    <div
      className="icons"
      onClick={(event) => {
        event.preventDefault();
        openModal(ID);
      }}
    >
      <div className="group" />
      <div className="item-body">
        <h5>Tes Berjamaah</h5>
        <p>Apakah kalian buta warna? Mari buktikan</p>
      </div>
    </div>
  ) : (
    <div className="test-type massal-test">
      <h3>Tes Berjamaah</h3>
      <p>Diantara kalian mungkin ada yang buta warna. Tidak ada yang tau.</p>
      <button
        className="join-btn massal-btn"
        onClick={(event) => {
          event.preventDefault();
          openModal(ID);
        }}
      >
        Buat Grup
      </button>
    </div>
  );
}
