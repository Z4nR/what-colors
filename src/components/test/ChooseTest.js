import React from "react";
import IndividualTest from "./test-type/IndividualTest";
import MassalTest from "./test-type/MassalTest";
import RoomJoinTest from "./test-type/RoomJoin";

export default function ChooseTest({ openModal, id }) {
  return (
    <div className="choose-box">
      <h2>Pilih Tes Sesuai Kebutuhan</h2>
      <div className="choose-test">
        <IndividualTest openModal={openModal} id={id} />
        <MassalTest openModal={openModal} id={id} />
        <RoomJoinTest openModal={openModal} id={id} />
      </div>
    </div>
  );
}
