import React, { useState } from "react";
import { convertToMilliseconds, convertToTimeString } from "utils/time";

const TimeChangeModal = ({ timeLocation, offModal }) => {
  const totalMilliSeconds = convertToMilliseconds(timeLocation);
  const makeTimeString = (timeRange) => {
    const millSeconds = ~~((totalMilliSeconds * timeRange) / 100);
    return convertToTimeString(millSeconds);
  };

  const [minTimeRange, setMinTimeRange] = useState(50);
  const [maxTimeRange, setMaxTimeRange] = useState(50);

  const clickTimeSuccessBtn = () => {
    //시간 변경 로직 들어갈 곳
    alert("시간변경~");
    offModal();
  };

  return (
    <>
      <div className="video-modal-top">
        <div className="time-change-modal">
          <div className="time-box">
            <p>시작시간 : </p>
            <div className="minTimeRange">{makeTimeString(minTimeRange)}</div>
            <input
              type="range"
              onInput={(e) => setMinTimeRange(e.target.value)}
            />
          </div>
          <div className="time-box">
            <p>종료시간 : </p>
            <div className="minTimeRange">{makeTimeString(maxTimeRange)}</div>
            <input
              type="range"
              onInput={(e) => setMaxTimeRange(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="video-modal-bottom">
        <button onClick={clickTimeSuccessBtn} className="succes">
          확인
        </button>
        <button onClick={offModal} className="cancel">
          취소
        </button>
      </div>
    </>
  );
};

export default TimeChangeModal;
