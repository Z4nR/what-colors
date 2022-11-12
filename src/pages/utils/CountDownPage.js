import React from "react";
import { useNavigate } from "react-router-dom";

export default function CountDownPage() {
  const navigate = useNavigate();
  const id = localStorage.getItem("id");

  return (
    <section>
      <div className="util-box image-result">
        <h1>Ready to watch your result?</h1>
        <button
          onClick={(event) => {
            event.preventDefault();
            navigate(`/result/${id}`);
          }}
        >
          <u>Show My Result</u>
        </button>
      </div>
    </section>
  );
}
