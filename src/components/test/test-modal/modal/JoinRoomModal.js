import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FiHome } from "react-icons/fi";
import { createArray } from "../../../../utils/data-local";

export default function JoinRoomModal({ closeModal }) {
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

  useEffect(() => {
    setValue("value", createArray(getValues("testType")));
  }, [watch("testType")]);

  function onSubmitClient(data) {
    localStorage.setItem("client", JSON.stringify(data));
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
            <label htmlFor="room">Room Code</label>
            <input id="room" type="text" placeholder="Input your room code" />
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
              {...register("fullName", { required: true })}
            />
            {errors.fullName && <p style={{ color: "red" }}>Wajib diisi</p>}
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
            {errors.gender && (
              <p style={{ color: "red" }}>Wajib dipilih salah satu</p>
            )}
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
            <input
              id="method"
              type="text"
              readOnly
              value={getValues("testType")}
            />
            {errors.test && (
              <p style={{ color: "red" }}>Wajib dipilih salah satu</p>
            )}
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
