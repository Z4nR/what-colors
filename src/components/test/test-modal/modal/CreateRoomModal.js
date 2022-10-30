import React from "react";
import { Controller, useForm } from "react-hook-form";
import { FiHome } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { createTestRoom } from "../../../../utils/data-api";
import { testType } from "../../../../utils/data-local";

export default function CreateRoomModal({ closeModal }) {
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      date: new Date().toISOString(),
      roomName: "",
      roomInitial: "",
      adminName: "",
      adminEmail: "",
      testType: "Fransworth Munsell-85 Hue",
      device: "",
      sameDevice: false,
    },
  });

  async function onCreateRoom(data) {
    await createTestRoom(data);
    navigate("/code-sended");
  }

  function onSubmit(data) {
    onCreateRoom(data);

    localStorage.setItem(
      "group",
      JSON.stringify({
        device: data.device,
        testType: data.testType,
        maxTES: data.maxTES,
        initial: data.roomInitial,
      })
    );
  }

  return (
    <div className="modal-input individual-input">
      <div className="header-input-data">
        <h3>Room Setting</h3>
        <div className="icon-close">
          <FiHome onClick={closeModal} />
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-data-box">
          <div className="input-data">
            <label htmlFor="roomname">Room Name</label>
            <input
              id="roomname"
              type="text"
              placeholder="Input test room name"
              maxLength="20"
              {...register("roomName", { required: true, minLength: 10 })}
            />
            {errors.roomName && errors.roomName.type === "minLength" && (
              <p style={{ color: "red" }}>Use Minimal 10 Character</p>
            )}
            {errors.roomName && errors.roomName.type === "required" && (
              <p style={{ color: "red" }}>Please Fill Room Name</p>
            )}
          </div>
          <div className="input-data">
            <label htmlFor="adminname">Admin Name</label>
            <input
              id="adminname"
              type="text"
              placeholder="Input your admin name"
              autoComplete="off"
              {...register("adminName", { required: true })}
            />
            {errors.adminName && (
              <p style={{ color: "red" }}>Input Admin Name</p>
            )}
          </div>
        </div>
        <div className="input-data-box">
          <div className="input-data">
            <label htmlFor="adminemail">Admin Email</label>
            <input
              id="adminemail"
              type="email"
              placeholder="Input your@email.xxx"
              autoComplete="off"
              {...register("adminEmail", { required: true })}
            />
            {errors.adminEmail && (
              <p style={{ color: "red" }}>Please Input Your Email</p>
            )}
          </div>
          <div className="input-data">
            <label htmlFor="tespurpose">Test Purpose</label>
            <input
              id="tespurpose"
              type="text"
              placeholder="Input your test purpose"
              autoComplete="off"
              {...register("testPurpose", { required: true })}
            />
            {errors.adminEmail && (
              <p style={{ color: "red" }}>Fill Your Test Purpose</p>
            )}
          </div>
        </div>
        <div className="input-data-box">
          <div className="input-data">
            <label htmlFor="device">Device (Optional)</label>
            <input
              id="device"
              type="text"
              placeholder="Input Device / Monitor Type"
              {...register("device")}
            />
            <div className="checkbox-device">
              <Controller
                control={control}
                name="sameDevice"
                render={({ field }) => (
                  <input type="checkbox" id="samedevice" {...field} />
                )}
              />
              <label htmlFor="samedevice"> Client Use Same Device</label>
            </div>
          </div>
          <div className="input-data">
            <div className="initial-test-box">
              <div className="initial-test">
                <label htmlFor="tesrange">Max. TES</label>
                <input
                  id="tesrange"
                  type="range"
                  min="0"
                  max="100"
                  {...register("maxTES", { required: true })}
                />
                <p>Max. TES : 100</p>
                {errors.maxTES && (
                  <p style={{ color: "red" }}>Please Set Maximal Error Score</p>
                )}
              </div>
              <div className="initial-test">
                <label className="roominitial" htmlFor="roominitial">
                  Room Initial
                </label>
                <input
                  id="roominitial"
                  type="text"
                  placeholder="Input room initial"
                  maxLength="5"
                  {...register("roomInitial", {
                    required: true,
                    minLength: 3,
                    pattern: /[A-Z0-9]/,
                  })}
                />
                <p>Example : TOI3</p>
                {errors.roomInitial &&
                  errors.roomInitial.type === "pattern" && (
                    <p style={{ color: "red" }}>Use Capital or Number</p>
                  )}
                {errors.roomInitial &&
                  errors.roomInitial.type === "minLength" && (
                    <p style={{ color: "red" }}>Inisial Room Minimal 3 Huruf</p>
                  )}
                {errors.roomInitial &&
                  errors.roomInitial.type === "required" && (
                    <p style={{ color: "red" }}>Wajib diisi</p>
                  )}
              </div>
            </div>
          </div>
        </div>
        <div className="input-data-box">
          <div className="input-data">
            <label htmlFor="method">Method</label>
            <select
              id="method"
              {...register("testType", {
                required: true,
              })}
            >
              {testType.map((option) => (
                <option key={option.type} value={option.type}>
                  {option.type}
                </option>
              ))}
            </select>
            {errors.test && (
              <p style={{ color: "red" }}>Choose One Method To Use</p>
            )}
          </div>
        </div>
        <div className="input-data-box">
          <div className="input-data">
            <button type="submit">Create Test Room</button>
          </div>
        </div>
      </form>
    </div>
  );
}
