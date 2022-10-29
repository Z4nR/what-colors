import React, { useEffect, useState } from "react";
import { getClientsData, getRoomData } from "../utils/data-api";

export default function DashboardGroup() {
  const [groupData, setGroupData] = useState(null);
  const [clientData, setClientData] = useState(null);

  useEffect(() => {
    const idGroup = localStorage.getItem("idGroup");

    getRoomData(idGroup).then((data) => {
      setGroupData(data.data);
      console.log(data.data);
    });

    getClientsData(idGroup).then((data) => {
      setClientData(data.data);
      console.log(data.data);
    });
  }, []);

  return (
    <section>
      <p>{groupData?.roomName}</p>
    </section>
  );
}
