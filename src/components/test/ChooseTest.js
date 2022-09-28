import React from "react";
import IndividualTest from "./test-type/IndividualTest";
import MassalTest from "./test-type/MassalTest";
import RoomJoinTest from "./test-type/RoomJoin";

export default function ChooseTest() {
  return (
    <div className="choose-box">
      <h2>Choose Test You Want Try</h2>
      <div className="choose-test">
        <IndividualTest />
        <MassalTest />
        <RoomJoinTest />
      </div>
    </div>
  );
}
