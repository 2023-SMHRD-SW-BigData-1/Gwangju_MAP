import React from 'react'
import Header from './Header'
import './Main.css'
import FirstChart from './chart/firstChart'
import SecondChart from './chart/secondChart'
import ThirdChart from './chart/thirdChart'
import FourthChart from './chart/fourthChart'
import FiveChart from './chart/fiveChart'

const Main = () => {
  return (
    <div className='main' style={{backgroundColor : 'F4FFFF'}}>
        <Header/>
        <div className='click'>
        <div className="btn-group">
        <div className="dropdown">
    <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    연도 선택
   </a>
   <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">2018</a></li>
    <li><a className="dropdown-item" href="#">2019</a></li>
    <li><a className="dropdown-item" href="#">2020</a></li>
    <li><a className="dropdown-item" href="#">2021</a></li>
    <li><a className="dropdown-item" href="#">2022</a></li>
   </ul>
    </div>
  
        </div>
        </div>
        <div className = "FCT" >
          <div className='FCT1' style={{ width : 1100, height : 650}}>
            <div className='FCT1T'>
          <h4>cctv 설치 수</h4>
            </div>
            <FirstChart /></div>
            <div className='FCT2' style={{width : 700, height : 650}} ><SecondChart /></div>
        </div>

        <div className='FCM' > 
        <div className='FCM1' style={{width : 800, height : 500}}> <ThirdChart/>  </div>
        <div className='FCM2' style={{ width : 700, height : 600}}> <FourthChart/> </div>
        <div className='FCM3' style={{ width : 400, height : 400}}> <FiveChart/> </div>
    </div>  

    <div className='Board'>
    <h1>게시판 영역</h1>
      </div>

      <div className='FCF'>
        <h1> 지도 영역</h1>
      </div>

    </div>  
  )
}

export default Main