import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'May 1',
    BadgerwBTC: 1,
    crvRenWBTC: 0.5,
  },
  {
    name: 'May 2',
    BadgerwBTC: 2,
    crvRenWBTC: 1.2,
  },
  {
    name: 'May 3',
    BadgerwBTC: 1.5,
    crvRenWBTC: 1,
  },
  {
    name: 'May 4',
    BadgerwBTC: 6,
    crvRenWBTC: 3,
  },
  {
    name: 'May 5',
    BadgerwBTC: 3,
    crvRenWBTC: 2,
  },
  {
    name: 'May 6',
    BadgerwBTC: 2.7,
    crvRenWBTC: 1.6,
  },
  {
    name: 'May 7',
    BadgerwBTC: 4,
    crvRenWBTC: 3,
  },
];

export default function Chart() {
  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />

        <Area dataKey="crvRenWBTC" stackId="1" stroke="#9E8EFF" strokeWidth="4" />
        <Area dataKey="BadgerwBTC" stackId="1" stroke="#F2A627" strokeWidth="4" />
      </AreaChart>
    </ResponsiveContainer>
  );
}
