import React, { useEffect, useMemo, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import { shuffleArray } from "../../utils/data-local";

export default function TestSheet() {
  const [getData, setGetData] = useState(null);

  useEffect(() => {
    const dataInput = localStorage.getItem("data");
    setGetData(JSON.parse(dataInput));
  }, []);

  const shuffleData = useMemo(() => {
    return getData?.value.map((item) => {
      const arrayValue = item.value;
      const filterRemovable = arrayValue.filter(
        (val) => val.status === "removable"
      );
      const shuffle = shuffleArray(filterRemovable);
      const newArrayValue = [
        arrayValue[0],
        ...shuffle,
        arrayValue[arrayValue.length - 1],
      ];
      return {
        row: item.row,
        value: newArrayValue,
      };
    });
  }, [getData]);

  const [removableList, setRemovableList] = useState(null);

  return (
    <section className="test-section">
      <div className="test-sheet">
        <p>
          {getData?.firstName} {getData?.lastName}
        </p>
        {shuffleData?.map((data) => (
          <div className="row-box" id={data.row}>
            <ReactSortable list={removableList} setList={setRemovableList}>
              {data.value.map((item) => (
                <p
                  className="row-value"
                  key={item.status}
                  style={{ color: item.color }}
                >
                  {item.number}
                </p>
              ))}
            </ReactSortable>
          </div>
        ))}
      </div>
    </section>
  );
}
