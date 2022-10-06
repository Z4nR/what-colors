import React, { useEffect, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import { showFormattedDateEN, shuffleArray } from "../utils/data-local";

export default function TestSheet() {
  const [getData, setGetData] = useState(null);
  const [valueList, setValueList] = useState(null);

  useEffect(() => {
    const dataInput = localStorage.getItem("data");
    setGetData(JSON.parse(dataInput));
  }, []);

  useEffect(() => {
    const shuffled = getData?.value.map((item) => {
      const arrayValue = item.value;
      const filterRemovable = arrayValue.filter(
        (val) => val.status === "removable"
      );
      const firstArray = arrayValue[0];
      const shuffle = shuffleArray(filterRemovable);
      const lastArray = arrayValue[arrayValue.length - 1];
      const newArrayValue = [...shuffle];
      return {
        row: item.row,
        value: newArrayValue,
        first: firstArray,
        last: lastArray,
      };
    });
    setValueList(shuffled);
  }, [getData]);

  const handleListChange = (row, newState) => {
    const newRemovable = valueList.map((removable) => {
      if (removable.row === row) {
        removable.value = newState;
      }

      return removable;
    });

    setValueList(newRemovable);
  };

  const reuniteArray = () => {
    const reunite = valueList?.map((item) => {
      return {
        row: item.row,
        value: [item.first, ...item.value, item.last],
      };
    });
    return reunite;
  };

  const compareArray = (result, initial) => {
    return result.map((item, rowIndex) => {
      const res = [];
      const initialRow = initial[rowIndex];

      for (let i = 0; 1 < item.value.length; i++) {
        const resultValue = item.value[i];
        const initialValue = initialRow.value[i];
        res.push(resultValue === initialValue);
      }

      return {
        row: item.row,
        result: res,
      };
    });
  };

  function onSubmitArray() {
    const resultArray = reuniteArray();
    const compareResult = compareArray(resultArray, getData?.value);
    console.log(compareResult);
  }

  return (
    <section className="test-section">
      <div className="test-sheet">
        <div className="biodata-testing">
          <p>{showFormattedDateEN(getData?.date)}</p>
          <p>
            Name : {getData?.firstName} {getData?.lastName}
          </p>
          <p>Age : {getData?.age}</p>
          <p>Gender : {getData?.gender}</p>
          <p>Device : {getData?.device}</p>
          <p>Test Type : {getData?.test}</p>
        </div>
        {valueList?.map((data) => (
          <div className="row-sheet" key={data.row}>
            <div className="row-start-box">
              <div
                className="start-row"
                key={data.first}
                style={{ backgroundColor: data.first.color }}
              >
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
              <div
                className="end-row"
                key={data.last}
                style={{ backgroundColor: data.last.color }}
              >
                <p className="row-point-explainer">End</p>
              </div>
            </div>
          </div>
        ))}
        <button
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            onSubmitArray();
          }}
        >
          Submit Result
        </button>
      </div>
    </section>
  );
}
