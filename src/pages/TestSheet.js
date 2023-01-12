import React, { useState } from "react";
import InstructionTest from "../components/test-time/Instruction";
import TestTime from "../components/test-time/TestTime";

export default function TestSheet() {
  const [isInstructionShowed, setInstructionShowed] = useState(true);

  function closeModal() {
    setInstructionShowed(false);
  }

  return (
    <section>
      <div className="section">
        <div className="test-time">
          {isInstructionShowed && <InstructionTest closeModal={closeModal} />}
          <TestTime />
        </div>
      </div>
    </section>
  );
}
