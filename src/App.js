import React, {useState, useEffect} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./component/Navbar";
import PrivateRoute from "./route/PrivateRoute";

// 1.전체상품페이지, 로그인, 상품페이지
// 1-1.내비게이션바
// 2.전체상품을 볼수있음
// 3.로그인 버튼을 누르면 로그인 페이지가 나온다
// 4.상품디테일을 눌렀으나, 로그인이 안되있을경우 로그인페이지
// 5.로그인된경우, 상품 디테일 페이지 볼수있음
// 6.로그아웃 버튼을 클릭하면, 로그아웃이된다
// 7.로그아웃이되면 상품 디테일페이지 볼수없음, 다시 로그인페이지 
// 8.로그인하면 로그아웃보이고, 로그아웃하면 로그인보임
// 9.상품을 검색할수 있음

function App() {
  const [authenticate, setAuthenticate] = useState(false);//true는 로그인됨 false 로그인안됨
 
  useEffect(() => {
    console.log("authenticate", authenticate)
  },[authenticate]);

  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>} />
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate}/>} />
      </Routes>
    </div>
  );
}

export default App;
