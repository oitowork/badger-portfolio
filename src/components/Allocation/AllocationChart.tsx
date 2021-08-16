import React, { useContext } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { Box, makeStyles } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import { StoreContext } from '../../';

const useStyles = makeStyles(() => ({}));

const AllocationChart = observer(() => {
  const classes = useStyles();
  const store = useContext(StoreContext);
  const { account, tokenInfo } = store;

  const data = [
    { name: 'Group A', value: 100 },
    { name: 'Group B', value: 100 },
    { name: 'Group C', value: 100 },
    { name: 'Group D', value: 300 },
  ];
  const COLORS = ['#52B330', '#304DB3', '#6F80BB', '#0D0E13'];

  return (
    <Box component="div">
      <PieChart width={300} height={400}>
        <Pie
          data={data}
          cx="55%"
          cy="40%"
          stroke="none"
          labelLine={false}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
          startAngle={55}
          endAngle={415}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </Box>
  );
});

export default AllocationChart;
