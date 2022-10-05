import React, { useEffect, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import { showFormattedDateEN, shuffleArray } from "../../utils/data-local";

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

  function onSubmitArray() {
    console.log(valueList);
    return valueList;
  }

  const compareArray = (initiate, result) => {
    console.log(initiate, result);
  };

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
    setRemovableList(shuffled);
  }, [getData]);

  const reuniteArray = () => {
    const reunite = valueList?.map((item) => {
      const firstArray = item.first;
      const arrayValue = item.value;
      const filterRemovable = arrayValue.filter(
        (val) => val.status === "removable"
      );
      const lastArray = item.last;
      const reuniteArrayValue = [firstArray, ...filterRemovable, lastArray];
      return {
        row: item.row,
        value: reuniteArrayValue,
      };
    });
    console.log(reunite);
    return reunite;
  };

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
          <p>Gender : {getData?.device}</p>
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
            compareArray(getData?.value, reuniteArray());
          }}
        >
          Submit Result
        </button>
      </div>
    </section>
  );
}
