import React from "react";
import IndividualTest from "./test-type/IndividualTest";
import MassalTest from "./test-type/MassalTest";
import RoomJoinTest from "./test-type/RoomJoin";

function ChooseTest() {
  return (
    <div className="choose-box">
      <div className="choose-test">
        <IndividualTest />
        <MassalTest />
        <RoomJoinTest />
      </div>
    </div>
  );
}

export default ChooseTest;
