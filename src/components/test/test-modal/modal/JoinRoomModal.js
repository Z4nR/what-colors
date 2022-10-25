import React from "react";
import { FiHome } from "react-icons/fi";
import useInput from "../../../../customhooks/useInput";
import {
  createArray,
  genderType,
  testType,
} from "../../../../utils/data-local";

export default function JoinRoomModal({ closeModal }) {
  const [fullName, setFullName] = useInput("");
  const [age, setAge] = useInput(0);
  const [device, setDevice] = useInput("");
  const [gender, setGender] = useInput("female");
  const [test, setTestType] = useInput("fm85");

  function onSubmitData() {
    const date = new Date().toISOString();
    const value = createArray(test);
    const dataInput = {
      date,
      fullName,
      age,
      device,
      gender,
      test,
      value,
    };
    localStorage.setItem("data", dataInput);
    console.log(dataInput);
  }

  return (
    <div className="modal-input individual-input">
      <div className="header-input-data">
        <h3>Join Test Room</h3>
        <div className="icon-close">
          <FiHome onClick={closeModal} />
        </div>
      </div>
      <div className="input-data-box">
        <div className="input-data">
          <label htmlFor="fullname">Full Name</label>
          <input
            id="fullname"
            type="text"
            placeholder="Input your full name"
            autoComplete="off"
            value={fullName}
            onChange={setFullName}
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
          />
        </div>
        <div className="input-data">
          <label htmlFor="gender">Gender</label>
          <div className="gender-box">
            <div className="male-box">
              <input type="radio" id="male" name="gender" value="Male" />
              <label htmlFor="male">Male</label>
            </div>
            <div className="female-box">
              <input type="radio" id="female" name="gender" value="Female" />
              <label htmlFor="female">Female</label>
            </div>
          </div>
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
          <label htmlFor="room">Room Code</label>
          <input
            id="room"
            type="text"
            placeholder="Input your room code"
            value={device}
            onChange={setDevice}
          />
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
