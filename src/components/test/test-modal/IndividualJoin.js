import React from "react";
import useInput from "../../../customhooks/useInput";

function IndividualJoin() {
  const [firstName, setFirstName] = useInput("");
  const [lastName, setLastName] = useInput("");
  const [email, setEmail] = useInput("");
  const [device, setDevice] = useInput("");

  async function onSubmitData(event) {
    event.prevenDefault();
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
          <select name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
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
          <select name="method">
            <option value="fm85">Fransworth Munsell-85 Hue</option>
            <option value="fm40">Fransworth Munsell-40 Hue</option>
            <option value="hrr">HRR</option>
            <option value="ishihara">Ishihara</option>
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
