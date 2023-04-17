import React from "react";
import "./Header.css";
import lottie from "lottie-web";
import lottieAni from "./loop.json";

const Header = () => {
  const loop = React.useRef();
  const scrollToWorks = () => {
    const worksSection = document.getElementById("main-section");
    worksSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToWorks2 = () => {
    const worksSection = document.getElementById("secondSection");
    worksSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToWorks3 = () => {
    const worksSection = document.getElementById("skill-section");
    worksSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToWorks4 = () => {
    const worksSection = document.getElementById("workSection");
    worksSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToWorks5 = () => {
    const worksSection = document.getElementById("postSection");
    worksSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToWorks6 = () => {
    const worksSection = document.getElementById("contact");
    worksSection.scrollIntoView({ behavior: "smooth" });
  };
  React.useEffect(() => {
    lottie.loadAnimation({
      container: loop.current,
      animationData: lottieAni,
      loop: true,
      autoplay: true,
    });
  }, []);
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <div>
            <a onClick={scrollToWorks}>
              <div
                ref={loop}
                style={{ width: 150, position: "absolute", left: 0, top: 0 }}
              ></div>
            </a>
          </div>
          <div className="nav">
            <ul className="nav-list">
              <li>
                <a onClick={scrollToWorks}>Home</a>
              </li>
              <li>
                <a onClick={scrollToWorks2}>About</a>
              </li>
              <li>
                <a onClick={scrollToWorks3}>Skills</a>
              </li>
              <li>
                <a onClick={scrollToWorks4}>confident</a>
              </li>
              <li>
                <a onClick={scrollToWorks5}>Projects</a>
              </li>
              <li>
                <a onClick={scrollToWorks6}>Contact</a>
              </li>
            </ul>
          </div>
          <div className="h-button">
          <a href="resume.pdf" target={"_blank"}>이력서보기</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
