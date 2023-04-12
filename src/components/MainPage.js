import React from "react";
import SecondSection from "./SecondSection";
import SkillsSection from "./SkillsSection";
import ServiceSection from "./ServiceSection";
import WorksSection from "./WorksSection";
import IntoSection from "./IntoSection";
import PostSection from "./PostSection";
import SwiperSection from "./SwiperSection";
import ContactSection from "./ContactSection";
import "./MainPage.css";

function MainPage() {
  return (
    <div>
      <div className="main-section">
        <div className="mainpage">
          <div className="detail">
            <div className="name">
              <h3>김영중</h3>
              <div className="job">Full-stack developer</div>
            </div>
            <div className="text">
              <p>
              항상 새로운 기술과 개발 방법론에 관심을 가지며, 동료 개발자들과 함께 끊임없이 성장하는 것을 추구하는 김영중입니다.
              </p>
            </div>
            <div className="button">
              <div className="left-button">
                <a href="#">이력서보기
                  <img src="./resumearrow.svg" alt="" />
                </a>
              </div>
              <div className="right-button">
                <a href="#">작업물보기
                  <img src="./arrow.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="smalldetail">
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
          </div>
          <div className="profileImg">
            <div className="img">
              <img src="../public/pic1.jpg" alt="" />
              <div className="video-button">
                <a href="#" className="video"></a>
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
      <SwiperSection />
      <ContactSection />
    </div>
  );
}

export default MainPage;
