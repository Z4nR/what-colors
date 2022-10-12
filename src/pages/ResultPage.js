import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function ResultPage() {
  const [getMethod, setMethod] = useState(null);
  const [getCompare, setCompare] = useState(null);
  const [getDiscriminant, setDiscriminant] = useState(null);

  const chartData = {
    label: getDiscriminant?.number,
    datasets: [
      {
        label: "Discriminant value",
        data: getDiscriminant?.result,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    const methodResult = localStorage.getItem("methodResult");
    const compareArray = localStorage.getItem("compareArray");
    const discriminantResult = localStorage.getItem("discriminantResult");

    setMethod(JSON.parse(methodResult));
    setCompare(JSON.parse(compareArray));
    setDiscriminant(JSON.parse(discriminantResult));
  }, []);

  return (
    <section>
      <p>{getMethod}</p>
      <Radar data={chartData} />
    </section>
  );
}
