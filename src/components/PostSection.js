import React, { useRef, useState } from "react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import "./post.css";
import "./swiper.css";


SwiperCore.use([Autoplay, Navigation]);

const PostSection = () => {
  return (
    <div className="postSection" id="postSection">
      <div className="postinfo">
        <div className="container">
          <div className="title">
            <h3>
              <span>
                작업 <br /> 프로젝트
              </span>
            </h3>
          </div>
          <Swiper
            centeredSlides={true}
            slidesPerView={2}
            spaceBetween={30}
            autoplay={{
              delay: 4000,
              disableOnInteraction: true,
            }}
            navigation={true}
            loop={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="list_inner">
                <a href="http://youngjung.dothome.co.kr/" target={"_blank"}>
                  <div className="img"><img src="./php.png" alt="울진군문화관광" /></div>
                </a>
                <div className="list-body">
                  <div className="title">이미지 클릭시 페이지로 이동</div>
                  <div className="list-title">울진군문화관광</div>
                  <div className="list-detail">
                    <p><span>1. &nbsp;구&nbsp;현&nbsp;기&nbsp;술</span>: Html, Css, JQuery, Javascript, Php, MySQL</p>
                    <p className="d-flex"><span>2. 배&nbsp;포&nbsp;매&nbsp;체</span>: Dothome</p>
                    <p><span>3. 작&nbsp;업&nbsp;기&nbsp;간</span>: 3주</p>
                    <p><span>4. 본인기여도</span>: 100%</p>
                    <a href="project1.pdf"  target="_blank">
                      <p><span>5. 기&nbsp;&nbsp;&nbsp; 획 &nbsp;&nbsp;&nbsp;서</span>: 기획서보기</p>
                    </a>
                    <p><span>6. 특징&nbsp;/&nbsp;기능</span>: 관공서페이지, CRUD를 사용</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="list_inner">
                <a href="https://kimminjung96.github.io/YORIJORI/" target={"_blank"}>
                  <div className="img"><img src="./yori.png" alt="YORIJORI" /></div>
                </a>
                <div className="list-body">
                  <div className="title">이미지 클릭시 페이지로 이동</div>
                  <div className="list-title">YORI JORI</div>
                  <div className="list-detail">
                    <p><span>1. &nbsp;구&nbsp;현&nbsp;기&nbsp;술</span>:  Bootstrap, Scss, Javascript </p>
                    <p><span>2. 배&nbsp;포&nbsp;매&nbsp;체</span>: Github</p>
                    <p><span>3. 작&nbsp;업&nbsp;기&nbsp;간</span>: 2주</p>
                    <p><span>4. 본인기여도</span>: 20%</p>
                    <a href="yorijori.pdf"  target="_blank">
                      <p><span>5. 기&nbsp;&nbsp;&nbsp; 획 &nbsp;&nbsp;&nbsp;서</span>: 기획서보기</p>
                    </a>
                    <p><span>6. 특징&nbsp;/&nbsp;기능</span>: 부트스트랩을 이용한 반응형 웹사이트</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="list_inner">
                <a href="https://onetrip-dvozbuno8-kimminjung96.vercel.app/"  target={"_blank"}>
                  <div className="img"><img src="./react.png" alt="" /></div>
                </a>
                <div className="list-body">
                  <div className="title">이미지 클릭시 페이지로 이동</div>
                  <div className="list-title">Onetrip</div>
                  <div className="list-detail">
                    <p><span>1. &nbsp;구&nbsp;현&nbsp;기&nbsp;술</span>: React, Node js(Express), SQLite, Scss</p>
                    <p><span>2. 배&nbsp;포&nbsp;매&nbsp;체</span>: Vercel, CloudType</p>
                    <p><span>3. 작&nbsp;업&nbsp;기&nbsp;간</span>: 3주</p>
                    <p><span>4. 본인기여도</span>: 25% </p>
                    <a href="onetrip.pdf"  target="_blank">
                      <p><span>5. 기&nbsp;&nbsp;&nbsp; 획 &nbsp;&nbsp;&nbsp;서</span>: 기획서보기</p>
                    </a>
                    <p><span>6. 특징&nbsp;/&nbsp;기능</span>: 풀스택 프로젝트</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="list_inner2">
                <div className="img"><img src="./native.png" alt="" /></div>
                <div className="list-body">
                  <div className="title">PROJECT 01</div>
                  <div className="list-title">OneTrip App</div>
                  <div className="list-detail">
                    <p><span>1. &nbsp;구&nbsp;현&nbsp;기&nbsp;술</span>: React-native, css, Node js(express), SQLite</p>
                    <p><span>2. 배&nbsp;포&nbsp;매&nbsp;체</span>: Apk</p>
                    <p><span>3. 작&nbsp;업&nbsp;기&nbsp;간</span>: 1주</p>
                    <p><span>4. 본인기여도</span>: 100%</p>
                    <p><span>5. 특징&nbsp;/&nbsp;기능</span>: 원트립 사이트를 React-native앱으로 구현</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="list_inner2">
                <div className="img"><img src="./java.png" alt="" /></div>
                <div className="list-body">
                  <div className="title">PROJECT 01</div>
                  <div className="list-title">Pilter</div>
                  <div className="list-detail">
                    <p><span>1. &nbsp;구&nbsp;현&nbsp;기&nbsp;술</span>: Java </p>
                    <p><span>2. 배&nbsp;포&nbsp;매&nbsp;체</span>: Apk</p>
                    <p><span>3. 작&nbsp;업&nbsp;기&nbsp;간</span>: 2주</p>
                    <p><span>4. 본인기여도</span>: 100%</p>
                    <p><span>5. 특징&nbsp;/&nbsp;기능</span>: 안드로이드 스튜디오에서 만든 Android App</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* <SwiperSlide>
              <div className="list_inner">
                <div className="img"><img src="./project1.png" alt="" /></div>
                <div className="list-body">
                  <div className="title">PROJECT 01</div>
                  <div className="list-title">울진군문화관광</div>
                  <div className="list-detail">
                    <p><span>1. &nbsp;구&nbsp;현&nbsp;기&nbsp;술</span>: </p>
                    <p><span>2. 배&nbsp;포&nbsp;매&nbsp;체</span>: </p>
                    <p><span>3. 작&nbsp;업&nbsp;기&nbsp;간</span>: </p>
                    <p><span>4. 본인기여도</span>: 100%</p>
                    <p><span>5. 특징&nbsp;/&nbsp;기능</span>: </p>
                  </div>
                </div>
              </div>
            </SwiperSlide> */}
         
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default PostSection;
