import React, { useEffect, useMemo, useState } from "react";
import Chart from "chart.js/auto";
import { getUserData } from "../../utils/data-api";
import { useMediaQuery } from "react-responsive";

export default function ResultData() {
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
    <div className="result">
      <div className="data-box">
        <div className="result-box">
          <div className="info-result">
            <div className="info-result_title">
              <h3>Hasil Komparasi Warna: </h3>
              <p>
                Hasil komparasi diambil dari hasil tes yang kamu lakukan
                kemudian dibandingkan dengan nilai asli
              </p>
            </div>
            <div className="table-data">
              <table>
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  {result?.comparisonResults?.map((cap) => (
                    <tr className="cap-data" key={cap._id}>
                      <td>{cap._id}</td>
                      <td>{cap.comparison}</td>
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
            <div className="chart_item">
              <div className="info-result_title">
                <h3>Hasil Diskriminasi Warna : </h3>
                <p>
                  Hasil diskriminasi diambil dari seberapa jauh kesalahan
                  peletakan warna hasil tes yang kamu lakukan dengan posisi
                  aslinya
                </p>
              </div>
              <div className="radar-box">
                <canvas id="radar-chart" />
              </div>
            </div>
          ) : (
            <div className="info-result">
              <div className="info-result_title">
                <h3>Hasil Diskriminasi Warna : </h3>
                <p>
                  Hasil diskriminasi diambil dari seberapa jauh kesalahan
                  peletakan warna hasil tes yang kamu lakukan dengan posisi
                  aslinya
                </p>
              </div>
              <div className="table-data">
                <table>
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result?.discriminantResults?.map((cap) => (
                      <tr className="cap-data" key={cap._id}>
                        <td>{cap._id}</td>
                        <td>{cap.discriminant}</td>
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
  );
}
