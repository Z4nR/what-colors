import React, { useEffect, useMemo, useState } from "react";
import { shuffleArray } from "../../utils/data-local";

export default function TestSheet() {
  const [getData, setGetData] = useState(null);

  useEffect(() => {
    const dataInput = localStorage.getItem("data");
    setGetData(JSON.parse(dataInput));
  }, []);

  const shuffleData = useMemo(() => {
    console.log(getData);
    return getData.value.map((item) => {
      const arrayValue = item.value;
      const filterFirst = arrayValue.filter((val) => val.status === "first");
      const filterRemovable = arrayValue.filter(
        (val) => val.status === "removable"
      );
      const filterLast = arrayValue.filter((val) => val.status === "last");
      const shuffle = shuffleArray(filterRemovable);
      const newArrayValue = [filterFirst, ...shuffle, filterLast];
      return {
        row: item.row,
        value: newArrayValue,
      };
    });
  }, [getData]);

  return (
    <section className="test-section">
      <div className="test-sheet">
        <p>
          {getData.firstName} {getData.lastName}
        </p>
        {shuffleData.map((data) => (
          <div className="row-box" id={data.row}>
            {data.value.map((item) => (
              <p>{item.number}</p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
