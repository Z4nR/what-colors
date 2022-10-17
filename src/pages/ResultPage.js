import React, { useEffect, useMemo, useState } from "react";
import Chart from "chart.js/auto";

export default function ResultPage() {
  const [getBiodata, setBiodata] = useState(null);
  const [getMethod, setMethod] = useState(null);
  const [getCompare, setCompare] = useState(null);
  const [getDiscriminant, setDiscriminant] = useState(null);

  useEffect(() => {
    const biodata = localStorage.getItem("data");
    const methodResult = localStorage.getItem("methodResult");
    const compareArray = localStorage.getItem("compareArray");
    const discriminantResult = localStorage.getItem("discriminantResult");

    setBiodata(JSON.parse(biodata));
    setMethod(JSON.parse(methodResult));
    setCompare(JSON.parse(compareArray));
    setDiscriminant(JSON.parse(discriminantResult));
  }, []);

  const maxResult = useMemo(() => {
    if (getDiscriminant !== null) {
      Math.max(...getDiscriminant?.result);
    }
  }, [getDiscriminant]);

  useEffect(() => {
    const label = getDiscriminant?.number;
    const data = getDiscriminant?.result;

    const chartData = {
      labels: label,
      datasets: [
        {
          label: "Hue Discriminant",
          data: data,
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
              color: "black",
            },
            suggestedMin: 0,
            suggestedMax: maxResult,
            ticks: {
              color: "blue",
              stepSize: 2,
            },
          },
        },
        spanGaps: true,
        plugins: {
          title: {
            display: true,
            text: "Discriminant Cap Value Test Result",
          },
        },
      },
    };

    if (getDiscriminant !== null) {
      new Chart("radar-chart", config);
    }
  }, [getDiscriminant, maxResult]);

  return (
    <section>
      <div className="result-box">
        <div className="biodata-box">
          <p>
            Name : {getBiodata?.firstName} {getBiodata?.lastName}
          </p>
        </div>
        <div className="result-data">
          <p>Total Error Score: {getMethod}</p>
        </div>
        <div className="chart-box">
          <div className="chart-card">
            <canvas id="radar-chart"></canvas>
          </div>
        </div>
      </div>
    </section>
  );
}
