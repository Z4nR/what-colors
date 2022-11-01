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
    });
  }, []);

  useEffect(() => {
    const csvData = clientData?.map((c) => {
      const name = c.fullName;
      const age = c.age;
      const device = c.device;
      const status = c.status;
      const score = c.totalErrorScore;

      const comparisonId = c?.comparisonResults.map((item) => item._id);
      const comparisonKey = c?.comparisonResults.map((item) => item.comparison);

      const discriminantId = c?.discriminantResults.map((item) => item._id);
      const discriminantKey = c?.discriminantResults.map(
        (item) => item.discriminant
      );

      const header = [
        "Name",
        "Age",
        "Device",
        "Status",
        "Total Error Score",
        ...comparisonId,
        ...discriminantId,
      ];

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

    setCsvData(csvData);
  }, [clientData]);

  console.log(csvData);

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
