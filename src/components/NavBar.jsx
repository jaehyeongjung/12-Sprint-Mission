import logo from "../images/Group 19.svg";
import profile from "../images/Group 33728.svg";
import "../components/NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <header className="navBar">
      <div className="navContainer">
        <div>
          <img className="navLogo" src={logo} alt="헤더이미지" />
        </div>
        <div>
          <div className="navContents">
            <NavLink className="navContent" to="./Itempage">
              자유게시판
            </NavLink>
            <NavLink className="navContent" to="./Itempage">
              중고마켓
            </NavLink>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div>
        <img className="navProfile" src={profile} alt="개인프로필" />
      </div>
    </header>
  );
}

export default NavBar;
