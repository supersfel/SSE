import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import React from "react";
import Video from "pages/Video.jsx";

function App() {
  return (
    <Routes>
      <Route path="" element={<Home />}></Route>
      <Route path="/video/:filename" element={<Video />} />
    </Routes>
  );
}

export default App;
