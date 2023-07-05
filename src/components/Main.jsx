import React from 'react'
import './Header.css'
import Header from './Header'
import FirstChart from './chart/firstChart'
import SecondChart from'./chart/secondChart'
import './Main.css'



const Main = () => {
  return (
    <div className='main' style={{
      backgroundColor : 'whitesmoke'
    }}>
        <Header />
        <div className = "FC" style={{
          width : 1100,
          height : 600,
          backgroundcolor: 'white'
        }}>
     <FirstChart></FirstChart>
        </div>
        <div className='SC' style={{
          width : 500,
          height : 600,
          backgroundcolor: 'white'
        }}>
      <SecondChart></SecondChart>
        </div>
        
    </div>
  )
}

export default Main