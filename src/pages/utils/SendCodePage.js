import React from "react";
import { Link } from "react-router-dom";

export default function SendCode() {
  const idGroup = localStorage.getItem("idGroup");

  return (
    <section>
      <div className="util-box image-sending">
        <h1>Verification Code Already Send</h1>
        <h4>
          your room verification code already send to your email. Go to{" "}
          <span>
            <Link to={`/dashboard/${idGroup}/admin`}>Dashboard</Link>
          </span>
        </h4>
      </div>
    </section>
  );
}
