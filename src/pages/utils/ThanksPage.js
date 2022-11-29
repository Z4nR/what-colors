import React from "react";
import { Link } from "react-router-dom";

export default function Thanks() {
  return (
    <section>
      <div className="util-box image-thanks">
        <h1>Terima kasih telah berpartisipasi</h1>
        <h4>
          Pengen nyoba lagi?{" "}
          <span>
            <Link to="/test">Kembali ke halaman tes</Link>
          </span>
        </h4>
      </div>
    </section>
  );
}
