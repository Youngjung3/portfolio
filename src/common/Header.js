import {Link, useNavigate} from "react-router-dom";


const Header = () => {
    let navigate=useNavigate();
    return (
      <div>
        <div id="header">
          <div id="header-area">
            <Link to="/">
              {/* <img src="../images/icons/logo.png" alt="" /> */}
              f
            </Link>
          </div>
        </div>
      </div>
    );
  };
  export default Header;