import React, { useEffect, useState } from "react";
import { getClientsData, getRoomData } from "../utils/data-api";

export default function DashboardGroup() {
  const [groupData, setGroupData] = useState(null);
  const [clientData, setClientData] = useState(null);

  useEffect(() => {
    const idGroup = localStorage.getItem("idGroup");

    getRoomData(idGroup).then((data) => {
      setGroupData(data.data);
    });

    getClientsData(idGroup).then((data) => {
      setClientData(data.data);
      console.log(data.data);
    });
  }, []);

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
      </div>
    </section>
  );
}
