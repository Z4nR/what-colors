import React from "react";

export default function DashboardTable({ client }) {
  return (
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
          {client?.map((client) => (
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
  );
}
