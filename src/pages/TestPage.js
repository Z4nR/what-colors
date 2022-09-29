import React, { useState } from "react";
import ChooseTest from "../components/test/ChooseTest";
import InstructionTest from "../components/test/Instruction";
import IndividualJoin from "../components/test/test-modal/IndividualJoin";
import TestSheet from "../components/test/TestSheet";

export default function TestPage() {
  const [isModalShowed, setModalShowed] = useState(false);
  const [isModalClosed, setModalClose] = useState(true);

  function openModal() {
    setModalShowed(true);
  }

  function closeModal() {
    setModalClose(false);
  }

  return (
    <section>
      {isModalShowed && <IndividualJoin closeModal={closeModal} />}
      {isModalClosed && (
        <div className="page">
          <InstructionTest />
          <ChooseTest openModal={openModal} />
          <TestSheet />
        </div>
      )}
    </section>
  );
}
