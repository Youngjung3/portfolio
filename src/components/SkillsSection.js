import React from "react";
import { useSpring, animated } from "@react-spring/web";
import {useState,useEffect,useRef} from "react";
import { DiJava, DiReact, DiJavascript1, DiMysql, DiNodejsSmall, DiJqueryLogo } from 'react-icons/di';
import { FaPhp, FaJava, FaVuejs } from 'react-icons/fa';
// import { CgCPlusPlus } from 'react-icons/cg';
import { TbBrandReactNative, TbDatabase, TbBrandPython } from 'react-icons/tb';
import "./skills.css";

function Number({ n }) {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: 200,
      config: { mass: 1, tension: 20, friction: 26 },
    });
    return (
      <animated.span>
        {number.to((n) => {
          return n.toFixed(0);
        })}
      </animated.span>
    );
  }


const SkillsSection = () => {
    const numberRef=useRef(null);
    const [isAnimated,setIsAnimated]=useState(false);
    useEffect(()=>{
        const onScroll=()=>{
          const currentPosition=window.pageYOffset+window.innerHeight;
          const targetPosition=numberRef.current.offsetTop + numberRef.current.offsetHeight/2;
          if(!isAnimated && currentPosition >= targetPosition +2000){
            setIsAnimated(true);
          }
        };
        window.addEventListener('scroll',onScroll)
      },[isAnimated]);
  return ( 
    <div>
        <div className="skill-section" id="skill-section">
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
                                <a href="https://github.com/Youngjung3" target={"_blank"}>깃허브 보기</a>
                            </div>
                        </div>
                        <div className="right">
                            <div className="filter">
                                <ul>
                                    <li><a href="#!" className="c-pointer" data-tab="tab_1"><span>Skills</span><img src="arrow.svg" alt="" /></a></li>
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
                                                        <span className="in"><DiReact /></span>
                                                    </span>
                                                    <p className="name">React(
                                                        <span ref={numberRef}> {isAnimated && <Number n={95} />}%</span>
                                                        )
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="list_inner">
                                                    <span className="icon">
                                                        <span className="in"><TbBrandReactNative /></span>
                                                    </span>
                                                    <p className="name">React-Native
                                                    (
                                                        <span ref={numberRef}> {isAnimated && <Number n={93} />}%</span>
                                                        )
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="list_inner">
                                                    <span className="icon">
                                                        <span className="in"><FaVuejs /></span>
                                                    </span>
                                                    <p className="name">Vue
                                                    (
                                                        <span ref={numberRef}> {isAnimated && <Number n={95} />}%</span>
                                                        )
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="list_inner">
                                                    <span className="icon">
                                                        <span className="in"><DiJavascript1 /></span>
                                                    </span>
                                                    <p className="name">JavaScript
                                                    (
                                                        <span ref={numberRef}> {isAnimated && <Number n={94} />}%</span>
                                                        )
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="list_inner">
                                                    <span className="icon">
                                                        <span className="in"><DiMysql /></span>
                                                    </span>
                                                    <p className="name">MySQL
                                                    (
                                                        <span ref={numberRef}> {isAnimated && <Number n={100} />}%</span>
                                                        )
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="list_inner">
                                                    <span className="icon">
                                                        <span className="in"><TbDatabase /></span>
                                                    </span>
                                                    <p className="name">Oracle
                                                    (
                                                        <span ref={numberRef}> {isAnimated && <Number n={93} />}%</span>
                                                        )
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="list_inner">
                                                    <span className="icon">
                                                        <span className="in"><DiNodejsSmall /></span>
                                                    </span>
                                                    <p className="name">Node.js
                                                    (
                                                        <span ref={numberRef}> {isAnimated && <Number n={92} />}%</span>
                                                        )
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="list_inner">
                                                    <span className="icon">
                                                        <span className="in"><FaJava /></span>
                                                    </span>
                                                    <p className="name">JSP
                                                    (
                                                        <span ref={numberRef}> {isAnimated && <Number n={90} />}%</span>
                                                        )
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="list_inner">
                                                    <span className="icon">
                                                        <span className="in"><FaPhp /></span>
                                                    </span>
                                                    <p className="name">PHP
                                                    (
                                                        <span ref={numberRef}> {isAnimated && <Number n={97} />}%</span>
                                                        )
                                                    </p>
                                                </div>
                                            </li>
                                            {/* <li>
                                                <div className="list_inner">
                                                    <span className="icon">
                                                        <span className="in"><CgCPlusPlus /></span>
                                                    </span>
                                                    <p className="name">C++
                                                        (
                                                        <span ref={numberRef}> {isAnimated && <Number n={100} />}%</span>
                                                        )
                                                    </p>
                                                </div>
                                            </li> */}
                                            <li>
                                                <div className="list_inner">
                                                    <span className="icon">
                                                        <span className="in"><DiJava /></span>
                                                    </span>
                                                    <p className="name">JAVA
                                                    (
                                                        <span ref={numberRef}> {isAnimated && <Number n={93} />}%</span>
                                                        )
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="list_inner">
                                                    <span className="icon">
                                                        <span className="in"><DiJqueryLogo /></span>
                                                    </span>
                                                    <p className="name">JQuery
                                                    (
                                                        <span ref={numberRef}> {isAnimated && <Number n={97} />}%</span>
                                                        )
                                                    </p>
                                                </div>
                                            </li>
                                            {/* <li>
                                                <div className="list_inner">
                                                    <span className="icon">
                                                        <span className="in"><DiJava /></span>
                                                    </span>
                                                    <p className="name">Python
                                                    (
                                                        <span ref={numberRef}> {isAnimated && <Number n={87} />}%</span>
                                                        )
                                                    </p>
                                                </div>
                                            </li> */}
                                            <li>
                                                <div className="list_inner">
                                                    <span className="icon">
                                                        <span className="in"><TbBrandPython /></span>
                                                    </span>
                                                    <p className="name">Python
                                                       (
                                                        <span ref={numberRef}> {isAnimated && <Number n={87} />}%</span>
                                                        )
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