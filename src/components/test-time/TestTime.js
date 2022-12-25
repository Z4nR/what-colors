import React, { useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { ReactSortable } from "react-sortablejs";
import { addClientData, addUserData, getRoomData } from "../../utils/data-api";
import { showFormattedDateID, shuffleArray } from "../../utils/data-local";
import {
  blindStatus,
  blindType,
  colorBlind,
  compareArray,
  discriminantValue,
  methodCalculation,
} from "../../utils/method-loader";
import LoadingPage from "../../pages/utils/LoadingPage";

export default function TestTime() {
  const [getData, setGetData] = useState(null);
  const [getGroupData, setGroupData] = useState(null);
  const [valueList, setValueList] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const dataInput = localStorage.getItem("data");
    setGetData(JSON.parse(dataInput));
  }, []);

  const isClient = getData?.isClient;

  useEffect(() => {
    if (isClient === true) {
      const idGroup = localStorage.getItem("idGroup");
      getRoomData(idGroup).then((data) => {
        setLoading(false);
        setGroupData(data.data);
      });
    } else {
      setLoading(false);
    }
  }, [isClient]);

  const idGroup = getGroupData?._id;

  const date = getData?.date;
  const testType = getData?.testType;
  const fullName =
    isClient === true
      ? `${getGroupData?.roomInitial} ${getData?.fullName}`
      : getData?.fullName;
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

  async function onAddDataUser(data) {
    await addUserData(data);
    navigate("/show-result");
  }

  async function onAddDataClient(data) {
    await addClientData(data);
    navigate("/thanks");
  }

  function onSubmitArray() {
    setLoading(true);

    const resultArray = reuniteArray();
    const initial = getData?.value;

    const comparison = compareArray(resultArray, initial);
    const discriminant = discriminantValue(resultArray, initial);
    const totalErrorScore = methodCalculation(resultArray);

    const status =
      totalErrorScore > getGroupData?.maxTES ? "Tidak Lolos" : "Lolos";

    const comparisonResults = comparison.value;
    const discriminantResults = discriminant.value;

    const findBlindness = colorBlind(testType, comparison.result);
    const colorBlindType = blindType(testType, totalErrorScore, findBlindness);
    const errorScoreStatus = blindStatus(testType, totalErrorScore);

    const dataUser = {
      date,
      fullName,
      age,
      gender,
      device,
      testType,
      totalErrorScore,
      errorScoreStatus,
      colorBlindType,
      comparisonResults,
      discriminantResults,
    };

    const dataClient = { idGroup, ...dataUser, status };

    if (isClient === false) {
      onAddDataUser(dataUser);
    } else {
      onAddDataClient(dataClient);
    }

    localStorage.setItem("discriminantResult", JSON.stringify(discriminant));
  }

  return isLoading === false ? (
    <div className="test-section">
      <div className="test-sheet">
        <div className="biodata-testing">
          <h4 className="header-testing">Tes {testType}</h4>
          <div className="testing-status">
            <p>{showFormattedDateID(date)}</p>
            <div className="icon-close-test">
              <GrClose
                onClick={(event) => {
                  event.preventDefault();
                  navigate("/test");
                }}
              />
            </div>
          </div>
          <table className="table-biodata">
            <tbody>
              <tr>
                <td>Nama </td>
                <td>: {fullName}</td>
              </tr>
              <tr>
                <td>Umur </td>
                <td>: {age}</td>
              </tr>
              <tr>
                <td>Jenis Kelamin </td>
                <td>: {gender}</td>
              </tr>
              <tr>
                <td>Perangkat (Monitor / Gawai) </td>
                <td>: {device}</td>
              </tr>
            </tbody>
          </table>
        </div>
        {valueList?.map((data) => (
          <div className="row-sheet" key={data.row}>
            <div className="row-start-box">
              <div
                className="start-row"
                key={data.first}
                style={{ backgroundColor: data.first.color }}
              >
                <p className="row-point-explainer">Awal</p>
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
                <p className="row-point-explainer">Akhir</p>
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
          Selesai
        </button>
      </div>
    </div>
  ) : (
    <div className="util-box">
      <LoadingPage />
      <p>Harap Tunggu</p>
    </div>
  );
}
