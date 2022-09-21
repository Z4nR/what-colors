import React from "react";
import ChooseTest from "../components/test/ChooseTest";
import InstructionTest from "../components/test/Instruction";

function TestPage() {
  return (
    <section>
      <div className="test-page">
        <InstructionTest />
        <ChooseTest />
      </div>
    </section>
  );
}

export default TestPage;
