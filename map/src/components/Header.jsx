import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem('nick') !== null);

  const handleLogout = () => {
    sessionStorage.removeItem('nick');
    setIsLoggedIn(false);
  };

  return (
    <div>
      <div className="header">
        <div className="tlt1">
          <h1>광주안전지도</h1>
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;