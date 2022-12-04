import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { getUserData } from "../../utils/data-api";

export default function ResultBiodata() {
  const [biodata, setBiodata] = useState(null);

  const isDesktop = useMediaQuery({
    query: "(min-width: 450px)",
  });

  useEffect(() => {
    const id = localStorage.getItem("id");

    getUserData(id).then((data) => {
      setBiodata(data.data);
    });
  }, []);

  return (
    <div className="result">
      <div className="biodata_item">
        <h3>Halllo {biodata.fullName}</h3>
      </div>
    </div>
  );
}
