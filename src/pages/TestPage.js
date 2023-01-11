import React, { useState } from "react";
import AnnouncementTest from "../components/test/Announce";
import ChooseTest from "../components/test/ChooseTest";
import ModalBox from "../components/test/test-modal/ModalBox";

export default function TestPage() {
  const [isModalShowed, setModalShowed] = useState(false);
  const [isIDModal, setIDModal] = useState(0);

  function openModal(id) {
    setModalShowed(true);
    setIDModal(id);
  }

  function closeModal() {
    setModalShowed(false);
  }

  return (
    <section>
      <div className="section">
        {isModalShowed && <ModalBox closeModal={closeModal} id={isIDModal} />}
        <div className="test-page">
          <AnnouncementTest />
          <ChooseTest openModal={openModal} />
        </div>
      </div>
    </section>
  );
}
