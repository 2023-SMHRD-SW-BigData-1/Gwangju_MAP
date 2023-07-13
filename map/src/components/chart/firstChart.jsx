import React, { PureComponent, useEffect, useState } from 'react';
import axios from 'axios';

import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from 'recharts';
const Example = ({ cdata, cdata1 }) => {
  
  
  
  // cctv 설치 수 => pv
  // 범죄율 => uv
  let [ch1,setCh1]=useState([])

  
  
  
  // console.log(cdata); 
  // console.log(cdata1); 
  

  
  let data = [
    
    {
      name: '광산구',
      uv: 10,  // 범죄건수
      pv:  10 // cctv 현황 // 범죄율
      
    },
    {
      name: '남구',
      uv: 10,
      pv: 10
    },
    {
    name: '서구',
    uv: 10,
    pv: 10
  },
  {
    name: '북구',
    uv: 10,
    pv: 10,
  },
  {
    name: '동구',
    uv: 10,
    pv: 10
  }
  
];


// var data = ch1.map(item => ({
//   name: item.name,
//   pv: item.pv
// }));

// console.log(data,ch1);
data = cdata 
console.log(data);

return (
  <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={500}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
          >

          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
          <Bar dataKey="pv" barSize={20} fill="#413ea0"  name='CCTV 설치현황'/>
           <Line type="monotone" dataKey="uv" stroke="#ff7300" name='범죄율' /> 
          {/* <Scatter dataKey="cnt" fill="red" /> */}
          </ComposedChart>
    </ResponsiveContainer>
  );
};

export default Example;

