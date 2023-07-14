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
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';

const Main = () => {

  // 차트 데이터 받아오기
  const [ch1,setCh1] = useState({})
  const [ch2,setCh2] = useState({})
  const [ch3,setCh3] = useState({})
  const [ch4,setCh4] = useState({})
  const [ch5,setCh5] = useState({})
  
// 1번 차트 
  useEffect(()=>{
    axios.get('http://localhost:8888/crimeCounter')
    .then((res)=>{
      // console.log(res.data);
      setCh1(res.data)
    })
    .catch(()=>{})
  },[])

  // 2번 차트
  useEffect(()=>{
    axios.get('http://localhost:8888/lightCounter')
    .then((res)=>{
      // console.log(res.data);
      setCh2(res.data)
    })
    .catch(()=>{})
  },[])

// 3번 차트
useEffect(()=>{
  axios.get('http://localhost:8888/third')
  .then((res)=>{
    // console.log(res.data);
    setCh3(res.data)
  })
  .catch(()=>{})
},[])

// 4번 차트
useEffect(()=>{
  axios.get('http://localhost:8888/fourth')
  .then((res)=>{
    // console.log(res.data);
    setCh4(res.data)
  })
  .catch(()=>{})
},[]) 

// 5번 차트
useEffect(()=>{
  axios.get('http://localhost:8888/five')
  .then((res)=>{
    // console.log(res.data);
    setCh5(res.data)
  })
.catch(()=>{})
},[])




  return (
    <div className='main' style={{backgroundColor : 'F4FFFF'}}>
        <Header/>

         


        
        <div className = "FCT" >
          <div className='FCT1' style={{ width : 1100, height : 650}}>
            <div className='FCT1T'>
          <h4>cctv 설치 수</h4>
          <h4>범죄율</h4>
            </div>
            <FirstChart cdata={ch1}   /></div>
            <div className='FCT2' style={{width : 700, height : 650}} ><SecondChart  cdata2 = {ch2}/></div>
        </div>

        <div className='FCM' > 
        <div className='FCM1' style={{width : 800, height : 500}}> <ThirdChart cdata3={ch3} />  </div>
        <div className='FCM2' style={{ width : 700, height : 600}}> <FourthChart cdata4={ch4} /> </div>
        <div className='FCM3' style={{ width : 400, height : 400}}> <FiveChart cdata5={ch5}/> </div>
    </div>  

    <div className='Board'>
    {/* <BoardList dbl_data={dbl}></BoardList> */}
    
      </div>

      <div className='FCF'>
        <h1> 지도 영역</h1>
      </div>

    </div>  
  )
}

export default Main