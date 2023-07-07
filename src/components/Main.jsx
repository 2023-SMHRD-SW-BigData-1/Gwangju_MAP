import React from 'react'
import './Header.css'
import Header from './Header'
import FirstChart from './chart/firstChart'
import SecondChart from'./chart/secondChart'
import ThirdChart from './chart/thirdChart'
import FourthChart from './chart/fourthChart'
import FiveChart from './chart/fiveChart'
import './Main.css'



const Main = () => {
  return (
    <div className='main' style={{backgroundColor : '#F4FFFF'}}>

        <Header />

        <div className = "FCT" >
          <div className='FCT1' style={{ width : 1000, height : 600}}>
            <div className='FCT1T'>
          <h3>광주5대 범죄 발생건수 그래프</h3>
            </div>
            <FirstChart /></div>
        <div className='FCT2' style={{width : 600, height : 600}} ><SecondChart /></div>
        </div>
      <div className='FCM' > 
        <div className='FCM1' style={{width : 800, height : 500}}> <ThirdChart/>  </div>
        <div className='FCM2' style={{ width : 500, height : 500}}> <FourthChart/> </div>
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