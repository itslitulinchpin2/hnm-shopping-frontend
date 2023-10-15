import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link, Navigate} from 'react-router-dom'
import {useState, useEffect} from 'react';
import ProductDetail from './pages/productDetail';
import ProductAll from './pages/productAll';
import Login from './pages/login';
import Navbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from './route';
import { useSelector } from 'react-redux/es/hooks/useSelector';
//개발큰그림
//1. 전체상품페이지, 로그인페이지, 상품상세페이지
//1-1.네비게이션바 구현
//2. 전체상품페이지에서는 전체 상품 열람
//3. 로그인버튼 ->로그인화면
//4. 로그인 안된 경우 상품을 눌렀을때 로그인화면 이동
//5. 로그인 된 경우 상품 눌렀을때 상품상세페이지 이동
//6. 로그아웃버튼 -> 로그아웃완료. 상품상세 열람불가
//7. 로그인 유무에 따라 로그인/아웃 버튼 바뀜
//8. 검색창 구현

function App() {

//const [authenticate,setAuthenticate]= useState(false); //true이면 로그인이 된 상태.
//const [authenticate,setAuthenticate] = useState();
const authenticate = useSelector(state=>state.auth.authenticate)
useEffect(()=>{
  console.log("로그인상황",authenticate)
},[authenticate])


  return (
   <div>
    <Navbar authenticate={authenticate} ></Navbar>
    <Routes>
      <Route path="/" element={<ProductAll></ProductAll>}></Route>
      <Route path="/login" element={<Login authenticate={authenticate}  ></Login>}></Route>
      <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate} ></PrivateRoute>}></Route>
    </Routes>
   </div>
  );
}

export default App;
