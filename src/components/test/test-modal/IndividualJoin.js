import React from "react";
import useInput from "../../../customhooks/useInput";

function IndividualJoin() {
  const [firstName, setFirstName] = useInput("");
  const [lastName, setLastName] = useInput("");
  const [email, setEmail] = useInput("");
  const [device, setDevice] = useInput("");

  return (
    <section className="individual-modal">
      <div className="individual-input">
        <div className="input-data">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            placeholder="Input your first name"
            value={firstName}
            onChange={setFirstName}
          />
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            placeholder="Input your last name"
            value={lastName}
            onChange={setLastName}
          />
        </div>
        <div className="input-data">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Input your email"
            value={email}
            onChange={setEmail}
          />
          <label htmlFor="lastname">Device</label>
          <input
            type="text"
            placeholder="Input your test device"
            value={device}
            onChange={setDevice}
          />
        </div>
      </div>
    </section>
  );
}

export default IndividualJoin;
