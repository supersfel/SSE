import Thumbnail from "components/Thumbnail.jsx";
import React, { useState } from "react";
import { THUMNAILDUMMY } from "utils/dummy";
import { FILEPATH } from "utils/enum";

const AppendChangeModal = ({ offModal, isFront }) => {
  const initialVideo = {
    thumbnailPath: "",
    timeLocation: "00:00:00.000",
  };
  //더미데이터 형식으로 비디오 선택
  const [checkedVideo, setCheckedVideo] = useState(initialVideo);

  const checkVideo = (idx) => {
    const checkedVideo = THUMNAILDUMMY.filter((v, i) => idx === i);
    if (checkVideo.length === 0) setCheckedVideo(initialVideo);
    else setCheckedVideo(checkedVideo[0]);
  };

  const clickAppendFrontSuccessBtn = () => {
    //영상 앞부분 로직 추가
    alert("영상 앞부분 추가~");
  };
  const clickAppendBackSuccessBtn = () => {
    //영상 뒷부분 로직 추가
    alert("영상 뒷부분 추가~");
  };

  const clickSuccessBtn = () => {
    if (isFront) clickAppendFrontSuccessBtn();
    else clickAppendBackSuccessBtn();
    offModal();
  };

  return (
    <>
      <div className="video-modal-top">
        <div className="change-short-modal">
          {THUMNAILDUMMY.map(({ thumbnailPath, timeLocation }, idx) => (
            <div className="img-box">
              <img
                onClick={() => checkVideo(idx)}
                key={idx}
                src={`/${thumbnailPath}`}
                alt=""
              />
              {checkedVideo.thumbnailPath === thumbnailPath ? (
                <input type="checkbox" checked className="checked-img" />
              ) : null}
            </div>
          ))}
        </div>
      </div>
      <div className="video-modal-bottom">
        <button onClick={clickSuccessBtn} className="succes">
          확인
        </button>
        <button onClick={offModal} className="cancel">
          취소
        </button>
      </div>
    </>
  );
};

export default AppendChangeModal;
