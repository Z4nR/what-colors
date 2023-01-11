import React from "react";
import SectionFour from "./resume/resume-section-four";
import SectionOne from "./resume/resume-section-one";
import SectionThree from "./resume/resume-section-three";
import SectionTwo from "./resume/resume-section-two";

export default function Resume() {
  return (
    <div className="resume-body">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </div>
  );
}
