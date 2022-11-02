import React, { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import { getClientsData, getRoomData } from "../utils/data-api";

export default function DashboardGroup() {
  const [groupData, setGroupData] = useState(null);
  const [clientData, setClientData] = useState(null);
  const [csvData, setCsvData] = useState(null);

  useEffect(() => {
    const idGroup = localStorage.getItem("idGroup");

    getRoomData(idGroup).then((data) => {
      setGroupData(data.data);
    });

    getClientsData(idGroup).then((data) => {
      setClientData(data.data);
      console.log(
        Array(data.data[0].comparisonResults.length)
          .fill(null)
          .map((_, id) => `C${id + 1}`)
      );
    });
  }, []);

  useEffect(() => {
    if (clientData !== null) {
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
      <div className="admin-page">
        <div className="admin-header">
          <h2>Admin Dashboard</h2>
          <h3>
            {groupData?.roomName} ({groupData?.roomInitial})
          </h3>
        </div>
        <div className="admin-data">
          <table className="table-client">
            <thead>
              <tr>
                <th>Name</th>
                <th>Status</th>
                <th>Total Error Score</th>
                <th>Device</th>
              </tr>
            </thead>
            <tbody>
              {clientData?.map((client) => (
                <tr key={client._id}>
                  <td>{client.fullName}</td>
                  <td>{client.status}</td>
                  <td>{client.totalErrorScore}</td>
                  <td>{client.device}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {csvData !== null ? (
          <CSVLink data={csvData} separator={";"} filename={"group-data.csv"}>
            Download Data
          </CSVLink>
        ) : (
          <p>Link Tidak Tersedia</p>
        )}
      </div>
    </section>
  );
}
