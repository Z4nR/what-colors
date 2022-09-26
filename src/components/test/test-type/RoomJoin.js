import React from "react";
import { useMediaQuery } from "react-responsive";

function RoomJoinTest() {
  const isMobile = useMediaQuery({
    query: "(max-width: 350px)",
  });

  return isMobile ? (
    <div className="icons">
      <div className="join"></div>
    </div>
  ) : (
    <div className="test-type room-join">
      <h3>Join Test</h3>
      <p>Join room to take color blidness test</p>
      <button className="join-btn room-btn">Join Room</button>
    </div>
  );
}

export default RoomJoinTest;
