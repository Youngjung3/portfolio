import React, { useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  Html,
  useProgress,
} from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import "./contact.css";


function Loader() {
  const { process } = useProgress();
  return <Html center>{process} % 로딩완료</Html>;
}
const Model = () => {
  const gltf = useLoader(GLTFLoader, "./loop/scene.gltf");
  const modelRef = useRef();

  useFrame(({ clock }) => {
    modelRef.current.rotation.y += Math.sin(clock.getElapsedTime()) * 0.04;
  });

  return (
    <primitive
      object={gltf.scene}
      scale={0.1}
      rotation={[0.7, 0.5, 0.8]}
      position={[1, 1, 1]}
      color={"red"}
      ref={modelRef}
    />
  );
};
const ContactSection = () => {
  const contentHolderRef = useRef(null);

  useEffect(() => {
    const button = document.getElementById("copy-button");
    button.addEventListener("click", handleCopyClick);

    return () => {
      button.removeEventListener("click", handleCopyClick);
    };
  }, []);
  const handleCopyClick = () => {
    // We will need a range object and a selection.
    const range = document.createRange(),
    selection = window.getSelection();
    selection.removeAllRanges();
    range.selectNodeContents(contentHolderRef.current);
    selection.addRange(range);
    document.execCommand("copy");
    selection.removeAllRanges();
  };
  const handleCamera = (prop) => {
    console.log("handleCamera:", prop.camera);
  };
  const scrollToWorks = () => {
    const worksSection = document.getElementById("main-section");
    worksSection.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="contact" id="contact">
      <div className="contactinfo">
        <div className="container">
          <div className="infobox">
            {/* <div className="video-button">
                        <a href="#">
                            <img src="" alt="" />
                        </a>
                    </div> */}
            <div class="three">
                <Canvas
                  onCreated={handleCamera}
                  camera={{ position: [20, 20, 40], fov: 75, near: 0.1, far: 500 }}
                >
                  <Suspense fallback={<Loader />}>
                    <Model />
                    <Environment preset="sunset" blur={0} />
                    <ambientLight intensity={0.1} />
                    <OrbitControls />
                  </Suspense>
                </Canvas>
            </div>
            <div className="text">
              <h3>Resolution</h3>
              <p>
                저는 항상 새로운 기술과 학습을 즐기는 개발자입니다.
                <br />제 열정과 호기심을 바탕으로 항상 새로운 기술에 대한 열린
                마음으로 학습하며, 개발자로서 성장하고 싶습니다.
              </p>
            </div>
            <div className="button">
              <a onClick={scrollToWorks}>다시보기</a>
            </div>
          </div>
          <div className="connect">
            <div className="left">
              <ul>
                <li>
                  <span className="name">Call:</span>
                  <p>
                    <a href="#!" className="line-effect">
                      010 2733 5396
                    </a>
                  </p>
                </li>
                <li>
                  <span className="name">Email:</span>
                  <p>
                    <a href="#!" className="line-effect" ref={contentHolderRef}>
                      youngj5396@gmail.com
                    </a>
                  </p>
                </li>
              </ul>
            </div>
            <div className="right">
              {/* <div className="follow">
                <span>Follow me:</span>
                <ul>
                  <li>
                    <a href="#"></a>
                  </li>
                  <li>
                    <a href="#"></a>
                  </li>
                  <li>
                    <a href="#"></a>
                  </li>
                </ul>
              </div> */}
              <div className="follow"><a id="copy-button">이메일 복사하기</a></div>
            </div>
          </div>
        </div>
        <span className="element"></span>
        <span className="element2"></span>
      </div>
    </div>
  );
};
export default ContactSection;
