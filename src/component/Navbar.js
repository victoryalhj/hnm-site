import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = ({ authenticate, setAuthenticate }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const menuList = ['WOMEN','DIVIDED','MEN','BABY','KIDS','H&M HOME','SALE','SUSTAINABILITY']
  const navigate = useNavigate()

  const goToLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    setAuthenticate(false); // 로그아웃 시 인증 상태를 false로 변경
    navigate("/login"); // 로그아웃 후 로그인 페이지로 이동
  }

  const search = (event) => {
    if(event.key === "Enter") {
      //입력한 검색어를 읽어와서 
      let keyword = event.target.value;
      //url을 바꿔준다
      navigate(`/?q=${keyword}`);
    }
  };

  // 상품 전체 페이지로 이동하는 함수 추가
  const goToHome = () => {
    navigate("/");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className="navbar">
        <div className="login-button" onClick={authenticate ? handleLogout : goToLogin}>
          <FontAwesomeIcon icon={faUser}/>
          <div>{authenticate ? "LOGOUT" : "LOG IN"}</div>
        </div>
      <FontAwesomeIcon icon={faBars} className="menu-icon" onClick={toggleSidebar} />
      </div>

      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <ul className="menu-list">
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>
      </div>

      <div className="nav-section" >
        <img
          width={200}
          src="https://www.hm.com/entrance/assets/bundle/img/HM-Share-Image.jpg"
          alt=""
          onClick={goToHome}
        />
      </div>


      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>

        <div>
        <FontAwesomeIcon icon={faSearch} />
        <input type="text" onKeyPress={(event)=>search(event)} />
      </div>
    </div>
  </div>
  )
}

export default Navbar
