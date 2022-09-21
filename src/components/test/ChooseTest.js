import React from "react";
import useInput from "../../customhooks/useInput";

function ChooseTest() {
  const [code, onCodeHandler] = useInput("");

  return (
    <div className="choose-box">
      <div className="choose-test">
        <div className="test-type individual-test">
          <h4>Individual Test</h4>
          <p>Challenge yourself to know your eye look the color</p>
          <button className="join-btn">Take Test</button>
        </div>
        <div className="test-type massal-test">
          <h4>Massal Test</h4>
          <p>Check you and your team to check color blindness level</p>
          <button className="join-btn">Create Room</button>
        </div>
        <div className="test-type room-join">
          <h4>Join Test</h4>
          <p>Join room to take color blidness test</p>
          <input
            type="text"
            placeholder="Insert Kode"
            value={code}
            onChange={onCodeHandler}
          />
          <button className="join-btn">Join Room</button>
        </div>
      </div>
    </div>
  );
}

export default ChooseTest;
