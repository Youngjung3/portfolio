import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Header from './common/Header';
import Footer from './common/Footer';
import "antd/dist/reset.css";
import MainPage from "./components/MainPage";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
				<Route path="/" element={<MainPage />}></Route>
			</Routes>
      <Footer />
    </div>
  );
}

export default App;
// three.js 로 메인페이지 3D구현