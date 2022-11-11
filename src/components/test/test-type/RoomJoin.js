import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { verifyCode } from "../../../utils/data-api";

export default function RoomJoinTest({ openModal }) {
  const [isLoading, setLoading] = useState(false);
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
    setLoading(true);
    verifyCode(data.code).then((data) => {
      setLoading(false);
      data.data === true
        ? navigate(`/dashboard/${idGroup}/admin`)
        : openModal(ID);
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
            {...register("code", { required: true, pattern: /[A-Z0-9]/ })}
          />
          <button className="join-mbl-btn" type="submit">
            Verify
          </button>
        </form>
        {errors.code && errors.code.type === "required" && (
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
        {errors.code && errors.code.type === "pattern" && (
          <p
            style={{
              color: "red",
              fontSize: "10px",
              textAlign: "left",
              paddingLeft: "4px",
            }}
          >
            Use Capital Character
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
            Fill Verify Code
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
            Use Capital Character
          </p>
        )}
        {isLoading === false ? (
          <button className="join-btn room-btn" type="submit">
            Verify
          </button>
        ) : (
          <button className="join-btn room-btn" type="submit" disabled>
            Loading...
          </button>
        )}
      </form>
    </div>
  );
}
