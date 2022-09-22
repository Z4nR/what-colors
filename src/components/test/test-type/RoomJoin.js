import React from "react";
import { useMediaQuery } from "react-responsive";
import useInput from "../../../customhooks/useInput";

function RoomJoinTest() {
  const [code, onCodeHandler] = useInput("");

  const isMobile = useMediaQuery({
    query: "(max-width: 350px)",
  });

  return isMobile ? (
    <div className="join icons" />
  ) : (
    <div className="test-type room-join">
      <h3>Join Test</h3>
      <p>Join room to take color blidness test</p>
      <div className="input-box">
        <input
          className="insert-code"
          type="text"
          placeholder="Insert Code"
          value={code}
          onChange={onCodeHandler}
        />
        <div className="checkbox-admin">
          <input type="checkbox" value={code} onChange={onCodeHandler} />
          <label>Masuk sebagai admin</label>
        </div>
      </div>
      <button className="join-btn room-btn">Join Room</button>
    </div>
  );
}

export default RoomJoinTest;
