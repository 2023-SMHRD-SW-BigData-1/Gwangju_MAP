import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Header = () => {
  
  

  return (
    <div>
      <div className="header">
        <div className="tlt1">
          <h1>광주안전지도</h1>
        </div>
        <div className="login">
          <Link to="/pages/Login">
          <button type="button" class="btn btn-primary btn-lg">로그인</button>
          </Link>
        </div>
      </div>
     
    </div>
  );
};

export default Header;