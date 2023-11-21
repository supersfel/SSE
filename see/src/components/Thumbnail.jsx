import React, { useState } from "react";
import { Link } from "react-router-dom";

/**
 *
 * @param {*} thumbnailPath 파일 URL (풀 URL입니다)
 * @param {*} timeLocation 00:00:00.000 형식으로 들어오는 영상 길이 정보
 * @param {*} width 섬네일 길이
 * @returns
 */
const Thumbnail = ({ thumbnailPath, timeLocation, width }) => {
  // 제목 만들어주는 함수 (필요하시면 그냥 subject를 인수로 받아오셔도 괜찮을 듯 합니다.)
  const makeSubject = (str) => {
    const ary = str.split("/");
    return ary[ary.length - 1];
  };
  const [subject, setSubject] = useState(makeSubject(thumbnailPath));

  return (
    <Link to={`/video/${subject}`} className="thumbnail">
      {/* 나중에 이 부분을 비디오 파일 링크로 바꿔주세요 */}
      <img
        src={thumbnailPath}
        style={{ width: `${width}px`, height: `${0.7 * width}px` }}
        alt=""
      />
      <p>{subject}</p>
    </Link>
  );
};

/* STYLE */

export default Thumbnail;
