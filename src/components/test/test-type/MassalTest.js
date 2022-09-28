import React from "react";
import { useMediaQuery } from "react-responsive";

export default function MassalTest() {
  const isMobile = useMediaQuery({
    query: "(max-width: 350px)",
  });

  return isMobile ? (
    <div className="icons">
      <div className="group" />
    </div>
  ) : (
    <div className="test-type massal-test">
      <h3>Massal Test</h3>
      <p>Check potential color blindness level in your society</p>
      <button className="join-btn massal-btn">Create Room</button>
    </div>
  );
}
