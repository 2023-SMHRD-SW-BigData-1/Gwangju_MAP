import React, { PureComponent, useEffect } from 'react';
import axios from 'axios';



// cctv 설치 수 => pv
// 범죄율 => uv

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


const data = [
  {
    name: '광산구',
    uv: 600,
    pv: 800
  },
  {
    name: '남구',
    uv: 868,
    pv: 967
  },
  {
    name: '서구',
    uv: 1397,
    pv: 1098
  },
  {
    name: '북구',
    uv: 1480,
    pv: 1200,
  },
  {
    name: '동구',
    uv: 1520,
    pv: 1108
  }
  
];





export default class Example   extends PureComponent  {
  static demoUrl = 'https://codesandbox.io/s/simple-composed-chart-h9zif';
  
  render() {
    
    return (
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
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
  }
}


