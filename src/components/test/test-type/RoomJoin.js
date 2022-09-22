import React from "react";
import useInput from "../../../customhooks/useInput";

function RoomJoinTest() {
  const [code, onCodeHandler] = useInput("");

  return (
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
        <input
          className="checkbox-admin"
          type="checkbox"
          value={code}
          onChange={onCodeHandler}
        />
      </div>
      <button className="join-btn room-btn">Join Room</button>
    </div>
  );
}

export default RoomJoinTest;
