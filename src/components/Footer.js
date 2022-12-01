import React from "react";
import { FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="foot-desc">
        <div className="foot-desc_item">
          <p className="foot_desc">
            <b>Disclaimer! </b>
            <br />
            Situs web ini digunakan hanya untuk mendapatkan akurasi dan
            efisiensi hasil tes dengan kebutuhan tertentu dalam waktu cepat.
            Apabila memerlukan hasil tes yang lebih akurat mengenai gangguan
            buta warna. Kami anjurkan untuk ke klinik mata atau rumah sakit guna
            pemeriksaan lebih lanjut.
          </p>
          <p>
            <b className="foot_copyright">WhatColors © Copyright 2022</b>
          </p>
        </div>
      </div>
      <nav className="foot-nav">
        <ul>
          <li>
            <Link to="/">{<FiHome />}</Link>
          </li>
          <li>
            <Link to="/test">{<FiHome />}</Link>
          </li>
          <li>
            <Link to="/article">{<FiHome />}</Link>
          </li>
          <li>
            <Link to="/about">{<FiHome />}</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
