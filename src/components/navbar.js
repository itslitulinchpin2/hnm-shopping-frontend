import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

    const menuList = ['여성','Divide','남성','신생아/유아','아동','H&M Home','Sale','지속가능성']

  return (
    <div>
        <div>
            <div className="loginButton">
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                <div>로그인</div>
            </div>
        </div>

        <div className="logoSection">
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
                <input type="text" placeholder="검색어를 입력하세요">
                </input>      
            </div>
            
        </div>

      
    </div>
  )
}

export default Navbar
