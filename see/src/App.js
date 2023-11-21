import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import React from "react";
import Video from "pages/Video.jsx";

function App() {
  return (
    <Routes>
      <Route path="" element={<Home />}></Route>
      {/* 현재는 더미데이터라 url로 넘겨주게 filename사용하고 있는데 
      후에 여러 경로 저장하시려면 recoil 등 간단한 상태관리 라이브러리 사용하시면 됩니다. */}
      <Route path="/video/:filename" element={<Video />} />
    </Routes>
  );
}

export default App;
