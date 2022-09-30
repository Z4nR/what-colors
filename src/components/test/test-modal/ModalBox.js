import React from "react";
import CreateRoomModal from "./modal/CreateRoomModal";
import IndividualModal from "./modal/IndividualModal";
import JoinRoomModal from "./modal/JoinRoomModal";

export default function ModalBox({ closeModal, id }) {
  return (
    <div className="modal-box">
      <div className="modal-center">
        {id === 1 && <IndividualModal closeModal={closeModal} />}
        {id === 2 && <CreateRoomModal closeModal={closeModal} />}
        {id === 3 && <JoinRoomModal closeModal={closeModal} />}
      </div>
    </div>
  );
}
