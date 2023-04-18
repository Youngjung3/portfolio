import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Header from "./common/Header";
import Footer from "./common/Footer";
import "antd/dist/reset.css";
import MainPage from "./components/MainPage";
import Pointer from "./components/Pointer";
import "./App.css";

function App() {
  const rootElement = document.getElementById("root");
  return (
    <div className="App">
      <Header />
      <Pointer />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
