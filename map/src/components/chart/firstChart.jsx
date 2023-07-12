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
const Example = ({ Ch1 }) => {
  
  
  
  // cctv 설치 수 => pv
  // 범죄율 => uv
  
  useEffect(() => {
    console.log('첫 렌더링');
    axios
      .get('http://localhost:8888/crimeCounter')
      .then((res) => {
        data = (res.data); 
      })
      .catch(() => {});
  }, []);

  



let data = [
  {
    name: '광산구',
    uv: 300,  // 범죄건수
    pv: 3000  // cctv 현황 // 범죄율
  },
  {
    name: '남구',
    uv: 300,
    pv: 1967
  },
  {
    name: '서구',
    uv: 820,
    pv: 3098
  },
  {
    name: '북구',
    uv: 520,
    pv: 1500,
  },
  {
    name: '동구',
    uv: 720,
    pv: 3008
  }
  
];






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

