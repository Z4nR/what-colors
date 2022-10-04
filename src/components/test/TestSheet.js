import React, { useEffect, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import { shuffleArray } from "../../utils/data-local";

export default function TestSheet() {
  const [getData, setGetData] = useState(null);
  const [valueList, setRemovableList] = useState(null);

  const handleListChange = (row, newState) => {
    const newRemovable = valueList.map((removable) => {
      if (removable.row === row) {
        removable.value = newState;
      }

      return removable;
    });

    setRemovableList(newRemovable);
  };

  useEffect(() => {
    const dataInput = localStorage.getItem("data");
    setGetData(JSON.parse(dataInput));
  }, []);

  useEffect(() => {
    const first = getData?.value.map((item) => {
      const arrayValue = item.value;
      const filterFirst = arrayValue.find((val) => val.status === "first");
      return {
        row: item.row,
        value: filterFirst,
      };
    });
    console.log(first);
    const shuffled = getData?.value.map((item) => {
      const arrayValue = item.value;
      const filterRemovable = arrayValue.filter(
        (val) => val.status === "removable"
      );
      const shuffle = shuffleArray(filterRemovable);
      const newArrayValue = [...shuffle];
      return {
        row: item.row,
        value: newArrayValue,
      };
    });
    const last = getData?.value.map((item) => {
      const arrayValue = item.value;
      const filterLast = arrayValue.find((val) => val.status === "last");
      return {
        row: item.row,
        value: filterLast,
      };
    });
    console.log(last);
    setRemovableList(shuffled);
  }, [getData]);

  return (
    <section className="test-section">
      <div className="test-sheet">
        <p>
          {getData?.firstName} {getData?.lastName}
        </p>
        {valueList?.map((data) => (
          <div className="row-sheet" key={data.row}>
            <div className="row-start-box">
              <div className="start-row" style={{ backgroundColor: "#000" }}>
                <p className="row-point-explainer">Start</p>
              </div>
            </div>
            <ReactSortable
              className="row-box"
              group={{ name: "valueByRow", put: false }}
              animation={200}
              ghostClass="ghostbox"
              list={data.value}
              setList={(newState) => handleListChange(data.row, newState)}
            >
              {data.value.map((item) => (
                <div
                  className="row-value"
                  key={item.number}
                  style={{ backgroundColor: item.color }}
                />
              ))}
            </ReactSortable>
            <div className="row-end-box">
              <div className="end-row" style={{ backgroundColor: "#000" }}>
                <p className="row-point-explainer">End</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
