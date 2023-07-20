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
const Example = ({ cdata }) => {

  let [ch1, setCh1] = useState([])

  let data = cdata;

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
        <Bar dataKey="uv" barSize={20} fill="#413ea0" name='범죄 검거현황' />
        <Line type="monotone" dataKey="pv" stroke="#ff7300" name='CCTV 설치현황' />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default Example;

