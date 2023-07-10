import React from 'react'
import Header from './Header'
import FirstChart from './chart/firstChart'


const Main = () => {
  return (
    <div className='main' style={{backgroundColor : '#F4FFFF'}}>
      <Header/>
        <div className = "FCT" >
          <div className='FCT1' style={{ width : 1000, height : 600}}>
            <div className='FCT1T'>
          <h3>광주5대 범죄 발생건수 그래프</h3>
            </div>
            <FirstChart/></div>
            </div>





            </div>
  )
}

export default Main