import React from "react";
import GoToTestButton from "../components/home/GoToTestBtn";
import Resume from "../components/home/Resume";

export default function HomePage() {
  return (
    <section>
      <div className="section">
        <Resume />
        <GoToTestButton />
      </div>
    </section>
  );
}
