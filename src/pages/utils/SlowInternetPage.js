import React from "react";
import { Link } from "react-router-dom";

export default function SlowInetPage() {
  return (
    <section>
      <div className="util-box image-slow-inet">
        <h1>Your Internet Is Slowest Than Before</h1>
        <h4>
          Please Try Again Later <br />
          <span>
            <Link to="/">Home</Link> or <Link to="/test">Take Test Again</Link>
          </span>
        </h4>
      </div>
    </section>
  );
}
