import React from "react";

export default function ResultBiodata({ data }) {
  if (data?.errorScoreStatus === "Superior") {
    return (
      <div className="result">
        <div className="biodata_item" style={{ backgroundColor: "#91ee914d" }}>
          <h3>
            {data?.fullName} hasilmu diluar ekspektasi kami, kamu lebih peka
            dalam bedain warna
          </h3>
          <h2>Pertahankan kemampuan matamu</h2>
          <h3>
            Dibawah ini nih hasil tes kamu dan jangan lupa jaga terus kesehatan
            matamu, OKE!!
          </h3>
        </div>
      </div>
    );
  } else if (data?.errorScoreStatus === "Average") {
    return (
      <div className="result">
        <div className="biodata_item" style={{ backgroundColor: "#f0e68c5a" }}>
          <h3>
            {data?.fullName} hasilmu merupakan kemampuan rata-rata manusia dalam
            membedakan warna
          </h3>
          <h2>Matamu Normal</h2>
          <h3>
            Dibawah ini nih hasil tes kamu dan jangan lupa jaga terus kesehatan
            matamu, OKE!!
          </h3>
        </div>
      </div>
    );
  } else {
    return (
      <div className="result">
        <div className="biodata_item" style={{ backgroundColor: "#f080804d" }}>
          <h3>
            Yahhhhhh, {data?.fullName} hasilmu masih belum memuaskan nih. Kamu
            juga terindikasi buta warna
          </h3>
          <h2>{data?.colorBlindType}</h2>
          <h3>
            Dibawah ini nih hasil tes kamu, silahkan ke dokter ya buat
            pengecekan lebih lanjut
          </h3>
        </div>
      </div>
    );
  }
}
