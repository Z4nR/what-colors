import React from "react";
import { useNavigate } from "react-router-dom";

export default function GoToTestButton() {
  const navigate = useNavigate();

  return (
    <div className="go-to-box">
      <div className="go-to-test">
        <h2>Apakah kamu buta warna? Cek sekarang</h2>
        <button
          onClick={(event) => {
            event.preventDefault();
            navigate("/test");
          }}
        >
          Coba Tes
        </button>
      </div>
    </div>
  );
}
