import React from "react";

const EffectModal = ({ offModal }) => {
  return (
    <>
      <div className="video-modal-top">효과주기</div>
      <div className="video-modal-bottom">
        <button onClick={offModal} className="succes">
          확인
        </button>
        <button onClick={offModal} className="cancel">
          취소
        </button>
      </div>
    </>
  );
};

export default EffectModal;
