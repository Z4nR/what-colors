import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { GrClose } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { createArray, testType } from "../../../../utils/data-local";

export default function IndividualModal({ closeModal }) {
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      date: new Date().toISOString(),
      fullName: "",
      device: "",
      gender: "",
      testType: "Farnsworth Munsell-85 Hue",
      value: {},
      isClient: false,
    },
  });

  const testValue = watch("testType");

  useEffect(() => {
    setValue("value", createArray(testValue));
  }, [setValue, testValue]);

  function onSubmit(data) {
    navigate("/test/test-sheet");
    localStorage.setItem("data", JSON.stringify(data));
  }

  return (
    <div className="modal-input individual-input">
      <div className="header-input-data">
        <h3>Data Pribadi</h3>
        <div className="icon-close">
          <GrClose onClick={closeModal} />
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-data-box">
          <div className="input-data">
            <label htmlFor="fullname">Nama Lengkap</label>
            <input
              id="fullname"
              type="text"
              placeholder="Masukkan Nama Lengkap Anda"
              autoComplete="off"
              {...register("fullName", { required: true })}
            />
            {errors.fullName && <p style={{ color: "red" }}>Punya nama kan?</p>}
          </div>
        </div>
        <div className="input-data-box">
          <div className="input-data">
            <label htmlFor="age">Usia (Tahun)</label>
            <input
              id="age"
              type="number"
              placeholder="Masukkan Usia Anda (Min. 18 Tahun)"
              autoComplete="off"
              min="18"
              max="70"
              {...register("age", { required: true })}
            />
            {errors.age && <p style={{ color: "red" }}>Harap Isi Usia Anda</p>}
          </div>
          <div className="input-data">
            <label htmlFor="gender">Jenis Kelamin</label>
            <div className="gender-box">
              <div className="male-box">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="Male"
                  {...register("gender", { required: true })}
                />
                <label htmlFor="male">Pria</label>
              </div>
              <div className="female-box">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="Female"
                  {...register("gender", { required: true })}
                />
                <label htmlFor="female">Wanita</label>
              </div>
            </div>
            {errors.gender && (
              <p style={{ color: "red" }}>Maaf Manusia Hanya Ada 2 Jenis</p>
            )}
          </div>
        </div>
        <div className="input-data-box">
          <div className="input-data">
            <label htmlFor="device">Perangkat</label>
            <input
              id="device"
              type="text"
              placeholder="Masukkan Tipe Layar / Gawai"
              autoComplete="off"
              {...register("device", { required: true })}
            />
            {errors.device && (
              <p style={{ color: "red" }}>Harap Isi Spesifikasi Perangkat</p>
            )}
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
            <button type="submit">Buat Tes</button>
          </div>
        </div>
      </form>
    </div>
  );
}
