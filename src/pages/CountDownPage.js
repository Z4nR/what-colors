import React, { useEffect, useState } from "react";

export default function CountDownPage() {
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    let count = 10;
    const timerCountDown = setInterval(() => {
      count -= 1;
      if (count <= 0) {
        clearInterval(timerCountDown);
      }
    }, 1000);

    setTimer(timerCountDown);
  }, []);

  return (
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
