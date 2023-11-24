import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FILEPATH } from "utils/enum";
import VideoModal from "./Modal/VideoModal.jsx";
import { THUMNAILDUMMY } from "utils/dummy.js";

/**
 * 비디오 편집 부분 컴포넌트
 * @returns
 */
const VideoView = () => {
  const filename = useParams().filename;

  const fileData = THUMNAILDUMMY.filter(
    (v) => v.thumbnailPath === `${FILEPATH}/${filename}`
  )[0];

  console.log(fileData);
  const [modalType, setModalType] = useState("");
  const [isFunctionBoxOpen, setIsFunctionBoxOpen] = useState(false);
  const [functionBoxX, setFunctionBoxX] = useState(0);
  const [functionBoxY, setFunctionBoxY] = useState(0);

  const offModal = () => {
    setModalType("");
    setIsFunctionBoxOpen(false);
  };

  const closeFunctionBox = () => {
    setIsFunctionBoxOpen(false);
  };

  const deleteVideo = () => {
    /* 비디오 삭제 로직 */
    alert("비디오 삭제~~");
  };

  const openFunctionBox = (e) => {
    e.preventDefault();
    setIsFunctionBoxOpen(true);
    setFunctionBoxX(e.nativeEvent.layerX);
    setFunctionBoxY(e.nativeEvent.layerY);
  };

  return (
    <div className="video-view-area">
      <div className="video-view-top" onClick={closeFunctionBox}>
        {/* 아래 src역시 video를 연결하게 바꿔야 합니다. */}
        <div className="video-box">
          <img
            /* 태그가 바뀌더라도 아래 onContextMenu를 넣으시면 됩니다. */
            onContextMenu={openFunctionBox}
            src={`/${FILEPATH}/${filename}`}
            alt=""
          />
          {isFunctionBoxOpen ? (
            <div
              className="function-box"
              style={{ top: functionBoxY, left: functionBoxX }}
            >
              <p onClick={() => setModalType("time")}>시간 변경</p>
              <p onClick={() => setModalType("appendFront")}>앞에 쇼츠 추가</p>
              <p onClick={() => setModalType("appendBack")}>뒤에 쇼츠 추가</p>
              <p onClick={() => setModalType("effect")}>효과 주기</p>
              <p onClick={deleteVideo}>삭제</p>
            </div>
          ) : null}
        </div>
      </div>
      <div className="video-view-bottom">video의 흐름을 펼쳐서 보여주는 곳</div>
      <VideoModal
        fileData={fileData}
        offModal={offModal}
        type={modalType}
      ></VideoModal>
    </div>
  );
};

export default VideoView;
