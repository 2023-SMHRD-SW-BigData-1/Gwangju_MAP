import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div>
        <div className='header'>
        <div className='tlt1'>
          <h1>광주안전지도</h1>
        </div>
        <div className='login'>
        <h2>로그인</h2>
        </div>
        </div>

        <div className='tlt2' style={{ borderBottom: '1px solid lightgray'}}>
        <h2>현재 사용자의 위치 : 광주 동구</h2>
      </div>


    </div>
  )
}

export default Header