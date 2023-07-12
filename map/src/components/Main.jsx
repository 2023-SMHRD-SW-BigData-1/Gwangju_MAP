import React, { useEffect, useState } from 'react'
import Header from './Header'
import './Main.css'
import FirstChart from './chart/firstChart'
import SecondChart from './chart/secondChart'
import ThirdChart from './chart/thirdChart'
import FourthChart from './chart/fourthChart'
import FiveChart from './chart/fiveChart'
import axios from 'axios'
import BoardList from './board/BoardList'

const Main = () => {

//   // 차트 1번 데이터 받아오기
//   const [ch1,setCh1] = useState({})
//   useEffect(()=>{
//     console.log('첫 렌더링');
//     axios.get('http://localhost:8888/crimeCounter')
//     .then((res)=>{
//       console.log(res.data);
//       setCh1 = res.data
//     })
//     .catch(()=>{})
//   },[])



  return (
    <div className='main' style={{backgroundColor : 'F4FFFF'}}>
        <Header/>
        <div>
          <h1></h1>
        </div>
        <div className = "FCT" >
          <div className='FCT1' style={{ width : 1100, height : 650}}>
            <div className='FCT1T'>
          <h4>cctv 설치 수</h4>
          <h4>범죄율</h4>
            </div>
            <FirstChart  /></div>
            <div className='FCT2' style={{width : 700, height : 650}} ><SecondChart /></div>
        </div>

        <div className='FCM' > 
        <div className='FCM1' style={{width : 800, height : 500}}> <ThirdChart/>  </div>
        <div className='FCM2' style={{ width : 700, height : 600}}> <FourthChart/> </div>
        <div className='FCM3' style={{ width : 400, height : 400}}> <FiveChart/> </div>
    </div>  

    <div className='Board'>
    <BoardList></BoardList>
      </div>

      <div className='FCF'>
        <h1> 지도 영역</h1>
      </div>

    </div>  
  )
}

export default Main