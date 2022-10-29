import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FiHome } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { createArray } from "../../../../utils/data-local";

export default function JoinRoomModal({ closeModal }) {
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
    setValue,
    getValues,
  } = useForm({
    defaultValues: {
      date: new Date().toISOString(),
      fullName: "",
      device: "",
      gender: "",
      testType: "",
      value: {},
      isClient: true,
    },
  });

  useEffect(() => {
    const group = localStorage.getItem("group");
    if (group != null) {
      const parse = JSON.parse(group);
      setValue("device", parse.device);
      setValue("testType", parse.testType);
    }
  }, [setValue]);

  const setTestType = watch("testType");

  useEffect(() => {
    setValue("value", createArray(getValues("testType")));
  }, [setTestType, setValue, getValues]);

  function onSubmitClient(data) {
    navigate("/test/test-sheet");
    localStorage.setItem("data", JSON.stringify(data));
  }

  return (
    <div className="modal-input individual-input">
      <div className="header-input-data">
        <h3>Join Test Room</h3>
        <div className="icon-close">
          <FiHome onClick={closeModal} />
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmitClient)}>
        <div className="input-data-box">
          <div className="input-data">
            <label htmlFor="fullname">Full Name</label>
            <input
              id="fullname"
              type="text"
              placeholder="Input your full name"
              autoComplete="off"
              {...register("fullName", { required: true })}
            />
            {errors.fullName && (
              <p style={{ color: "red" }}>Fill Your Full Name</p>
            )}
          </div>
        </div>
        <div className="input-data-box">
          <div className="input-data">
            <label htmlFor="age">Age</label>
            <input
              id="age"
              type="number"
              placeholder="Input your age  (Year)"
              autoComplete="off"
              {...register("age", { required: true })}
            />
            {errors.age && (
              <p style={{ color: "red" }}>Please Input your Age</p>
            )}
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
            {errors.gender && (
              <p style={{ color: "red" }}>Please Choose Your Gender</p>
            )}
          </div>
        </div>
        <div className="input-data-box">
          <div className="input-data">
            <label htmlFor="device">Device</label>
            <input
              id="device"
              type="text"
              placeholder="Input Device / Monitor Type"
              autoComplete="off"
              {...register("device", { required: true })}
            />
            {errors.device && (
              <p style={{ color: "red" }}>Please Input Screen Spesification</p>
            )}
          </div>
          <div className="input-data">
            <label htmlFor="method">Method</label>
            <input
              id="method"
              type="text"
              readOnly
              value={getValues("testType")}
            />
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
