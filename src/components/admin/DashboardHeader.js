import React from "react";

export default function DashboardHeader({ header }) {
  return (
    <div className="admin-header">
      <h2>Dashboard Admin</h2>
      <h3>
        {header?.roomName} ({header?.roomInitial})
      </h3>
    </div>
  );
}
