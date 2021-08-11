import React, { useContext } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { makeStyles } from '@material-ui/core';
import { StoreContext } from '..';
import { observer } from 'mobx-react-lite';

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: '#101010',
    borderRadius: '8px',
  },
}));

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

const Chart = observer(() => {
  const classes = useStyles();
  const store = useContext(StoreContext);
  const { account } = store;
  return (
    <div className={classes.box}>
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
          <defs>
            <linearGradient id="colorcrv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.9} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0.06} />
            </linearGradient>
            <linearGradient id="colorbad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.9} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.06} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Tooltip cursor={{ strokeDasharray: '4 4', stroke: '#aaaa' }} />
          <Area dataKey="crvRenWBTC" stackId="1" stroke="#9E8EFF" strokeWidth="4" fill="url(#colorcrv)" />
          <Area dataKey="BadgerwBTC" stackId="1" stroke="#F2A627" strokeWidth="4" fill="url(#colorbad)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
});
export default Chart;
