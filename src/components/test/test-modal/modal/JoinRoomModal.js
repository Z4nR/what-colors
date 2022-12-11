import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { GrClose } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import LoadingPage from "../../../../pages/utils/LoadingPage";
import { getRoomData } from "../../../../utils/data-api";
import { createArray } from "../../../../utils/data-local";

export default function JoinRoomModal({ closeModal }) {
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      date: new Date().toISOString(),
      fullName: "",
      device: "",
      gender: "",
      value: {},
      isClient: true,
    },
  });

  useEffect(() => {
    const idGroup = localStorage.getItem("idGroup");

    getRoomData(idGroup).then((data) => {
      const group = data.data;

      const device = group.device;
      const testType = group.testType;

      setValue("device", device);
      setValue("testType", testType);

      const value = createArray(group.testType);
      setValue("value", value);

      setLoading(false);
    });
  }, [setValue]);

  function onSubmitClient(data) {
    navigate("/test/test-sheet");
    localStorage.setItem("data", JSON.stringify(data));
  }

  return (
    <div className="modal-input client-join">
      <div className="header-input-data">
        <h3>Data Peserta Tes</h3>
        <div className="icon-close">
          <GrClose onClick={closeModal} />
        </div>
      </div>
      {isLoading === false ? (
        <form onSubmit={handleSubmit(onSubmitClient)}>
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
              {errors.fullName && (
                <p style={{ color: "red" }}>Punya nama kan?</p>
              )}
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
                {...register("age", { required: true })}
              />
              {errors.age && (
                <p style={{ color: "red" }}>Harap Isi Usia Anda</p>
              )}
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
              <input
                id="method"
                type="text"
                readOnly
                {...register("testType", { required: true })}
              />
            </div>
          </div>
          <div className="input-data-box">
            <div className="input-data">
              <button type="submit">Gabung Tes</button>
            </div>
          </div>
        </form>
      ) : (
        <LoadingPage />
      )}
    </div>
  );
}
