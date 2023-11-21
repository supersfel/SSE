import React from "react";
import { ReactComponent as MikeSVG } from "assets/microphone.svg";

/**
 * projectName을 인자로 받아 띄워주는 헤더 컴포넌트
 * @param {*} param0
 * @returns
 */
const Header = ({ projectName }) => {
  return (
    <div className="header-area">
      <MikeSVG />
      <p>SSE </p>
      {/* 이름이 없다면 띄워주지 않음 */}
      {projectName ? <p>{`> ${projectName}`}</p> : <></>}
    </div>
  );
};

export default Header;
