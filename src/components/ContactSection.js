import React from "react";
import "./contact.css";

const ContactSection = () => {
  return (
    <div className="contact">
        <div className="contactinfo">
            <div className="container">
                <div className="infobox">
                    <div className="video-button">
                        <a href="#">
                            <img src="" alt="" />
                        </a>
                    </div>
                    <div className="text">
                        <h3>Let s work together</h3>
                        <p>You can express yourself however you want and whenever you want, for free. You can customize a template or make your own.</p>
                    </div>
                    <div className="button">
                        <a href="#">Say Hello</a>
                    </div>
                </div>
                <div className="connect">
                    <div className="left">
                        <ul>
                            <li>
                                <span className="name">Call:</span>
                                <p><a href="#" className="line-effect">+82 010 0000 0000</a></p>
                            </li>
                            <li>
                                <span className="name">Email:</span>
                                <p><a href="#" className="line-effect">youngj5396@gmail.com</a></p>
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