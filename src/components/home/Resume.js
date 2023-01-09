import React from "react";
import SectionOne from "./resume/resume-section-one";
import SectionThree from "./resume/resume-section-three";

export default function Resume() {
  return (
    <div className="resume-body">
      <SectionOne />
      <SectionThree />
    </div>
  );
}
