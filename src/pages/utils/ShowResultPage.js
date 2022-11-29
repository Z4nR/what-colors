import React from "react";
import { useNavigate } from "react-router-dom";

export default function ShowResultPage() {
  const navigate = useNavigate();
  const id = localStorage.getItem("id");

  return (
    <section>
      <div className="util-box image-result">
        <h1>Udah siap lihat hasil tes kamu?</h1>
        <button
          onClick={(event) => {
            event.preventDefault();
            navigate(`/result/${id}`);
          }}
        >
          <u>Lihat Hasil Saya</u>
        </button>
      </div>
    </section>
  );
}
