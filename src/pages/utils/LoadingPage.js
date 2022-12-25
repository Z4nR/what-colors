import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoadingPage() {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer === 0) {
      navigate("/slow-inet");
      return;
    }
    setTimeout(() => setTimer(timer - 1), 1000);
  }, [timer, navigate]);

  return <div className="loading" />;
}
