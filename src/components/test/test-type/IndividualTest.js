import React from "react";
import { useMediaQuery } from "react-responsive";

export default function IndividualTest({ openModal }) {
  const ID = 1;

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
      <div className="individual" />
      <div className="item-body">
        <h5>Tes Individu</h5>
        <p>Apa yang matamu lihat belom tentu sama dengan orang lain lihat</p>
      </div>
    </div>
  ) : (
    <div className="test-type individual-test">
      <h3>Tes Individu</h3>
      <p>Apa yang matamu lihat belom tentu sama dengan orang lain lihat</p>
      <button
        className="join-btn individual-btn"
        onClick={(event) => {
          event.preventDefault();
          openModal(ID);
        }}
      >
        Coba Tes
      </button>
    </div>
  );
}
