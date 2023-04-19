import React, { useRef, useState, useEffect } from "react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {AndroidOutlined} from '@ant-design/icons';
import "./post.css";
import "./swiper.css";


SwiperCore.use([Autoplay, Navigation]);

const PostSection = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slidesPerView = screenWidth <= 840 ? 1 : 2;
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
            slidesPerView={slidesPerView}
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
                  <div className="title">PROJECT 01</div>
                  <div className="list-title">울진군문화관광</div>
                  <div className="list-detail">
                    <p><span>1. &nbsp;구&nbsp;현&nbsp;기&nbsp;술</span>: Html, Css, JQuery, Javascript, Php, MySQL</p>
                    <p className="gitm"><span>2. 배&nbsp;포&nbsp;매&nbsp;체</span>: Dothome <a href="https://github.com/Youngjung3/project1" target={"_blank"}>깃허브</a></p>
                    <p><span>3. 작&nbsp;업&nbsp;기&nbsp;간</span>: 3주</p>
                    <p><span>4. 본인기여도</span>: 100%</p>
                    <a href="project1.pdf"  target="_blank">
                      <p><span>5. 기&nbsp;&nbsp;&nbsp; 획 &nbsp;&nbsp;&nbsp;서</span>: 기획서보기</p>
                    </a>
                    <p><span>6. 특징&nbsp;/&nbsp;기능</span>: 관공서페이지 / CRUD 구현 </p>
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
                  <div className="title">PROJECT 02</div>
                  <div className="list-title">YORI JORI</div>
                  <div className="list-detail">
                    <p><span>1. &nbsp;구&nbsp;현&nbsp;기&nbsp;술</span>:  Bootstrap, Scss, Javascript </p>
                    <p className="gitm"><span>2. 배&nbsp;포&nbsp;매&nbsp;체</span>: Github<a href="https://github.com/kimminjung96/YORIJORI" target={"_blank"}>깃허브</a></p>
                    <p><span>3. 작&nbsp;업&nbsp;기&nbsp;간</span>: 2주</p>
                    <p><span>4. 본인기여도</span>: 20% -  5인 팀프로젝트</p>
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
                  <div className="title">PROJECT 03</div>
                  <div className="list-title">Onetrip</div>
                  <div className="list-detail">
                    <p><span>1. &nbsp;구&nbsp;현&nbsp;기&nbsp;술</span>: React, Node js(Express), SQLite, Scss</p>
                    <p className="gitm"><span>2. 배&nbsp;포&nbsp;매&nbsp;체</span>: Vercel, CloudType<a href="https://github.com/kimminjung96/OneTrip" target={"_blank"}>깃허브</a></p>
                    <p><span>3. 작&nbsp;업&nbsp;기&nbsp;간</span>: 3주</p>
                    <p><span>4. 본인기여도</span>: 25% - 4인 팀프로젝트 </p>
                    <a href="onetrip.pdf"  target="_blank">
                      <p><span>5. 기&nbsp;&nbsp;&nbsp; 획 &nbsp;&nbsp;&nbsp;서</span>: 기획서보기</p>
                    </a>
                    <p><span>6. 특징&nbsp;/&nbsp;기능</span>: 풀스택 React 프로젝트 / CRUD구현 </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="list_inner2">
                <div className="img"><a href="https://github.com/Youngjung3/onetrip-nativeapp"  target={"_blank"}><img src="./native.png" alt="" /></a></div>
                <div className="list-body">
                  <div className="title">PROJECT 04</div>
                  <div className="list-title">OneTrip App</div>
                  <div className="list-detail">
                    <p><span>1. &nbsp;구&nbsp;현&nbsp;기&nbsp;술</span>: React-native, css, Node js(express), SQLite</p>
                    <p><span>2. 배&nbsp;포&nbsp;매&nbsp;체</span>: Apk</p>
                    <p><span>3. 작&nbsp;업&nbsp;기&nbsp;간</span>: 1주</p>
                    <p><span>4. 본인기여도</span>: 100%</p>
                    <p><span>5. 특징&nbsp;/&nbsp;기능</span>: 원트립 사이트를 React-native앱으로 구현</p>
                    <p className="qrp">QR코드를 스캔하세요.</p>
                    <div className="qrline">
                     <AndroidOutlined className="android-icon"/>
                      <img src="./onetripapp.png" alt="원트립QR" className="qrcode"/>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="list_inner2">
                <div className="img"><a href="https://github.com/Youngjung3/pilter-java"  target={"_blank"}><img src="./java.png" alt="" /></a></div>
                <div className="list-body">
                 <div className="title">PROJECT 05</div>
                  <div className="list-title">Pilter</div>
                  <div className="list-detail">
                    <p><span>1. &nbsp;구&nbsp;현&nbsp;기&nbsp;술</span>: Java </p>
                    <p><span>2. 배&nbsp;포&nbsp;매&nbsp;체</span>: Apk</p>
                    <p><span>3. 작&nbsp;업&nbsp;기&nbsp;간</span>: 2주</p>
                    <p><span>4. 본인기여도</span>: 100%</p>
                    <p><span>5. 특징&nbsp;/&nbsp;기능</span>: 안드로이드 스튜디오에서 만든 Android App</p>
                    <p className="qrp">QR코드를 스캔하세요.</p>
                    <div className="qrline"><AndroidOutlined className="android-icon"/><img src="./pilterapp.png" alt="필터QR" className="qrcode"/></div>
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
