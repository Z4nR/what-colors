import React from "react";
import { CSVLink } from "react-csv";

export default function DashboardExport({ csv }) {
  return (
    <div className="csv-btn-box">
      {csv !== null ? (
        <CSVLink data={csv} separator={";"} filename={"group-data.csv"}>
          <button className="csv-btn">Export Data</button>
        </CSVLink>
      ) : (
        <p>Link Tidak Tersedia</p>
      )}
    </div>
  );
}
