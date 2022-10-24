import React from "react";
import { useMediaQuery } from "react-responsive";

export default function RoomJoinTest({ openModal }) {
  const ID = 3;

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
      <div className="join" />
      <div className="item-body">
        <h5>Join Test</h5>
        <p>Join room to take color blidness test</p>
      </div>
    </div>
  ) : (
    <div className="test-type room-join">
      <h3>Join Test</h3>
      <p>Join room to take color blidness test</p>
      <button
        className="join-btn room-btn"
        onClick={(event) => {
          event.preventDefault();
          openModal(ID);
        }}
      >
        Join Room
      </button>
    </div>
  );
}
