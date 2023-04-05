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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Header />
      <Routes>
				<Route path="/" element={<MainPage />}></Route>
			</Routes>
      <Footer />
    </div>
  );
}

export default App;
