import React, { useEffect, useState } from "react";
import { FiHome } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { ReactSortable } from "react-sortablejs";
import { addUserData } from "../utils/data-api";
import { showFormattedDateEN, shuffleArray } from "../utils/data-local";

export default function TestSheet() {
  const [getData, setGetData] = useState(null);
  const [valueList, setValueList] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const dataInput = localStorage.getItem("data");
    setGetData(JSON.parse(dataInput));
  }, []);

  const date = getData?.date;
  const testType = getData?.test;
  const first = getData?.firstname;
  const last = getData?.lastname;
  const age = getData?.age;
  const gender = getData?.gender;
  const device = getData?.device;

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
    const compare = result.map((item, rowIndex) => {
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

      return res;
    });

    const comparisonResult = compare.flat(1);

    const value = [];
    for (let i = 0; i < comparisonResult.length; i++) {
      value.push({ number: i + 1, comparison: `${comparisonResult[i]}` });
    }

    return value;
  };

  const discriminantValue = (result, initial) => {
    const discriminant = result.map((item, rowIndex) => {
      const res = [];
      const initialRow = initial[rowIndex];

      for (let i = 0; i < item.value.length; i++) {
        const resultValue = item.value[i];
        const resultNumber = resultValue.number;

        if (resultValue.status !== "removable") {
          continue;
        }

        const initialValue = initialRow.value[i];
        const initialNumber = initialValue.number;

        const countingDiscriminant =
          resultNumber >= initialNumber
            ? resultNumber - initialNumber
            : initialNumber - resultNumber;

        res.push(countingDiscriminant);
      }

      return res;
    });

    const discriminantResult = discriminant.flat(1);

    const number = [];
    for (let i = 0; i < discriminantResult.length; i++) {
      number.push(i + 1);
    }

    const value = [];
    for (let i = 0; i < discriminantResult.length; i++) {
      value.push({ number: number[i], discriminant: discriminantResult[i] });
    }

    discriminantResult.reverse();
    number.reverse();

    return {
      number: number,
      result: discriminantResult,
      value: value,
    };
  };

  const methodCalculation = (result) => {
    const method = result.map((item) => {
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

    const methodMapping = method.map((item) => item.result);
    const totalErrorScore = methodMapping.reduce((sum, cap) => sum + cap, 0);

    return totalErrorScore;
  };

  async function onAddDataUser(data) {
    await addUserData(data);
  }

  function onSubmitArray() {
    navigate("/test/result");

    const resultArray = reuniteArray();
    const initial = getData?.value;

    const compareResult = compareArray(resultArray, initial);
    const discriminantResult = discriminantValue(resultArray, initial);
    const methodCalculationResult = methodCalculation(resultArray);

    const data = {
      date,
      first,
      last,
      age,
      gender,
      device,
      testType,
      methodCalculationResult,
      compareResult,
      discriminantResult,
    };

    const user = onAddDataUser(data);

    localStorage.setItem("compareArray", JSON.stringify(compareResult));
    localStorage.setItem(
      "discriminantResult",
      JSON.stringify(discriminantResult)
    );
    localStorage.setItem(
      "methodResult",
      JSON.stringify(methodCalculationResult)
    );
  }

  return (
    <section className="test-section">
      <div className="test-sheet">
        <div className="biodata-testing">
          <h4 className="header-testing">{testType} Test</h4>
          <div className="testing-status">
            <p>{showFormattedDateEN(date)}</p>
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
            Name : {first} {last}
          </p>
          <p>Age : {age}</p>
          <p>Gender : {gender}</p>
          <p>Device : {device}</p>
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
