import React from "react";
import "./second.css";

const SecondSection = () => {
  return (
    <div className="secondSection">
      <div className="about">
        <div className="inner">
          <div className="left">
            <div className="box">
              <h3 className="year">{<img src="./infinity.svg" alt="" />}</h3>
              <span className="exper">Years of Experience</span>
              <h3 className="name">young jung</h3>
            </div>
          </div>
          <div className="right">
            <div className="second-title">
                <h3>
                    <span>5년간의 배움</span>
                </h3>
            </div>
            <div className="text">
                <p>2015.03 ~ 2022.02 컴퓨터공학부 졸업</p>
                <p>2015.04 ~ 2022.02 ComVi 전공랩실 소속</p>
                <p>2022.11 ~ 2023.05 그린컴퓨터학원 프론트앤드과정 수료</p>
            </div>
            <div className="bottom">
                <div className="bottom-button">
                    <a href="#">이력서보기</a>
                </div>
                <img src="./sign.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SecondSection;
