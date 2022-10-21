import React from "react";
import InstructionTest from "../components/test-time/Instruction";
import TestTime from "../components/test-time/TestTime";

export default function TestSheet() {
  return (
    <section className="test-section">
      <InstructionTest />
      <TestTime />
    </section>
  );
}
