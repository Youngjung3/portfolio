import {useState,useEffect,useRef} from "react";
import { useSpring, animated } from "@react-spring/web";
import "./works.css";

function Number({ n }) {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: 200,
      config: { mass: 1, tension: 20, friction: 26 },
    });
    return (
      <animated.div>
        {number.to((n) => {
          return n.toFixed(0);
        })}
      </animated.div>
    );
  }

const WorksSection = () => {
    const numberRef=useRef(null);
    const [isAnimated,setIsAnimated]=useState(false);
    useEffect(()=>{
      const onScroll=()=>{
        const currentPosition=window.pageYOffset+window.innerHeight;
        const targetPosition=numberRef.current.offsetTop + numberRef.current.offsetHeight/2;
        if(!isAnimated && currentPosition >= targetPosition + 3000){
          setIsAnimated(true);
        }
      };
      window.addEventListener('scroll',onScroll)
    },[isAnimated]);
  return (
    <div className="workSection">
        <div className="work-info">
            {/* <div className="container">
                <div className="title">
                    <h3>
                        <span>Look at my <br /> recent projects</span>
                    </h3>
                </div>
                <div className="work-list">
                    
                </div>
            </div> */}
                <div className="container">
                <div className="title">
                    <h3>
                        <span>자신있는 기술스택</span>
                    </h3>
                </div>
                    <div className="counter-list">
                        <ul>
                            <li>
                                <div className="list-inner">
                                    <h3>
                                        <span className="list-counter" ref={numberRef}>
                                            {isAnimated && <Number n={100} />}
                                        </span>
                                    </h3>
                                    <span className="title">React</span>
                                </div>
                            </li>
                            <li>
                                <div className="list-inner">
                                    <h3>
                                    <span className="list-counter" ref={numberRef}>
                                            {isAnimated && <Number n={95} />}
                                        </span>
                                    </h3>
                                    <span className="title">Vue</span>
                                </div>
                            </li>
                            <li>
                                <div className="list-inner">
                                    <h3>
                                    <span className="list-counter" ref={numberRef}>
                                            {isAnimated && <Number n={100} />}
                                        </span>
                                    </h3>
                                    <span className="title">MySQL</span>
                                </div>
                            </li>
                            <li>
                                <div className="list-inner">
                                    <h3>
                                    <span className="list-counter" ref={numberRef}>
                                            {isAnimated && <Number n={90} />}
                                        </span>
                                    </h3>
                                    <span className="title">JAVA</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
        </div>
        {/* <div className="skill-section">
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
        </div> */}
    </div>
  );
};
export default WorksSection;
