import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <section>
      <div className="go-to-box">
        <div className="go-to-test">
          <h2>Want Check Your Color Blindness?</h2>
          <button
            onClick={(event) => {
              event.preventDefault();
              navigate("/test");
            }}
          >
            Take Test
          </button>
        </div>
      </div>
    </section>
  );
}
