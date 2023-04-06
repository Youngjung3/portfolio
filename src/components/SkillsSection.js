import React from "react";
import "./skills.css";

const SkillsSection = () => {
  return ( 
    <div>
        <div className="skill-section">
            <div class="skill-info">
                <div className="container">
                    <div className="inner">
                        <div className="left">
                            <div className="title">
                                <h3>
                                    <span>My expert <br /> areas</span>
                                </h3>
                            </div>
                            <div className="text">
                                <p>You can express yourself however you want and whenever you want, for free. You can customize a template or make your own from scratch, with an immersive library at your disposal. You can express yourself however you want and whenever you free.</p>
                                <p>You can customize a template or make your own from scratch, with an immersive library at your disposal.</p>
                            </div>
                            <div className="button">
                                <a href="#">My Resume</a>
                            </div>
                        </div>
                        <div className="right">
                            <div className="filter">
                                <ul>
                                    <li><a href="#" className="c-pointer" data-tab="tab_1"><span>Skills</span></a></li>
                                    <li><a href="#" className="c-pointer" data-tab="tab_2"><span>Experience</span></a></li>
                                    <li><a href="#" className="c-pointer" data-tab="tab_3"><span>Education</span></a></li>
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
                                                    <p className="name">Figma
                                                        <span>(90%)</span>
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="list_inner">
                                                    <span className="icon">
                                                        <span className="in">f</span>
                                                    </span>
                                                    <p className="name">Figma
                                                        <span>(90%)</span>
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="list_inner">
                                                    <span className="icon">
                                                        <span className="in">f</span>
                                                    </span>
                                                    <p className="name">Figma
                                                        <span>(90%)</span>
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="list_inner">
                                                    <span className="icon">
                                                        <span className="in">f</span>
                                                    </span>
                                                    <p className="name">Figma
                                                        <span>(90%)</span>
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="list_inner">
                                                    <span className="icon">
                                                        <span className="in">f</span>
                                                    </span>
                                                    <p className="name">Figma
                                                        <span>(90%)</span>
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="list_inner">
                                                    <span className="icon">
                                                        <span className="in">f</span>
                                                    </span>
                                                    <p className="name">Figma
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
        <div className="skill-section">
            <div className="counter">
                <div className="container">
                    <div className="counter-list">
                        <ul>
                            <li>
                                <div className="list-inner">
                                    <h3>
                                        <span className="list-counter" data-from="0" data-to="219">
                                            219
                                        </span>
                                    </h3>
                                    <span className="title">Trainings</span>
                                </div>
                            </li>
                            <li>
                                <div className="list-inner">
                                    <h3>
                                        <span className="list-counter" data-from="0" data-to="219">
                                            219
                                        </span>
                                    </h3>
                                    <span className="title">Trainings</span>
                                </div>
                            </li>
                            <li>
                                <div className="list-inner">
                                    <h3>
                                        <span className="list-counter" data-from="0" data-to="219">
                                            219
                                        </span>
                                    </h3>
                                    <span className="title">Trainings</span>
                                </div>
                            </li>
                            <li>
                                <div className="list-inner">
                                    <h3>
                                        <span className="list-counter" data-from="0" data-to="219">
                                            219
                                        </span>
                                    </h3>
                                    <span className="title">Trainings</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
   );
};
export default SkillsSection;