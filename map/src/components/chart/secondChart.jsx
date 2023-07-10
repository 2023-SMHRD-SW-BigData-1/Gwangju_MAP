import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
  {
    subject: '광산구',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: '남구',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: '서구',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: '북구',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: '동구',
    A: 85,
    B: 90,
    fullMark: 150,
  }
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/radar-chart-specified-domain-mfl04';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar name="2023CCVT설치율" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Radar name="CCTV현황" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}
