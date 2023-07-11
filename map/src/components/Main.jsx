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
        <div class="btn-group">
  <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Action
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
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