import React from "react";
import Header from "../components/Header";
import Thumbnail from "components/Thumbnail";
import { THUMNAILDUMMY } from "utils/dummy.js";

const Home = () => {
  return (
    <div className="home">
      <Header></Header>
      <p className="home-ment">My Project</p>
      <div className="home-thumbnail-area">
        {/* 현재는 더미데이터에서 값을 가져옴 */}
        {THUMNAILDUMMY.map(({ thumbnailPath, timeLocation }, idx) => (
          <Thumbnail
            thumbnailPath={thumbnailPath}
            timeLocation={timeLocation}
            width={200}
            key={idx}
          ></Thumbnail>
        ))}
      </div>
    </div>
  );
};

export default Home;
