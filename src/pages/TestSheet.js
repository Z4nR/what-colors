import React, { useEffect, useState } from "react";
import { FiHome } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { ReactSortable } from "react-sortablejs";
import { showFormattedDateEN, shuffleArray } from "../utils/data-local";

export default function TestSheet() {
  const [getData, setGetData] = useState(null);
  const [valueList, setValueList] = useState(null);
  const navigate = useNavigate();

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

      for (let i = 0; i < item.value.length; i++) {
        const resultValue = item.value[i];
        if (resultValue.status !== "removable") {
          continue;
        }

        const initialValue = initialRow.value[i];
        res.push(resultValue === initialValue);
      }

      return {
        row: item.row,
        result: res,
      };
    });
  };

  const discriminantValue = (result, initial) => {
    return result.map((item, rowIndex) => {
      const res = [];
      const initialRow = initial[rowIndex];

      for (let i = 0; i < item.value.length; i++) {
        const resultValue = item.value[i];
        if (resultValue.status !== "removable") {
          continue;
        }

        const resultNumber = resultValue.number;

        const initialValue = initialRow.value[i];
        const initialNumber = initialValue.number;

        const countingDiscriminant =
          resultNumber >= initialNumber
            ? resultNumber - initialNumber
            : initialNumber - resultNumber;

        res.push(countingDiscriminant);
      }

      return {
        row: item.row,
        result: res,
      };
    });
  };

  const methodCalculation = (result) => {
    return result.map((item) => {
      const res = [];

      for (let i = 0; i < item.value.length; i++) {
        const iCap = item.value[i];
        if (iCap.status !== "removable") {
          continue;
        }
        const capNumber = iCap.number;

        const beforeCap = item.value[i - 1];
        const capBefore = beforeCap.number;

        const afterCap = item.value[i + 1];
        const capAfter = afterCap.number;

        const beforeCapCount = capNumber - capBefore;
        const afterCapCount = capAfter - capNumber;
        const totalCapError = beforeCapCount + afterCapCount;
        const countingMethod = Math.abs(totalCapError - 2);

        res.push(countingMethod);
      }

      const result = res.reduce((sum, cap) => sum + cap, 0);

      return {
        result: result,
      };
    });
  };

  function onSubmitArray() {
    navigate("/test/result");

    const resultArray = reuniteArray();
    const initial = getData?.value;

    const compareResult = compareArray(resultArray, initial);
    const discriminantResult = discriminantValue(resultArray, initial);
    const methodCalculationResult = methodCalculation(resultArray);

    localStorage.setItem("compareArray", JSON.stringify(compareResult));
    localStorage.setItem(
      "discirminantResult",
      JSON.stringify(discriminantResult)
    );
    localStorage.setItem(
      "methodResult",
      JSON.stringify(methodCalculationResult)
    );

    console.log(compareResult);
    console.log(methodCalculationResult);
    console.log(discriminantResult);
  }

  return (
    <section className="test-section">
      <div className="test-sheet">
        <div className="biodata-testing">
          <h4 className="header-testing">{getData?.test} Test</h4>
          <div className="testing-status">
            <p>{showFormattedDateEN(getData?.date)}</p>
            <div className="icon-close-test">
              <FiHome
                onClick={(event) => {
                  event.preventDefault();
                  navigate("/test");
                }}
              />
            </div>
          </div>
          <p>
            Name : {getData?.firstName} {getData?.lastName}
          </p>
          <p>Age : {getData?.age}</p>
          <p>Gender : {getData?.gender}</p>
          <p>Device : {getData?.device}</p>
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
                  key={item.color}
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
