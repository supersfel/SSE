import React from "react";
import { ReactComponent as MikeSVG } from "assets/microphone.svg";

const Header = ({ projectName }) => {
  return (
    <div className="header-area">
      <MikeSVG />
      <p>SSE </p>
      {projectName ? <p>{`> ${projectName}`}</p> : <></>}
    </div>
  );
};

/* STYLE */

export default Header;
