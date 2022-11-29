import React, { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import { getClientsData, getRoomData } from "../utils/data-api";
import LoadingPage from "./utils/LoadingPage";

export default function DashboardGroup() {
  const [isLoading, setLoading] = useState(true);
  const [groupData, setGroupData] = useState(null);
  const [clientData, setClientData] = useState(null);
  const [csvData, setCsvData] = useState(null);

  useEffect(() => {
    const idGroup = localStorage.getItem("idGroup");

    getRoomData(idGroup).then((data) => {
      setGroupData(data.data);
      setLoading(false);
    });

    setInterval(() => {
      getClientsData(idGroup).then((data) => {
        setClientData(data.data);
      });
    }, 10000);
  }, []);

  useEffect(() => {
    if (clientData && !!clientData.length) {
      const comparisonId = Array(clientData[0].comparisonResults.length)
        .fill(null)
        .map((_, id) => `C${id + 1}`);

      const discriminantId = Array(clientData[0].discriminantResults.length)
        .fill(null)
        .map((_, id) => `D${id + 1}`);

      const header = [
        "Name",
        "Age",
        "Device",
        "Status",
        "Total Error Score",
        ...comparisonId,
        ...discriminantId,
      ];

      const csvData = clientData?.map((c) => {
        const name = c.fullName;
        const age = c.age;
        const device = c.device;
        const status = c.status;
        const score = c.totalErrorScore;
        const comparisonKey = c?.comparisonResults.map(
          (item) => item.comparison
        );
        const discriminantKey = c?.discriminantResults.map(
          (item) => item.discriminant
        );

        const newArray = [
          name,
          age,
          device,
          status,
          score,
          ...comparisonKey,
          ...discriminantKey,
        ];

        return newArray;
      });

      const finalData = [header, ...csvData];

      setCsvData(finalData);
    }
  }, [clientData]);

  return (
    <section>
      {isLoading === false ? (
        <div className="admin-page">
          <div className="admin-header">
            <h2>Dashboard Admin</h2>
            <h3>
              {groupData?.roomName} ({groupData?.roomInitial})
            </h3>
          </div>
          <div className="table-client">
            <table>
              <thead>
                <tr>
                  <th>Nama</th>
                  <th>Status</th>
                  <th>Jumlah Skor Eror</th>
                  <th>Perangkat</th>
                </tr>
              </thead>
              <tbody>
                {clientData?.map((client) => (
                  <tr className="cap-data" key={client._id}>
                    <td>{client.fullName}</td>
                    <td>{client.status}</td>
                    <td>{client.totalErrorScore}</td>
                    <td>{client.device}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="csv-btn-box">
            {csvData !== null ? (
              <CSVLink
                data={csvData}
                separator={";"}
                filename={"group-data.csv"}
              >
                <button className="csv-btn">Export Data</button>
              </CSVLink>
            ) : (
              <p>Link Tidak Tersedia</p>
            )}
          </div>
        </div>
      ) : (
        <div className="util-box">
          <LoadingPage />
          <p>Harap Tunggu</p>
        </div>
      )}
    </section>
  );
}
