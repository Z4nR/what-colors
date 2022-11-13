import React from "react";
import { Link } from "react-router-dom";

export default function SendCode() {
  const roomInitial = localStorage.getItem("roomInitial");

  return (
    <section>
      <div className="util-box image-sending">
        <h1>Verification Code Already Send</h1>
        <h4>
          your room verification code already send to your email. Go to{" "}
          <span>
            <Link to={`/dashboard/${roomInitial}/admin`}>Dashboard</Link>
          </span>
        </h4>
      </div>
    </section>
  );
}
