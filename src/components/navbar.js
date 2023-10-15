import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {Link,useNavigate, Navigate} from 'react-router-dom'
import {useState} from'react';

const Navbar = ({authenticate,setAuthenticate}) => {

    const navigate = useNavigate();
    const menuList = ['여성','Divide','남성','신생아/유아','아동','H&M Home','Sale','지속가능성']
    const goToLogin=()=>{
        if (authenticate==false){
        navigate("./login");
        } else if (authenticate==true){
            console.log("로그아웃됩니다.");
            setAuthenticate(false);
            navigate("/");
            
        }
    }
    const search = (event)=>{
        if(event.key=="Enter"){
            //console.log("enter keypress");
            //입력한 검색어를 읽어와서 url을 바꿔줘야함.
            let keyword=event.target.value;
            //console.log(keyword);
            navigate(`/?q=${keyword}`)
        }
    }
    const gotomain=()=>{
        navigate("/")
    }

  return (
    <div>
        <div>
            <div className="loginButton"
                onClick={goToLogin}>
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                
                <div>{authenticate==false ? "로그인" : "로그아웃"}</div>
                
            </div>
        </div>

        <div className="logoSection" onClick={gotomain}>
            <img width={100} 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1200px-H%26M-Logo.svg.png"></img>
        </div>

        <div className="menuArea">
            <ul className="menuList">
                    {menuList.map((data)=>
                        <li>{data}</li>
                    )}
                    
            </ul>

            <div className='searchBar'>
                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                <input type="text" placeholder="검색어를 입력하세요"
                    onKeyPress={(event)=>search(event)}
                >
                </input>      
            </div>
            
        </div>

      
    </div>
  )
}

export default Navbar
