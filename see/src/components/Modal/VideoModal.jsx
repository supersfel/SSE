import React from "react";
import TimeChangeModal from "./TimeChangeModal.jsx";
import ShortChangeModal from "./AppendChangeModal.jsx";
import EffectModal from "./EffectModal.jsx";

const VideoModal = ({ offModal, type }) => {
  const modalContent = (type) => {
    switch (type) {
      case "time":
        return <TimeChangeModal></TimeChangeModal>;
      case "appendFront":
        return <ShortChangeModal></ShortChangeModal>;
      case "appendBack":
        return <ShortChangeModal></ShortChangeModal>;
      case "effect":
        return <EffectModal></EffectModal>;
      default:
        return <></>;
    }
  };
  if (type === "") return <></>;
  return (
    <div className="video-modal">
      <div className="video-modal-top">{modalContent(type)}</div>

      <div className="video-modal-bottom">
        <button onClick={offModal} className="succes">
          확인
        </button>
      </div>
    </div>
  );
};

export default VideoModal;
