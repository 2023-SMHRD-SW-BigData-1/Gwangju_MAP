import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Header.css'


const Header = () => {

  const nav = useNavigate()

  const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem('nick') !== null);

  const handleLogout = () => {
    sessionStorage.removeItem('nick');
    sessionStorage.removeItem('id');

    setIsLoggedIn(false);
  };

  return (
    <div>
      <div className="header">
        <div className="tlt1">
          <h1 className="header-title" onClick={()=>{nav('/')}}>
          <img src="http://localhost:3000/img/logo.png" width='50px'></img>
            광주안전지도
            </h1>
        </div>
        <div className="login">
          {isLoggedIn ? (
            <button type="button" className="btn btn-primary btn-lg" onClick={handleLogout}>
              로그아웃
            </button>
          ) : (
            <Link to="/pages/Login">
              <button type="button" className="btn btn-primary btn-lg">
                로그인
              </button>
            </Link>
          )}<Link to="/list">
          <button type="button" className="btn btn-primary btn-lg">
            안전게시판
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;