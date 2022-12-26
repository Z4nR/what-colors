import React from "react";
import GoToTestButton from "../components/home/GoToTestBtn";
import Resume from "../components/home/Resume";

export default function HomePage() {
  return (
    <section>
      <Resume />
      <GoToTestButton />
    </section>
  );
}
