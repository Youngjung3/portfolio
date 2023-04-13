import React from "react";
import "./skills.css";

const SkillsSection = () => {
  return ( 
    <div>
        <div className="skill-section">
            <div className="skill-info">
                <div className="container">
                    <div className="inner">
                        <div className="left">
                            <div className="title">
                                <h3>
                                    <span>사용하는 <br /> 기술</span>
                                </h3>
                            </div>
                            <div className="text">
                                <p>저는 React, React-Native, Vue, MySQL, Oracle, Nodejs, JavaScript, PHP, JSP, C++, JAVA, Python 등 다양한 기술을 능숙하게 다룰 수 있습니다. 특히 MySQL, Oracle 등의 데이터베이스에 대한 이해도가 높고, React와 React-Native, Vue  기술에도 능숙합니다. 또 Node.js를 활용해 서버를 구축하고 php, jsp 등의 기술을 활용해 연결할 수 있습니다.   </p>
                                <p>또한, JavaScript, PHP, JSP, C++, JAVA, Python 등 다양한 언어를 다룰 수 있어 다양한 분야에서 일할 수 있습니다.</p>
                            </div>
                            <div className="button">
                                <a href="#">기술 작업물보기</a>
                            </div>
                        </div>
                        <div className="right">
                            <div className="filter">
                                <ul>
                                    <li><a href="#" className="c-pointer" data-tab="tab_1"><span>Skills</span><img src="arrow.svg" alt="" /></a></li>
                                    {/* <li><a href="#" className="c-pointer" data-tab="tab_2"><span>Experience</span><img src="arrow.svg" alt="" /></a></li> */}
                                    {/* <li><a href="#" className="c-pointer" data-tab="tab_3"><span>Education</span><img src="arrow.svg" alt="" /></a></li> */}
                                </ul>
                                <span className="ccc"></span>
                            </div>
                            <div className="content">
                                <div id="tab_1">
                                    <div className="skillbox">
                                        <ul>
                                            <li>
                                                <div className="list_inner">
                                                    <span className="icon">
                                                        <span className="in">f</span>
                                                    </span>
                                                    <p className="name">React
                                                        <span>(90%)</span>
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="list_inner">
                                                    <span className="icon">
                                                        <span className="in">f</span>
                                                    </span>
                                                    <p className="name">React-Native
                                                        <span>(90%)</span>
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="list_inner">
                                                    <span className="icon">
                                                        <span className="in">f</span>
                                                    </span>
                                                    <p className="name">Vue
                                                        <span>(90%)</span>
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="list_inner">
                                                    <span className="icon">
                                                        <span className="in">f</span>
                                                    </span>
                                                    <p className="name">JavaScript
                                                        <span>(90%)</span>
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="list_inner">
                                                    <span className="icon">
                                                        <span className="in">f</span>
                                                    </span>
                                                    <p className="name">MySQL
                                                        <span>(90%)</span>
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="list_inner">
                                                    <span className="icon">
                                                        <span className="in">f</span>
                                                    </span>
                                                    <p className="name">Oracle
                                                        <span>(90%)</span>
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="list_inner">
                                                    <span className="icon">
                                                        <span className="in">f</span>
                                                    </span>
                                                    <p className="name">Node.js
                                                        <span>(90%)</span>
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="list_inner">
                                                    <span className="icon">
                                                        <span className="in">f</span>
                                                    </span>
                                                    <p className="name">JSP
                                                        <span>(90%)</span>
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="list_inner">
                                                    <span className="icon">
                                                        <span className="in">f</span>
                                                    </span>
                                                    <p className="name">PHP
                                                        <span>(90%)</span>
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="list_inner">
                                                    <span className="icon">
                                                        <span className="in">f</span>
                                                    </span>
                                                    <p className="name">C++
                                                        <span>(90%)</span>
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="list_inner">
                                                    <span className="icon">
                                                        <span className="in">f</span>
                                                    </span>
                                                    <p className="name">JAVA
                                                        <span>(90%)</span>
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="list_inner">
                                                    <span className="icon">
                                                        <span className="in">f</span>
                                                    </span>
                                                    <p className="name">Python
                                                        <span>(90%)</span>
                                                    </p>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   );
};
export default SkillsSection;