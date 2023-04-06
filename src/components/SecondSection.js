import React from "react";
import "./second.css";

const SecondSection = () => {
  return (
    <div className="secondSection">
      <div className="about">
        <div className="inner">
          <div className="left">
            <div className="box">
              <h3 className="year">10</h3>
              <span className="exper">Years of Experience</span>
              <h3 className="name">YoungJung</h3>
            </div>
          </div>
          <div className="right">
            <div className="second-title">
                <h3>
                    <span>"About Me"</span>
                </h3>
            </div>
            <div className="text">
                <p>With 10 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.</p>
            </div>
            <div className="bottom">
                <div className="bottom-button">
                    <a href="#">Download CV</a>
                </div>
                <img src="/" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SecondSection;
