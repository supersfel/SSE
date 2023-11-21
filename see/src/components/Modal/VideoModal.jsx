import React from "react";
import TimeChangeModal from "./TimeChangeModal.jsx";
import AppendChangeModal from "./AppendChangeModal.jsx";
import EffectModal from "./EffectModal.jsx";


/**
 * 
 * @param {*} offModal 모달 종료하게 하는 함수
 * @param {*} type 모달의 타입(어느 기능을 설정할지 정보)
 * @param {*} fileData 현재 보고있는 비디오정보 <= 이역시 현재 더미데이터 사용
 * @returns 
 */
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
