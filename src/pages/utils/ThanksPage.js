import React from "react";
import { Link } from "react-router-dom";

export default function Thanks() {
  return (
    <section>
      <div className="util-box image-thanks">
        <h1>Thanks for doing room test</h1>
        <h4>
          Doing other test?{" "}
          <span>
            <Link to="/test">Back to Test Page</Link>
          </span>
        </h4>
      </div>
    </section>
  );
}
