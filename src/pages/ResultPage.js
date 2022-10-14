import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";

export default function ResultPage() {
  const [getMethod, setMethod] = useState(null);
  const [getCompare, setCompare] = useState(null);
  const [getDiscriminant, setDiscriminant] = useState(null);
  const number = getDiscriminant?.number;
  console.log(number);

  const chartData = {
    labels: getDiscriminant?.number,
    datasets: [
      {
        label: "Discriminant value",
        data: getDiscriminant?.result,
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(255, 99, 132)",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
    ],
  };

  const config = {
    type: "radar",
    data: chartData,
    options: {
      elements: {
        line: {
          borderWidth: 3,
        },
      },
      scales: {
        r: {
          pointLabels: {
            color: "red",
          },
          suggestedMin: 0,
          suggestedMax: 20,
          ticks: {
            color: "red",
            stepSize: 2,
          },
        },
      },
      spanGaps: true,
      plugins: {
        title: {
          display: true,
          text: "Chart.js Radar Chart",
        },
      },
    },
  };

  useEffect(() => {
    new Chart("radar-chart", config);
    console.log(config);
  }, []);

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
      <div className="chartCard">
        <div className="chartBox">
          <canvas id="radar-chart"></canvas>
        </div>
      </div>
    </section>
  );
}
