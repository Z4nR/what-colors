import React from "react";
import useInput from "../../../customhooks/useInput";
//import { login } from "../../../utils/data-api";
import { createArray, genderType, testType } from "../../../utils/data-local";

function IndividualJoin() {
  const [firstName, setFirstName] = useInput("");
  const [lastName, setLastName] = useInput("");
  const [email, setEmail] = useInput("");
  const [device, setDevice] = useInput("");
  const [gender, setGender] = useInput("female");
  const [test, setTestType] = useInput("fm85");

  function onSubmitData() {
    const data = { firstName, lastName, email, device, gender, test };
    localStorage.setItem("data", data);
    createArray(test);
  }

  return (
    <div className="individual-input">
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
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Input your email"
            value={email}
            onChange={setEmail}
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

export default IndividualJoin;
