import React, { useState } from "react";

const Thumbnail = ({ thumbnailPath, timeLocation, width }) => {
  // 제목 만들어주는 함수 (필요하시면 그냥 subject를 인수로 받아오셔도 괜찮을 듯 합니다.)
  const makeSubject = (str) => {
    const ary = str.split("/");
    return ary[ary.length - 1];
  };

  return (
    <div className="thumbnail">
      <img
        src={thumbnailPath}
        style={{ width: `${width}px`, height: `${0.7 * width}px` }}
        alt=""
      />
      <p>{makeSubject(thumbnailPath)}</p>
    </div>
  );
};

/* STYLE */

export default Thumbnail;
