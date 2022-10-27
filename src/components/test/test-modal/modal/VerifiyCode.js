import React from "react";
import { useForm } from "react-hook-form";
import { FiHome } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function VerifyCode({ closeModal }) {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      code: "",
    },
  });

  function onVerify(data) {
    navigate("/test/test-sheet");
  }

  return (
    <div className="modal-input individual-input">
      <div className="header-input-data">
        <h3>Verify Code</h3>
        <div className="icon-close">
          <FiHome onClick={closeModal} />
        </div>
      </div>
      <form onSubmit={handleSubmit(onVerify)}>
        <div className="input-data-box">
          <div className="verify-code-box">
            <div className="verify-code-input">
              <input
                id="room"
                type="text"
                placeholder="Input Verification Code"
                maxLength="7"
                {...register("code", { required: true })}
              />
              {errors.code && <p style={{ color: "red" }}>Fill Verify Code</p>}
            </div>
            <div className="verify-code-btn">
              <button type="submit">Verify</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
