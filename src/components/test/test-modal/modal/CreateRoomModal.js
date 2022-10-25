import React from "react";
import { useForm } from "react-hook-form";
import { FiHome } from "react-icons/fi";
import useInput from "../../../../customhooks/useInput";
import { testType } from "../../../../utils/data-local";

export default function CreateRoomModal({ closeModal }) {
  const [device, setDevice] = useInput("");
  const [test, setTestType] = useInput("fm85");

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
    localStorage.setItem("data", JSON.stringify(data));
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
              {...register("roomName", { required: true })}
            />
            {errors.roomName && <p style={{ color: "red" }}>Wajib diisi</p>}
          </div>
          <div className="input-data">
            <label htmlFor="roominitial">Room Initial</label>
            <input
              id="roominitial"
              type="text"
              placeholder="Input your room initial"
              {...register("roomInitial", { required: true })}
            />
            {errors.roomInitial && <p style={{ color: "red" }}>Wajib diisi</p>}
          </div>
        </div>
        <div className="input-data-box">
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
