import React, { useEffect, useMemo, useState } from "react";
import Chart from "chart.js/auto";
import { getUserData } from "../utils/data-api";
import { useMediaQuery } from "react-responsive";

export default function ResultPage() {
  const [result, setResult] = useState(null);
  const [getDiscriminant, setDiscriminant] = useState(null);

  const isDesktop = useMediaQuery({
    query: "(min-width: 450px)",
  });

  useEffect(() => {
    const discriminantResult = localStorage.getItem("discriminantResult");
    setDiscriminant(JSON.parse(discriminantResult));

    const id = localStorage.getItem("id");

    getUserData(id).then((data) => {
      setResult(data.data);
    });
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
      },
    };

    if (getDiscriminant !== null) {
      if (isDesktop) {
        new Chart("radar-chart", config);
      }
    }
  }, [getDiscriminant, maxResult, isDesktop]);

  return (
    <section>
      <div className="result">
        <div className="data-box">
          <div className="biodata-box">
            <h3>Tester Biodata</h3>
            <div className="info-biodata">
              <p className="intro">
                Thanks for taking the test about your colorblindness prediction.
                After taking time to count the test, we will show test result
                taken by:
              </p>
              <div className="data-type-box">
                <div className="data-type">
                  <p>Name </p>
                  <p>Age </p>
                  <p>Gender </p>
                  <p>Device </p>
                </div>
                <div className="data-info">
                  <p>: {result?.fullName}</p>
                  <p> : {result?.age}</p>
                  <p> : {result?.gender}</p>
                  <p> : {result?.device}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="result-box">
            <h3>Test Result</h3>
            <div className="info-result">
              <p>Total Error Score : {result?.totalErrorScore}</p>
              <p>Comparison Result : </p>
              <table>
                <thead>
                  <tr>
                    <th>No.</th>
                    <th className="table-value">Value</th>
                  </tr>
                </thead>
              </table>
              <div className="table-compare">
                <table>
                  <tbody>
                    {result?.comparisonResults?.map((cap) => (
                      <tr className="cap-data" key={cap.number}>
                        <td>{cap.number}</td>
                        <td className="table-value">{cap.comparison}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="chart-box">
          <div className="chart-card">
            {isDesktop ? (
              <div>
                <h3>Discriminant Result</h3>
                <canvas id="radar-chart"></canvas>
              </div>
            ) : (
              <div className="info-result">
                <p>Discriminant Result : </p>
                <table>
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th className="table-value">Value</th>
                    </tr>
                  </thead>
                </table>
                <div className="table-discriminant">
                  <table>
                    <tbody>
                      {result?.discriminantResults?.map((cap) => (
                        <tr className="cap-data" key={cap.number}>
                          <td>{cap.number}</td>
                          <td className="table-value">{cap.discriminant}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
