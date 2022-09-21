import React from "react";

function ChooseTest() {
  return (
    <div className="choose-box">
      <div className="choose-test">
        <div className="test-type individual-test">
          <h4>Individual Test</h4>
          <button className="join-btn">Take Test</button>
        </div>
        <div className="test-type massal-test">
          <h4>Massal Test</h4>
          <button className="join-btn">Create Room</button>
        </div>
        <div className="test-type room-join">
          <h4>Join Test</h4>
          <button className="join-btn">Join Room</button>
        </div>
      </div>
    </div>
  );
}

export default ChooseTest;
