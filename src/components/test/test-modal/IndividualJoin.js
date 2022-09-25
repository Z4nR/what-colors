import React from "react";
import useInput from "../../../customhooks/useInput";
//import { login } from "../../../utils/data-api";
import { genderType, testType } from "../../../utils/data-local";

function IndividualJoin() {
  const [firstName, setFirstName] = useInput("");
  const [lastName, setLastName] = useInput("");
  const [email, setEmail] = useInput("");
  const [device, setDevice] = useInput("");
  const [gender, setGender] = useInput("");
  const [test, setTestType] = useInput("");

  async function onSubmitData(event) {
    event.prevenDefault();

    const data = (firstName, lastName, email, device, gender);
    localStorage.setItem("data", data);
  }

  return (
    <div className="individual-input">
      <div className="input-data-box">
        <div className="input-data">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            placeholder="Input your first name"
            value={firstName}
            onChange={setFirstName}
          />
        </div>
        <div className="input-data">
          <label htmlFor="lastname">Last Name</label>
          <input
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
            type="email"
            placeholder="Input your email"
            value={email}
            onChange={setEmail}
          />
        </div>
        <div className="input-data">
          <label htmlFor="gender">Gender</label>
          <select name="gender" value={gender} onChange={setGender}>
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
            type="text"
            placeholder="Input your type of test device"
            value={device}
            onChange={setDevice}
          />
        </div>
        <div className="input-data">
          <label htmlFor="method">Method</label>
          <select name="method" value={test} onChange={setTestType}>
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
          <button type="button" onClick={onSubmitData}>
            Submit Data
          </button>
        </div>
      </div>
    </div>
  );
}

export default IndividualJoin;
