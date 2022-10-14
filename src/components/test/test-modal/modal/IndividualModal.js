import React from "react";
import { FiHome } from "react-icons/fi";
import useInput from "../../../../customhooks/useInput";
import {
  createArray,
  genderType,
  testType,
} from "../../../../utils/data-local";

export default function IndividualModal({ closeModal, openTestSheet }) {
  const [firstName, setFirstName] = useInput("");
  const [lastName, setLastName] = useInput("");
  const [age, setAge] = useInput(0);
  const [device, setDevice] = useInput("");
  const [gender, setGender] = useInput("Female");
  const [test, setTestType] = useInput("Fransworth Munsell-85 Hue");

  const date = new Date().toISOString();
  const value = createArray(test);
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

  function onSubmitData() {
    localStorage.setItem("data", JSON.stringify(dataInput));
  }

  return (
    <div className="modal-input individual-input">
      <div className="header-input-data">
        <h3>Individual Data</h3>
        <div className="icon-close">
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
            autoComplete="off"
            value={firstName}
            onChange={setFirstName}
            required
          />
        </div>
        <div className="input-data">
          <label htmlFor="lastname">Last Name</label>
          <input
            id="lastname"
            type="text"
            placeholder="Input your last name"
            autoComplete="off"
            value={lastName}
            onChange={setLastName}
            required
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
            autoComplete="off"
            value={age}
            onChange={setAge}
            required
          />
        </div>
        <div className="input-data">
          <label htmlFor="gender">Gender</label>
          <select id="gender" value={gender} onChange={setGender} required>
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
            autoComplete="off"
            value={device}
            onChange={setDevice}
            required
          />
        </div>
        <div className="input-data">
          <label htmlFor="method">Method</label>
          <select id="method" value={test} onChange={setTestType} required>
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
              openTestSheet();
              onSubmitData();
              closeModal();
            }}
          >
            Submit Data
          </button>
        </div>
      </div>
    </div>
  );
}
