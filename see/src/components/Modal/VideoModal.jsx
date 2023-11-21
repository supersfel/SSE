import React from "react";
import TimeChangeModal from "./TimeChangeModal.jsx";
import ShortChangeModal from "./AppendChangeModal.jsx";
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
        return <ShortChangeModal offModal={offModal}></ShortChangeModal>;
      case "appendBack":
        return <ShortChangeModal offModal={offModal}></ShortChangeModal>;
      case "effect":
        return <EffectModal offModal={offModal}></EffectModal>;
      default:
        return <></>;
    }
  };
  if (type === "") return <></>;

  const clickAppendFrontSuccessBtn = () => {
    //영상 앞부분 로직 추가
    alert("영상 앞부분 추가~");
  };
  const clickAppendBackSuccessBtn = () => {
    //영상 뒷부분 로직 추가
    alert("영상 뒷부분 추가~");
  };
  const clickEffectBtn = () => {
    /*효과 로직 추가 */
  };

  return <div className="video-modal">{modalContent(type)}</div>;
};

export default VideoModal;
