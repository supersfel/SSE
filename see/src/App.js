import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import React from "react";

function App() {
  return (
    <Routes>
      <Route path="" element={<Home />}></Route>
    </Routes>
  );
}

export default App;