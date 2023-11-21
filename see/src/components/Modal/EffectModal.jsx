import React, { useState } from "react";

const EffectModal = ({ offModal }) => {
  const [effectType, setEffectType] = useState("None");
  const [executeTime, setExecuteTime] = useState(0);

  const typeAry = ["FadeIn", "FadeOut", "ZoomIn", "ZoomOut", "None"];
  const mentAry = [
    "Fade in (서서히 나타나기)",
    "Fade out (서서히 사라지기)",
    "Zoom in (서서히 확대)",
    "Zoom out (서서히 축소)",
    "효과없음",
  ];

  const fadeIn = () => {
    /* FadeIn 구현 */
    alert("fadeIn 선택!!");
  };

  const fadeOut = () => {
    /* FadeOut 구현 */
    alert("fadeOut 선택!!");
  };

  const zoomIn = () => {
    /* ZoomIn 구현 */
    alert("zoom in 선택!!");
  };

  const zoomOut = () => {
    /* ZoomOut 구현 */
    alert("zoom out 선택!!");
  };

  const noneEffect = () => {
    /* 효과없음 구현 */
    alert("효과없음 선택!!");
  };

  const clickEffectBtn = () => {
    alert(`선택한 시간 : ${executeTime}`);
    switch (effectType) {
      case "FadeIn":
        fadeIn();
        break;
      case "FadeOut":
        fadeOut();
        break;
      case "ZoomIn":
        zoomIn();
        break;
      case "ZoomOut":
        zoomOut();
        break;
      case "None":
        noneEffect();
        break;
      default:
        throw new Error("[ERROR] 올바른 effect 효과가 아닙니다.");
    }

    offModal();
  };

  return (
    <>
      <div className="video-modal-top">
        <div className="effect-modal">
          {[...Array(5)].map((_, i) => (
            <p
              key={i}
              onClick={() => setEffectType(typeAry[i])}
              className={typeAry[i] === effectType ? "checked" : ""}
            >
              {mentAry[i]}
            </p>
          ))}
          <div className="execute-box">
            <p>실행시간(초)</p>
            <input
              onChange={(e) => setExecuteTime(e.target.value)}
              type="text"
              placeholder="0"
            />
          </div>
        </div>
      </div>
      <div className="video-modal-bottom">
        <button onClick={clickEffectBtn} className="succes">
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
