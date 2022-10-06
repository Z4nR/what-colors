import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ChooseTest from "../components/test/ChooseTest";
import InstructionTest from "../components/test/Instruction";
import ModalBox from "../components/test/test-modal/ModalBox";

export default function TestPage() {
  const [isModalShowed, setModalShowed] = useState(false);
  const [isIDModal, setIDModal] = useState(0);
  const navigate = useNavigate();

  function openModal(id) {
    setModalShowed(true);
    setIDModal(id);
  }

  function closeModal() {
    setModalShowed(false);
  }

  function openTestSheet() {
    navigate("/test/test-sheet");
  }

  return (
    <section>
      {isModalShowed && (
        <ModalBox
          closeModal={closeModal}
          id={isIDModal}
          openTest={openTestSheet}
        />
      )}
      <div className="page">
        <InstructionTest />
        <ChooseTest openModal={openModal} />
      </div>
    </section>
  );
}
