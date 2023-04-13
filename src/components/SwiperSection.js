import React, { useRef, useState } from "react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./swiper.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([Autoplay, Pagination, Navigation]);


const SwiperSection = () => {
  return (
    <div className="swiperSection">
        <div className="swiperinfo">
            <div className="container">
                <div className="swiper-list">
                    <div className="swiper">
                        <div className="swiper-wrapper">
                            <div className="item">
                                <a href="#">
                                1. 필터 어플리케이션 java
2. 울진문화관광 php
3. 원트립 react
4. 원트립 어플리케이션 native
5. 요리조리 scss
6. Vue
          <div className="post-list">
            <ul>
              <li>
                <div className="list-inner">
                  <div className="left">
                    <div className="metabox">
                        <ul>
                            <li>
                                <span>
                                    <a href="#">김영중</a>
                                </span>
                            </li>
                            <li>
                                <span>
                                    <a href="#">04 April, 2023</a>
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="title">
                        <h3>
                            <a href="#">1. 필터 어플리케이션 java
2. 울진문화관광 php
3. 원트립 react
4. 원트립 어플리케이션 native
5. 요리조리 scss
6. Vue</a>
                        </h3>
                    </div>
                    <div className="button">
                        <a href="#">Read More</a>
                    </div>
                  </div>
                  <div className="right">
                    <img src="" alt="" />
                    <div className="main"></div>
                    <a href="#" className="link"></a>
                  </div>
                  <div className="shape"></div>
                </div>
              </li>
              <li>
                <div className="list-inner">
                  <div className="left">
                    <div className="metabox">
                        <ul>
                            <li>
                                <span>
                                    <a href="#">김영중</a>
                                </span>
                            </li>
                            <li>
                                <span>
                                    <a href="#">04 April, 2023</a>
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="title">
                        <h3>
                            <a href="#">Diversification of digital marketing stategies</a>
                        </h3>
                    </div>
                    <div className="button">
                        <a href="#">Read More</a>
                    </div>
                  </div>
                  <div className="right">
                    <img src="" alt="" />
                    <div className="main"></div>
                    <a href="#" className="link"></a>
                  </div>
                  <div className="shape"></div>
                </div>
              </li>
              <li>
                <div className="list-inner">
                  <div className="left">
                    <div className="metabox">
                        <ul>
                            <li>
                                <span>
                                    <a href="#">김영중</a>
                                </span>
                            </li>
                            <li>
                                <span>
                                    <a href="#">04 April, 2023</a>
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="title">
                        <h3>
                            <a href="#">Diversification of digital marketing stategies</a>
                        </h3>
                    </div>
                    <div className="button">
                        <a href="#">Read More</a>
                    </div>
                  </div>
                  <div className="right">
                    <img src="" alt="" />
                    <div className="main"></div>
                    <a href="#" className="link"></a>
                  </div>
                  <div className="shape"></div>
                </div>
              </li>
              <li>
                <div className="list-inner">
                  <div className="left">
                    <div className="metabox">
                        <ul>
                            <li>
                                <span>
                                    <a href="#">김영중</a>
                                </span>
                            </li>
                            <li>
                                <span>
                                    <a href="#">04 April, 2023</a>
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="title">
                        <h3>
                            <a href="#">Diversification of digital marketing stategies</a>
                        </h3>
                    </div>
                    <div className="button">
                        <a href="#">Read More</a>
                    </div>
                  </div>
                  <div className="right">
                    <img src="" alt="" />
                    <div className="main"></div>
                    <a href="#" className="link"></a>
                  </div>
                  <div className="shape"></div>
                </div>
              </li>
            </ul>
          </div>
                                    <img src="" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};
export default SwiperSection;