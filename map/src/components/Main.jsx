import React, { useEffect, useState } from 'react'
import Header from './Header'
import './Main.css'
import FirstChart from './chart/firstChart'
import SecondChart from './chart/secondChart'
import ThirdChart from './chart/thirdChart'
import FourthChart from './chart/fourthChart'
import FiveChart from './chart/fiveChart'
import axios from 'axios'
import MainBoardList from './board/MainBoardList'
import Write from './board/Write'
import Kakaomap from '../pages/kakaomap'
import { Routes } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'



// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';

const Main = () => {

  // 차트 데이터 받아오기
  const [ch1, setCh1] = useState({})
  const [ch2, setCh2] = useState({})
  const [ch3, setCh3] = useState({})
  const [ch4, setCh4] = useState({})
  const [ch5, setCh5] = useState({})

  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);

  // 1번 차트
  useEffect(() => {
    axios.get('http://localhost:8888/crimeCounter', {
      params: {
        region: selectedRegion,
        year: selectedYear
      }
    })
      .then((res) => {
        setCh1(res.data);
      })
      .catch(() => { });
  }, [selectedYear, selectedRegion]);

  // 2번 차트
  useEffect(() => {
    axios.get('http://localhost:8888/lightCounter')
      .then((res) => {
        setCh2(res.data);
      })
      .catch(() => { });
  }, []);

  // 3번 차트
  useEffect(() => {
    axios.get('http://localhost:8888/third', {
      params: {
        year: selectedYear
      }
    })
      .then((res) => {
        setCh3(res.data);
      })
      .catch(() => { });
  }, [selectedYear]);

  // 4번 차트
  useEffect(() => {
    axios.get('http://localhost:8888/fourth', {
      params: {
        region: selectedRegion,
        year: selectedYear
      }
    })
      .then((res) => {
        setCh4(res.data);
      })
      .catch(() => { });
  }, [selectedYear, selectedRegion]);

  // useEffect(() => {
  //   if (ch4.length > 0) {
  //     console.log(ch4[0].name, ch4[0].value);
  //     console.log(ch4[1].name, ch4[1].value);
  //     console.log(ch4[2].name, ch4[2].value);
  //     console.log(ch4[3].name, ch4[3].value);
  //     console.log(ch4[4].name, ch4[4].value);
  //   }
  // }, [ch4]);

  // 5번 차트
  useEffect(() => {
    axios.get('http://localhost:8888/five')
      .then((res) => {
        setCh5(res.data);
      })
      .catch(() => { });
  }, []);

  const handleYearSelect = (year) => {
    setSelectedYear(year);
    axios.post('http://localhost:8888/year', { year })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
    axios.post('http://localhost:8888/region', { region })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };


  return (
    <div className='main' style={{ backgroundColor: '#ccd7ff' }}>

      {/* 연도, 구 선택 */}
      <div className="dropdown d-flex">
        <div className="dropdown-group me-3">
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

      <div className="FCT" >

        <div className='FCT1' style={{ width: 900, height: 500 }}>

          <div className='FCT1T'>
            {/* <h4>cctv 설치 수</h4>
          <h4>범죄율</h4> */}
          </div>

          <FirstChart cdata={ch1} /></div>

        <div className='FCT2' style={{ width: 700, height: 500 }} > <ThirdChart cdata3={ch3} />
          <div className='FCT2N'><h4>범죄율</h4>
            {ch3.length > 0 && ch3.slice(0, 5).map((item) => (
              <div key={item.subject}>{item.subject}: {item.A}</div>
              ))}
          </div>
              </div>

      </div>

      <div className='FCM' >
        <div className='FCM1' style={{ width: 800, height: 450 }}> <FourthChart cdata4={ch4} />
          <div><h4>5대범죄 검거현황</h4>
            {ch4.length > 0 && ch4.slice(0, 5).map((item) => (
              <div key={item.name}>{item.name}: {item.value}</div>
              ))}
              </div>


        </div> 
        <div className='FCM2' style={{ width : 500, height : 450}}> <SecondChart  cdata2 = {ch2}/>  </div>
        <div className='FCM3' style={{ width : 500, height : 450}}> <FiveChart cdata5={ch5}/> </div>
    </div>  
    <div><br/></div>
    <div className="Board">
        <MainBoardList />
      </div>

      <div className="ft">
        <div className="ftl" style={{ backgroundColor: 'white' }}>
          <LandingPage />
        </div>
        <div className="ftk" style={{ backgroundColor: 'white', display:'none' }}>
          <Kakaomap />
        </div>
      </div>



    </div>
  )
}

export default Main