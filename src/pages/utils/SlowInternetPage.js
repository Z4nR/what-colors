import React from "react";
import { Link } from "react-router-dom";

export default function SlowInetPage() {
  return (
    <section>
      <div className="util-box image-slow-inet">
        <h1>Internetmu lemot nih, pasti menyebalkan</h1>
        <h4>
          Sementara kamu bisa ke
          <br />
          <span>
            <Link to="/">Beranda</Link> atau{" "}
            <Link to="/test">Mau ngulang lagi</Link>
          </span>
        </h4>
      </div>
    </section>
  );
}
