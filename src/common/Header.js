import React from 'react'
import {Link, useNavigate} from "react-router-dom";
import "./Header.css";
import lottie from 'lottie-web'
import lottieAni from "./loop.json";


const Header = () => {
  const loop= React.useRef();
    let navigate=useNavigate();
    React.useEffect(()=>{
      lottie.loadAnimation(
          {
              container:loop.current,
              animationData:lottieAni,
              loop:true,
              autoplay:true,
          }
      )
  },[])
    return (
      <div>
        <div id="header">
          <div id="header-area">
            <div>
                <Link to="/">
                  <div ref={loop} style={{width:150, position:"absolute", left:0, top:0}}></div>
                </Link>
            </div>
            <div className="nav">
                  <ul className="nav-list">
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Service</a></li>
                    <li><a>Portfolio</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Contact</a></li>
                  </ul>
            </div>
            <div className="h-button">
                <Link>contect</Link>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default Header;