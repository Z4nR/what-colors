import React from "react";
import { useForm } from "react-hook-form";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { verifyCode } from "../../../utils/data-api";

export default function RoomJoinTest({ openModal }) {
  const ID = 3;

  const navigate = useNavigate();
  const idGroup = localStorage.getItem("idGroup");

  const isMobile = useMediaQuery({
    query: "(max-width: 350px)",
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  function onVerify(data) {
    verifyCode(data.code).then((data) => {
      data.data === true
        ? navigate(`/dashboard/${idGroup}/admin`)
        : openModal(ID);
      console.log(data.data);
    });
  }

  return isMobile ? (
    <div className="icons">
      <div className="join" />
      <div className="item-body">
        <h5>Join Test</h5>
        <form className="mobile-form" onSubmit={handleSubmit(onVerify)}>
          <input
            className="join-mbl"
            id="room"
            type="text"
            placeholder="Input Verification Code"
            maxLength="7"
            {...register("code", { required: true })}
          />
          <button className="join-mbl-btn" type="submit">
            Verify
          </button>
        </form>
        {errors.code && (
          <p
            style={{
              color: "red",
              fontSize: "10px",
              textAlign: "left",
              paddingLeft: "4px",
            }}
          >
            Fill Verify Code
          </p>
        )}
      </div>
    </div>
  ) : (
    <div className="test-type room-join">
      <h3>Join Test</h3>
      <p>Join room to take color blidness test</p>
      <form onSubmit={handleSubmit(onVerify)}>
        <input
          className="join-input"
          id="room"
          type="text"
          placeholder="Input Verification Code"
          maxLength="7"
          style={{ textAlign: "center", marginBottom: "8px" }}
          {...register("code", { required: true })}
        />
        {errors.code && (
          <p style={{ color: "red", fontSize: "14px", padding: "4px" }}>
            Fill Verify Code
          </p>
        )}
        <button className="join-btn room-btn" type="submit">
          Verify
        </button>
      </form>
    </div>
  );
}
