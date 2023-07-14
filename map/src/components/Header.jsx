import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);

  const handleYearSelect = (year) => {
    setSelectedYear(year);
    // 선택한 연도를 필요한 곳으로 전달하는 로직을 추가할 수 있습니다.
    // 예: API 호출, 상태 업데이트 등
    console.log('Selected Year:', year);
  };

  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
    // 선택한 구를 필요한 곳으로 전달하는 로직을 추가할 수 있습니다.
    // 예: API 호출, 상태 업데이트 등
    console.log('Selected Region:', region);
  };

  return (
    <div>
      <div className="header">
        <div className="tlt1">
          <h1>광주안전지도</h1>
        </div>
        <div className="login">
          <Link to="/pages/Login">
            <h2>로그인</h2>
          </Link>
        </div>
      </div>
      <div className="dropdown">
        <div className="dropdown-group">
          <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            연도선택
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#" onClick={() => handleYearSelect(2017)}>2017</a></li>
            <li><a className="dropdown-item" href="#" onClick={() => handleYearSelect(2018)}>2018</a></li>
            <li><a className="dropdown-item" href="#" onClick={() => handleYearSelect(2019)}>2019</a></li>
            <li><a className="dropdown-item" href="#" onClick={() => handleYearSelect(2020)}>2020</a></li>
            <li><a className="dropdown-item" href="#" onClick={() => handleYearSelect(2021)}>2021</a></li>
          </ul>
        </div>
        <div className="dropdown-group">
          <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            구 선택
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#" onClick={() => handleRegionSelect('광산구')}>광산구</a></li>
            <li><a className="dropdown-item" href="#" onClick={() => handleRegionSelect('남구')}>남구</a></li>
            <li><a className="dropdown-item" href="#" onClick={() => handleRegionSelect('서구')}>서구</a></li>
            <li><a className="dropdown-item" href="#" onClick={() => handleRegionSelect('북구')}>북구</a></li>
            <li><a className="dropdown-item" href="#" onClick={() => handleRegionSelect('동구')}>동구</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;