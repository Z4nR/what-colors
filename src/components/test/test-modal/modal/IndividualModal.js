import React from "react";
import { FiHome } from "react-icons/fi";
import useInput from "../../../../customhooks/useInput";
import {
  genderType,
  shuffleArray,
  testType,
} from "../../../../utils/data-local";
//import { login } from "../../../utils/data-api";;

export default function IndividualModal({ closeModal }) {
  const [firstName, setFirstName] = useInput("");
  const [lastName, setLastName] = useInput("");
  const [age, setAge] = useInput(0);
  const [device, setDevice] = useInput("");
  const [gender, setGender] = useInput("female");
  const [test, setTestType] = useInput("fm85");

  function onSubmitData() {
    const date = new Date().toISOString();
    const value = shuffleArray(test);
    const dataInput = {
      date,
      firstName,
      lastName,
      age,
      device,
      gender,
      test,
      value,
    };
    localStorage.setItem("data", JSON.stringify(dataInput));
    console.log(dataInput);
  }

  return (
    <div className="modal-input individual-input">
      <div className="header-input-data">
        <h3 className="font-header">Individual Data</h3>
        <div className="icon-delete">
          <FiHome onClick={closeModal} />
        </div>
      </div>
      <div className="input-data-box">
        <div className="input-data">
          <label htmlFor="firstname">First Name</label>
          <input
            id="firstname"
            type="text"
            placeholder="Input your first name"
            value={firstName}
            onChange={setFirstName}
          />
        </div>
        <div className="input-data">
          <label htmlFor="lastname">Last Name</label>
          <input
            id="lastname"
            type="text"
            placeholder="Input your last name"
            value={lastName}
            onChange={setLastName}
          />
        </div>
      </div>
      <div className="input-data-box">
        <div className="input-data">
          <label htmlFor="age">Age (in Year)</label>
          <input
            id="age"
            type="number"
            placeholder="Input your age"
            value={age}
            onChange={setAge}
          />
        </div>
        <div className="input-data">
          <label htmlFor="gender">Gender</label>
          <select id="gender" value={gender} onChange={setGender}>
            {genderType.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="input-data-box">
        <div className="input-data">
          <label htmlFor="device">Device</label>
          <input
            id="device"
            type="text"
            placeholder="Input your type of test device"
            value={device}
            onChange={setDevice}
          />
        </div>
        <div className="input-data">
          <label htmlFor="method">Method</label>
          <select id="method" value={test} onChange={setTestType}>
            {testType.map((option) => (
              <option key={option.type} value={option.type}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="input-data-box">
        <div className="input-data">
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault();
              onSubmitData();
            }}
          >
            Submit Data
          </button>
        </div>
      </div>
    </div>
  );
}
