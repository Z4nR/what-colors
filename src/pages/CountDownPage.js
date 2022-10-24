import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CountDownPage() {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(10);
  const id = localStorage.getItem("id");

  useEffect(() => {
    if (timer === 0) return;
    setTimeout(() => setTimer(timer - 1), 1000);
  }, [timer]);

  return timer === 0 ? (
    <section>
      <div className="countdown-box">
        <p>Ready to watch your result?</p>
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
  ) : (
    <section>
      <div className="countdown-box">
        <h2>Yeeeeeaaayyy You Already Finish The Test</h2>
        <h4>
          Please until your result ready in <span>{timer}</span> second
        </h4>
      </div>
    </section>
  );
}
