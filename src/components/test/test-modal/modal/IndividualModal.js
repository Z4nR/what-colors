import React from "react";
import { useForm } from "react-hook-form";
import { FiHome } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import useInput from "../../../../customhooks/useInput";
import {
  createArray,
  genderType,
  testType,
} from "../../../../utils/data-local";

export default function IndividualModal({ closeModal }) {
  const [gender, setGender] = useInput("Female");
  const [test, setTestType] = useInput("Fransworth Munsell-85 Hue");

  const navigate = useNavigate();

  const date = new Date().toISOString();
  const value = createArray(test);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    const dataInput = { date, data, gender, test, value };
    navigate("/test/test-sheet");
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-data-box">
          <div className="input-data">
            <label htmlFor="firstname">First Name</label>
            <input
              id="firstname"
              type="text"
              placeholder="Input your first name"
              autoComplete="off"
              {...register("firstname", { required: true })}
            />
            {errors.firstname && <p style={{ color: "red" }}>Wajib diisi</p>}
          </div>
          <div className="input-data">
            <label htmlFor="lastname">Last Name</label>
            <input
              id="lastname"
              type="text"
              placeholder="Input your last name"
              autoComplete="off"
              {...register("lastname", { required: true })}
            />
            {errors.lastname && <p style={{ color: "red" }}>Wajib diisi</p>}
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
              {...register("age", { required: true })}
            />
            {errors.age && <p style={{ color: "red" }}>Wajib diisi</p>}
          </div>
          <div className="input-data">
            <label htmlFor="gender">Gender</label>
            <div className="gender-box">
              <div className="male-box">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="Male"
                  {...register("gender", { required: true })}
                />
                <label htmlFor="male">Male</label>
              </div>
              <div className="female-box">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="Female"
                  {...register("gender", { required: true })}
                />
                <label htmlFor="female">Female</label>
              </div>
            </div>
            {errors.gender && <p style={{ color: "red" }}>Wajib diisi</p>}
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
              {...register("device", { required: true })}
            />
            {errors.device && <p style={{ color: "red" }}>Wajib diisi</p>}
          </div>
          <div className="input-data">
            <label htmlFor="method">Method</label>
            <select id="method" value={test} onChange={setTestType} required>
              {testType.map((option) => (
                <option key={option.type} value={option.type}>
                  {option.type}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="input-data-box">
          <div className="input-data">
            <button type="submit">Submit Data</button>
          </div>
        </div>
      </form>
    </div>
  );
}
