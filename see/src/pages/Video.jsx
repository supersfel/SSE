import Header from "components/Header.jsx";
import VideoView from "components/VideoView";
import React from "react";
import { useParams } from "react-router-dom";

const Video = () => {
  const filename = useParams().filename;

  return (
    <div className="video-area">
      <Header projectName={filename}></Header>
      <VideoView></VideoView>
    </div>
  );
};

export default Video;
