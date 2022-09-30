import React from "react";
import { useMediaQuery } from "react-responsive";

export default function MassalTest({ openModal }) {
  const isMobile = useMediaQuery({
    query: "(max-width: 350px)",
  });

  return isMobile ? (
    <div className="icons">
      <div className="group" />
    </div>
  ) : (
    <div className="test-type massal-test">
      <h3>Test Room</h3>
      <p>Check potential color blindness level in your society</p>
      <button
        className="join-btn massal-btn"
        onClick={(event) => {
          event.preventDefault();
          openModal(2);
        }}
      >
        Create Room
      </button>
    </div>
  );
}
