import React from "react";
import { GrUser, GrLinkedin, GrGithub, GrMail } from "react-icons/gr";
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
            <Link to="/email">{<GrMail />}</Link>
          </li>
          <li>
            <a href="https://github.com/Z4nR">{<GrGithub />}</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/zulham-ari-nur-ridhwan-2a6873202">
              {<GrLinkedin />}
            </a>
          </li>
          <li>
            <a href="https://github.com/Z4nR">{<GrUser />}</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
