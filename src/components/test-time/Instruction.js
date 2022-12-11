import React from "react";

export default function InstructionTest({ closeModal }) {
  return (
    <div className="modal-box">
      <div className="modal-center">
        <div className="modal-input">
          <div className="instruction-box">
            <div className="test-instruction">
              <div className="instruction">
                <h3>Tips Mengerjakan Tes</h3>
                <ul>
                  <li>
                    Maksimalkan kecerahan layar perangkat yang akan digunakan
                    dalam pengetesan
                  </li>
                  <li>
                    Jangan gunakan mode baca atau anti sinar biru pada
                    pengaturan layar perangkat pengetesan
                  </li>
                  <li>
                    Lepaskan atau jangan gunakan alat bantu lihat jenis apapun,
                    kecuali kacamata minus, plus atau silinder
                  </li>
                  <li>Waktu pengetesan optimal : pukul 11:00 -13:00</li>
                </ul>
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    closeModal();
                  }}
                >
                  Saya Mengerti
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
