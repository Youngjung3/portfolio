// import React from "react";
import { useEffect, useState } from "react";
import SecondSection from "./SecondSection";
import SkillsSection from "./SkillsSection";
// import ServiceSection from "./ServiceSection";
import WorksSection from "./WorksSection";
// import IntoSection from "./IntoSection";
import PostSection from "./PostSection";
// import SwiperSection from "./SwiperSection";
import ContactSection from "./ContactSection";
import "./MainPage.css";
import React from 'react'


function MainPage() {
  
  let text = "Growth Corder";
let [typedText, setTypedText] = useState("");

useEffect(() => {
  let i = 0;
  let typing = setInterval(() => {
    if (text.length === i) clearInterval(typing);
    setTypedText((prev) => {
      let char = text[i];
      i++;
      if (typeof char === "string") {
        return prev + char;
      } else {
        return text;
      }
    });
  }, 300);
  
}, []);


  return (
    
    <div>
      <div className="main-section" id="main-section">
        <div className="mainpage">
          <div className="detail">
            <div className="name">
              <h1>배움을 즐기는</h1>
              <h3>{typedText}<span>_</span></h3>
              <div className="job">무한히 성장해 나갈 풀스택 개발자</div>
            </div>
            <div className="text">
            
              <p>
              김영중입니다.
              </p>
            </div>
            <div className="button">
                <a href="https://drive.google.com/file/d/1LKQhNwyki5hlstLv-b_o4wrLA_mAiwOk/view?usp=share_link" target={"_blank"} className="left-button">이력서보기
                  <img src="./resumearrow.svg" alt="이력서" />
                </a>
              <div className="right-button">
                <a href="https://github.com/Youngjung3" target={"_blank"} className="a-link">깃허브보기
                  <img src="./arrow.svg" alt="깃허브" />
                </a>
              </div>
            </div>
          </div>
          {/* <div className="smalldetail">
            <span>Follow me:</span>
            <ul>
              <li>
                <a href="#!"></a>
              </li>
              <li>
                <a href="#!"></a>
              </li>
              <li>
                <a href="#!"></a>
              </li>
            </ul>
          </div> */}
          <div className="profileImg">
            <div className="img">
              <img src="/pic2.jpg" alt="pic" />
              <div className="video-button">
                <a href="#!" className="video"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SecondSection />
      <SkillsSection />
      {/* <ServiceSection /> */}
      <WorksSection />
      {/* <IntoSection /> */}
      <PostSection />
      {/* <SwiperSection /> */}
      <ContactSection />
    </div>
  );
}

export default MainPage;
