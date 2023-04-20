import React, { useEffect, useRef } from "react";
import { Routes, Route} from "react-router-dom";
import Header from "./common/Header";
import Footer from "./common/Footer";
import "antd/dist/reset.css";
import MainPage from "./components/MainPage";
import Pointer from "./components/Pointer";
import "./App.css";

function App() {
  const pointerRefs = useRef([]);

  // reset on re-renders
  pointerRefs.current = [];

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    pointerRefs.current.forEach(ref => ref.moveTo(innerWidth / 2, innerHeight / 2));

    const onMove = ({ clientX, clientY }) => {
      pointerRefs.current.forEach(ref => ref.moveTo(clientX, clientY));
    };

    window.addEventListener("pointermove", onMove);

    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  const addPointerRef = ref => {
    if (ref) {
      pointerRefs.current.push(ref);
    }
  };

  return (
    <div className="App">
      <Pointer size="md" ref={addPointerRef} delay={0.1} />
      <Pointer size="lg" ref={addPointerRef} delay={0.2} />
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
