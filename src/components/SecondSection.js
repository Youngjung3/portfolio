import React from "react";
import "./second.css";

const SecondSection = () => {
  return (
    <div className="secondSection" id="secondSection">
      <div className="about">
        <div className="inner">
          <div className="left">
          <div className="second-title">
                <h3>
                    <span>기본사항</span>
                </h3>
            </div>
            <div className="text">
                <p><span className="bet">이 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 름</span> : <span className="bet1">김영중</span></p>
                <p><span className="bet bet1">생년월일</span> : <span>96.10.25</span></p>
                <p><span className="bet">연&nbsp;&nbsp;락&nbsp;&nbsp;처</span> : <span>010-2733-5396</span></p>
                <p><span className="bet">이&nbsp;&nbsp;메&nbsp;&nbsp;일</span> :<span> youngj5396@gmail.com</span></p>
                <p><span className="bet">깃&nbsp;&nbsp;허&nbsp;&nbsp;브</span> :<span><a href="https://github.com/Youngjung3" target="blank"> https://github.com/Youngjung3</a></span></p>
                <p><span className="bet">거&nbsp;&nbsp;주&nbsp;&nbsp;지</span> : <span>경기도 안양 (인덕원, 평촌)</span></p>
            </div>
            <div className="box">
              <h3 className="year">{<img src="./infinity.svg" alt="" />}</h3>
              <span className="exper">Years of Experience</span>
              <h3 className="name">young jung</h3>
            </div>
          </div>
          <div className="right">
            <div className="second-title">
                <h3>
                    <span>학력사항</span>
                </h3>
            </div>
            <div className="text">
                <p>한신대학교 컴퓨터공학부 학사졸업&nbsp;&nbsp;&nbsp; 2015.03 ~ 2022.02 </p>
                <p>컴퓨터공학부 ComVi 전공랩실 소속 2015.04 ~ 2022.02 </p>
                <p>그린컴퓨터학원 프론트앤드과정 수료 2022.11 ~ 2023.05 </p>
            </div>
            <div className="bottom">
                <div className="bottom-button">
                <a href="https://drive.google.com/file/d/1LKQhNwyki5hlstLv-b_o4wrLA_mAiwOk/view?usp=share_link" target={"_blank"}>이력서보기</a>
                </div>
                {/* <img src="./sign.png" alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SecondSection;
