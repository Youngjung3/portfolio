// import React from "react";
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
  return (
    <div>
      <div className="main-section" id="main-section">
        <div className="mainpage">
          <div className="detail">
            <div className="name">
              <h1>무한히 채워나가는</h1>
              <h3>김영중<span> 입니다!</span></h3>
              <div className="job">Full-stack developer</div>
            </div>
            <div className="text">
              <p>
              항상 새로운 기술과 개발 방법론에 관심을 가지며, 동료 개발자들과 함께 끊임없이 성장하는 것을 추구하는 김영중입니다.
              </p>
            </div>
            <div className="button">
                <a href="resume.pdf" target={"_blank"} className="left-button">이력서보기
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
