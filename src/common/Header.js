import {Link, useNavigate} from "react-router-dom";
import "./Header.css";


const Header = () => {
    let navigate=useNavigate();
    return (
      <div>
        <div id="header">
          <div id="header-area">
            <div>
                <Link to="/">
                  logo
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