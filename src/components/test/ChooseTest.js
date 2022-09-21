import React from "react";
import useInput from "../../customhooks/useInput";

function ChooseTest() {
  const [code, onCodeHandler] = useInput("");

  return (
    <div className="choose-box">
      <div className="choose-test">
        <div className="test-type individual-test">
          <h3>Individual Test</h3>
          <p>Challenge yourself to know your eye look the color</p>
          <button className="join-btn individual-btn">Take Test</button>
        </div>
        <div className="test-type massal-test">
          <h3>Massal Test</h3>
          <p>Check potential color blindness level in your society</p>
          <button className="join-btn massal-btn">Create Room</button>
        </div>
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
      </div>
    </div>
  );
}

export default ChooseTest;
