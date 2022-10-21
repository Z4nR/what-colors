import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CountDownPage() {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    if (timer === 0) return;
    setTimeout(() => setTimer(timer - 1), 1000);
  }, [timer]);

  return (
    <section>
      <div className="countdown-box">
        <h2>Yeeeeeaaayyy You Already Finish The Test</h2>
        <h4>
          Please until your result ready in <span>{timer}</span> second
        </h4>
        <button
          onClick={(event) => {
            event.preventDefault();
            navigate("/result/:id");
          }}
        >
          Show My Result
        </button>
      </div>
    </section>
  );
}
