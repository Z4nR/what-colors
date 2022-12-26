import React, { useEffect, useState } from "react";
import DashboardExport from "../components/admin/DashboardExport";
import DashboardHeader from "../components/admin/DashboardHeader";
import DashboardTable from "../components/admin/DashboardTable";
import { getClientsData, getRoomData } from "../utils/data-api";
import LoadingPage from "./utils/LoadingPage";

export default function DashboardGroup() {
  const [isLoading, setLoading] = useState(true);
  const [group, setGroup] = useState(null);
  const [client, setClient] = useState(null);
  const [csv, setCsv] = useState(null);

  useEffect(() => {
    const idGroup = localStorage.getItem("idGroup");

    getRoomData(idGroup).then((data) => {
      setGroup(data.data);
      setLoading(false);
    });

    setInterval(() => {
      getClientsData(idGroup).then((data) => {
        setClient(data.data);
      });
    }, 10000);
  }, []);

  useEffect(() => {
    if (client && !!client.length) {
      const comparisonId = Array(client[0].comparisonResults.length)
        .fill(null)
        .map((_, id) => `C${id + 1}`);

      const discriminantId = Array(client[0].discriminantResults.length)
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

      const csvData = client?.map((c) => {
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

      setCsv(finalData);
    }
  }, [client]);

  return (
    <section>
      {isLoading === false ? (
        <div className="admin-page">
          <DashboardHeader header={group} />
          <DashboardTable client={client} />
          <DashboardExport csv={csv} />
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
