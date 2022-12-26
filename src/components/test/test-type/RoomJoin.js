import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { verifyCode } from "../../../utils/data-api";

export default function RoomJoinTest({ openModal }) {
  const [isLoading, setLoading] = useState(false);
  const ID = 3;

  const navigate = useNavigate();
  const roomInitial = localStorage.getItem("roomInitial");

  const isMobile = useMediaQuery({
    query: "(max-width: 350px)",
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  function onVerify(data) {
    setLoading(true);
    verifyCode(data.code).then((data) => {
      setLoading(false);
      data.data === true
        ? navigate(`/dashboard/${roomInitial}/admin`)
        : openModal(ID);
    });
  }

  return isMobile ? (
    <div className="icons">
      <div className="join" />
      <div className="item-body">
        <h5>Gabung Tes</h5>
        <p>Gabung menggunakan kode yang ada</p>
        <form className="mobile-form" onSubmit={handleSubmit(onVerify)}>
          <input
            className="join-mbl"
            id="room"
            type="text"
            placeholder="Verifikasikan Kode Anda"
            maxLength="7"
            {...register("code", { required: true, pattern: /[A-Z0-9]/ })}
          />
          {errors.code && errors.code.type === "required" && (
            <p
              style={{
                color: "red",
                fontSize: "10px",
                textAlign: "center",
              }}
            >
              Isi Kode Verifikasi
            </p>
          )}
          {errors.code && errors.code.type === "pattern" && (
            <p
              style={{
                color: "red",
                fontSize: "10px",
                textAlign: "left",
                paddingLeft: "4px",
              }}
            >
              Gunakan Huruf Kapital
            </p>
          )}
          <button type="submit">Verifikasi</button>
        </form>
      </div>
    </div>
  ) : (
    <div className="test-type room-join">
      <h3>Gabung Tes</h3>
      <p>Berpartisipasilah dalam grup tes buta warna</p>
      <form onSubmit={handleSubmit(onVerify)}>
        <input
          className="join-input"
          id="room"
          type="text"
          placeholder="Verifikasikan Kode Anda"
          maxLength="7"
          style={{ textAlign: "center", marginBottom: "8px" }}
          {...register("code", { required: true, pattern: /[A-Z0-9]{7}/ })}
        />
        {errors.code && errors.code.type === "required" && (
          <p
            style={{
              color: "red",
              fontSize: "14px",
              textAlign: "center",
              marginBottom: "8px",
            }}
          >
            Isi Kode Verifikasi
          </p>
        )}
        {errors.code && errors.code.type === "pattern" && (
          <p
            style={{
              color: "red",
              fontSize: "14px",
              textAlign: "center",
              marginBottom: "8px",
            }}
          >
            Gunakan Huruf Kapital
          </p>
        )}
        {isLoading === false ? (
          <button className="join-btn room-btn" type="submit">
            Verifikasi
          </button>
        ) : (
          <button
            className="join-btn"
            type="submit"
            style={{ backgroundColor: "khaki" }}
            disabled
          >
            Loading...
          </button>
        )}
      </form>
    </div>
  );
}
