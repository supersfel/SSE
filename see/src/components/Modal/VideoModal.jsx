import React from "react";
import TimeChangeModal from "./TimeChangeModal.jsx";
import AppendChangeModal from "./AppendChangeModal.jsx";
import EffectModal from "./EffectModal.jsx";

const VideoModal = ({ offModal, type, fileData }) => {
  const modalContent = (type) => {
    switch (type) {
      case "time":
        return (
          <TimeChangeModal
            timeLocation={fileData.timeLocation}
            offModal={offModal}
          ></TimeChangeModal>
        );
      case "appendFront":
        return (
          <AppendChangeModal
            offModal={offModal}
            isFront={true}
          ></AppendChangeModal>
        );
      case "appendBack":
        return (
          <AppendChangeModal
            offModal={offModal}
            isFront={false}
          ></AppendChangeModal>
        );
      case "effect":
        return <EffectModal offModal={offModal}></EffectModal>;
      default:
        return <></>;
    }
  };
  if (type === "") return <></>;

  return <div className="video-modal">{modalContent(type)}</div>;
};

export default VideoModal;
