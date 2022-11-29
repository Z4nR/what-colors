import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FiHome } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { createTestRoom } from "../../../../utils/data-api";
import { testType } from "../../../../utils/data-local";

export default function CreateRoomModal({ closeModal }) {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

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
      adminEmail: "",
      testType: "Farnsworth Munsell-85 Hue",
      device: "",
      maxTES: 50,
    },
  });

  const maxTES = watch("maxTES");

  async function onCreateRoom(data) {
    await createTestRoom(data);
    navigate("/code-sended");
  }

  function onSubmit(data) {
    onCreateRoom(data);
    setLoading(true);
  }

  return (
    <div className="modal-input room-create">
      <div className="header-input-data">
        <h3>Buat Pengaturan Grup</h3>
        <div className="icon-close">
          <FiHome onClick={closeModal} />
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-data-box">
          <div className="input-data">
            <label htmlFor="roomname">Nama Grup</label>
            <input
              id="roomname"
              type="text"
              placeholder="Masukan Nama Grup"
              maxLength="20"
              {...register("roomName", { required: true, minLength: 10 })}
            />
            {errors.roomName && errors.roomName.type === "minLength" && (
              <p style={{ color: "red" }}>Gunakan Min. 10 Karakter</p>
            )}
            {errors.roomName && errors.roomName.type === "required" && (
              <p style={{ color: "red" }}>Nama Grup Wajib Diisi</p>
            )}
          </div>
          <div className="input-data">
            <label htmlFor="adminemail">Email Admin</label>
            <input
              id="adminemail"
              type="email"
              placeholder="Masukkan email anda"
              autoComplete="off"
              {...register("adminEmail", { required: true })}
            />
            {errors.adminEmail && (
              <p style={{ color: "red" }}>Email Admin Wajib Diisi</p>
            )}
          </div>
        </div>
        <div className="input-data-box">
          <div className="input-data">
            <label className="roominitial" htmlFor="roominitial">
              Inisial Grup
            </label>
            <input
              id="roominitial"
              type="text"
              placeholder="Masukkan Inisial Grup Anda"
              maxLength="5"
              {...register("roomInitial", {
                required: true,
                minLength: 3,
                pattern: /[A-Z0-9]/,
              })}
            />
            <p>Contoh : TOI3</p>
            {errors.roomInitial && errors.roomInitial.type === "pattern" && (
              <p style={{ color: "red" }}>Gunakan Huruf Kapital dan Angka</p>
            )}
            {errors.roomInitial && errors.roomInitial.type === "minLength" && (
              <p style={{ color: "red" }}>Inisial Grup Min. 3 Huruf</p>
            )}
            {errors.roomInitial && errors.roomInitial.type === "required" && (
              <p style={{ color: "red" }}>Inisial Grup Wajib diisi</p>
            )}
          </div>
          <div className="input-data">
            <label htmlFor="tesrange">Nilai Maks. Error</label>
            <input
              id="tesrange"
              type="range"
              min="0"
              max="100"
              {...register("maxTES", { required: true })}
            />
            <p>Nilai Maks. Error: {maxTES}</p>
            {errors.maxTES && (
              <p style={{ color: "red" }}>Nilai Maks. Error Wajib Ditentukan</p>
            )}
          </div>
        </div>
        <div className="input-data-box">
          <div className="input-data">
            <label htmlFor="device">Perangkat (Opsional)</label>
            <input
              id="device"
              type="text"
              placeholder="Masukan Tipe Layar / Gawai"
              {...register("device")}
            />
          </div>
          <div className="input-data">
            <label htmlFor="method">Metode</label>
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
          </div>
        </div>
        <div className="input-data-box">
          <div className="input-data">
            {isLoading === false ? (
              <button type="submit">Buat Ruang Tes</button>
            ) : (
              <button type="submit" disabled>
                Memuat...
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
