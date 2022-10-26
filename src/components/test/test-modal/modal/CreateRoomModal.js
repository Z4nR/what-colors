import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FiHome } from "react-icons/fi";
import useInput from "../../../../customhooks/useInput";
import { testType } from "../../../../utils/data-local";

export default function CreateRoomModal({ closeModal }) {
  const [device, setDevice] = useInput("");
  const [testRange, setTestRange] = useState(0);

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      date: new Date().toISOString(),
      roomName: "",
      roomInitial: "",
      adminName: "",
      adminEmail: "",
      device: "",
      testType: "Fransworth Munsell-85 Hue",
    },
  });

  function onSubmit(data) {
    localStorage.setItem("group", JSON.stringify(data));
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
              <p style={{ color: "red" }}>Nama Room Minimal 10 Karakter</p>
            )}
            {errors.roomName && errors.roomName.type === "required" && (
              <p style={{ color: "red" }}>Wajib diisi</p>
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
            {errors.adminName && <p style={{ color: "red" }}>Wajib diisi</p>}
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
            {errors.adminEmail && <p style={{ color: "red" }}>Wajib diisi</p>}
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
            {errors.adminEmail && <p style={{ color: "red" }}>Wajib diisi</p>}
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
            <div className="checkbox-device">
              <input
                type="checkbox"
                id="samedevice"
                name="samedevice"
                value="SameDevice"
              />
              <label for="samedevice"> Client Use Same Device</label>
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
                  max="50"
                  onChange={(e) => setTestRange(e.target.value)}
                  {...register("maxValue", { required: true })}
                />
                <p>Max. TES : {testRange}</p>
                {errors.maxValue && (
                  <p style={{ color: "red" }}>
                    Wajib menentukan nilai maks. error
                  </p>
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
                    <p style={{ color: "red" }}>
                      Gunakan Huruf Kapital atau Angka
                    </p>
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
              <p style={{ color: "red" }}>Wajib dipilih salah satu</p>
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
