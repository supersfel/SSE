import React from "react";
import { useParams } from "react-router-dom";
import { FILEPATH } from "utils/enum";

const VideoView = () => {
  const filename = useParams().filename;
  console.log(`${FILEPATH}/${filename}`);
  return (
    <div className="video-view-area">
      <div className="video-view-top">
        {/* 아래 src역시 video를 연결하게 바꿔야 합니다. */}
        <img src={`/${FILEPATH}/${filename}`} alt="" />
        <div className="function-box">
          <p>시간 변경</p>
          <p>앞에 쇼츠 추가</p>
          <p>뒤에 쇼츠 추가</p>
          <p>효과 주기</p>
          <p>삭제</p>
        </div>
      </div>
      <div className="video-view-bottom">video의 흐름을 펼쳐서 보여주는 곳</div>
    </div>
  );
};

export default VideoView;
