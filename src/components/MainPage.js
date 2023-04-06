import React from "react";
import SecondSection from "./SecondSection";
import SkillsSection from "./SkillsSection";
import ServiceSection from "./ServiceSection";
import WorksSection from "./WorksSection";
import IntoSection from "./IntoSection";
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
                I`m creative designer based in korea, andI`m creative designer
                based in korea, and
              </p>
            </div>
            <div className="button">
              <div className="left-button">
                <a href="#">Say Hello</a>
              </div>
              <div className="right-button">
                <a href="#">My Works</a>
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
      <ServiceSection />
      <WorksSection />
      <IntoSection />
    </div>
  );
}

export default MainPage;
