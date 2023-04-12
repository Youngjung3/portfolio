import React from "react";
import "./works.css";

const WorksSection = () => {
  return (
    <div className="workSection">
        <div className="work-info">
            <div className="container">
                <div className="title">
                    <h3>
                        <span>Look at my <br /> recent projects</span>
                    </h3>
                </div>
                <div className="work-list">
                    
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
                                            10
                                        </span>
                                    </h3>
                                    <span className="title">프로젝트</span>
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
export default WorksSection;
