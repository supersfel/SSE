import React, { useState } from "react";
import { Link } from "react-router-dom";

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
