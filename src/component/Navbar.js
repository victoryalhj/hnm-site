import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const menuList = ['WOMEN','DIVIDED','MEN','BABY','KIDS','H&M HOME','SALE','SUSTAINABILITY']
  const navigate = useNavigate()
  const goToLogin = () => {
    navigate("/login");
  };
  const search = (event) => {
    if(event.key === "Enter") {
      //입력한 검색어를 읽어와서 
      let keyword = event.target.value;
      //url을 바꿔준다
      navigate(`/?q=${keyword}`);
    }
  }
  return (
    <div>
      <div>
        <div className="login-button" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser}/>
          <div>로그인</div>
        </div>
      </div>
      <div className="nav-section">
        <img
        width={200} 
        src="https://www.hm.com/entrance/assets/bundle/img/HM-Share-Image.jpg"/>
      </div>

      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
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
