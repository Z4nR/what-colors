import React from "react";
import { useMediaQuery } from "react-responsive";

export default function IndividualTest({ openModal }) {
  const isMobile = useMediaQuery({
    query: "(max-width: 350px)",
  });

  return isMobile ? (
    <div className="icons">
      <div className="individual"></div>
    </div>
  ) : (
    <div className="test-type individual-test">
      <h3>Individual Test</h3>
      <p>Challenge yourself to know your eye look the color</p>
      <button
        className="join-btn individual-btn"
        onClick={(event) => {
          event.preventDefault();
          openModal(1);
        }}
      >
        Take Test
      </button>
    </div>
  );
}
