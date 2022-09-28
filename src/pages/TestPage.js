import React from "react";
import ChooseTest from "../components/test/ChooseTest";
import InstructionTest from "../components/test/Instruction";
import IndividualJoin from "../components/test/test-modal/IndividualJoin";
import TestSheet from "../components/test/TestSheet";

export default function TestPage() {
  return (
    <section>
      <div className="test-page">
        <InstructionTest />
        <ChooseTest />
        <div className="modal-box">
          <IndividualJoin />
        </div>
        <TestSheet />
      </div>
    </section>
  );
}
