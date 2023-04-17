import React from "react";
import "./contact.css";

const ContactSection = () => {
    const scrollToWorks = () => {
        const worksSection = document.getElementById("main-section");
        worksSection.scrollIntoView({ behavior: "smooth" });
      }
  return (
    <div className="contact" id="contact">
        <div className="contactinfo">
            <div className="container">
                <div className="infobox">
                    <div className="video-button">
                        <a href="#">
                            <img src="" alt="" />
                        </a>
                    </div>
                    <div className="text">
                        <h3>Resolution</h3>
                        <p>저는 항상 새로운 기술과 학습을 즐기는 개발자입니다.<br />제 열정과 호기심을 바탕으로 항상 새로운 기술에 대한 열린 마음으로 학습하며, 개발자로서 성장하고 싶습니다.</p>
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
                                <p><a href="#!" className="line-effect">+82 010 2733 5396</a></p>
                            </li>
                            <li>
                                <span className="name">Email:</span>
                                <p><a href="#!" className="line-effect">youngj5396@gmail.com</a></p>
                            </li>
                        </ul>
                    </div>
                    <div className="right">
                        <div className="follow">
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