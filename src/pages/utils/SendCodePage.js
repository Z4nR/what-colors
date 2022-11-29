import React from "react";
import { Link } from "react-router-dom";

export default function SendCode() {
  const roomInitial = localStorage.getItem("roomInitial");

  return (
    <section>
      <div className="util-box image-sending">
        <h1>Kode Verifikasi Grup Terkirim</h1>
        <h4>
          Kode Verifikasi Grup Anda Sudah Terkirim Cek Email Anda atau Lanjut ke{" "}
          <span>
            <Link to={`/dashboard/${roomInitial}/admin`}>Dashboard</Link>
          </span>
        </h4>
      </div>
    </section>
  );
}
