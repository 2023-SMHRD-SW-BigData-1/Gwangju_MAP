import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 39.07,
    amt: 2000,
  },
  {
    name: 'Page E',
    pv: 4800,
    uv: 18.89,
    amt: 2181,
  },
  {
    name: 'Page F',
    pv: 3800,
    uv: 23.66,
    amt: 2500,
  },
  {
    name: 'Page G',
    pv: 4300,
    uv: 34.22,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';

  render() {
    const { cdata3 } = this.props;
    console.log(cdata3);  
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" name='범죄발생건수' />
          <Bar dataKey="uv" fill="#82ca9d"  name='범죄율'/>
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
