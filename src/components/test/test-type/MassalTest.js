import React from "react";
import { useMediaQuery } from "react-responsive";

export default function MassalTest({ openModal }) {
  const ID = 2;

  const isMobile = useMediaQuery({
    query: "(max-width: 350px)",
  });

  return isMobile ? (
    <div className="icons">
      <div className="group" />
      <div className="item-body">
        <h5>Party Test</h5>
        <p>Check potential color blindness level in your society</p>
      </div>
    </div>
  ) : (
    <div className="test-type massal-test">
      <h3>Party Test</h3>
      <p>Check potential color blindness level in your society</p>
      <button
        className="join-btn massal-btn"
        onClick={(event) => {
          event.preventDefault();
          openModal(ID);
        }}
      >
        Create Room
      </button>
    </div>
  );
}
