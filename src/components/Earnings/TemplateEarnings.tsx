import { makeStyles, Typography, Button } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import Box from '@material-ui/core/Box';
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const useStyles = makeStyles((theme) => ({
  box: {
    overflow: 'hidden',
    background: '#2B2B2B',
    minHeight: 710,
    maxWidth: 1224,
    borderRadius: 16,
    boxSizing: 'border-box',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex start',
    padding: 24,
  },
  headerEarnings: {
    height: 68,
    background: '#2B2B2B',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 25px',
  },
  headerRight: {
    '& h1': {
      color: '#F2A627',
    },
    '& h2': {
      color: '#FFFFFF',
    },
  },
  title: {
    marginBottom: 8,
    fontFamily: 'IBM Plex Sans',
    fontSize: 20,
    color: '#FFFFFF',
    [theme.breakpoints.down(400)]: {
      fontSize: 16,
    },
  },
  subtitle: {
    fontFamily: 'IBM Plex Sans',
    fontSize: 13,
    color: '#747474',
    [theme.breakpoints.down(400)]: {
      fontSize: 8,
    },
  },
  buttonEarnings: {
    width: 140,
    height: 40,
    borderRadius: 4,
    border: '1px solid #000000',
    background: '#101010 !important',
    '& h3': {
      color: '#fff !important',
      fontFamily: 'IBM Plex Sans',
      fontSize: 13,
      textTransform: 'none !important',
    },
  },
  buttonRight: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    background: '#222222',
    color: '#fff',
    '& button': {
      color: '#888888 !important',
      fontFamily: 'IBM Plex Sans',
      fontSize: 13,
      textTransform: 'none !important',
    },
  },
  chart: {
    backgroundColor: '#101010',
    borderRadius: '8px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
  },
];
// const CustomTooltip = ({ name, uv, pv }) => {
//   if (pv && uv && pv.lenght) {
//     return (
//       <div>
//         <p>{name}</p>
//         <p>{`Badger/wBTC ${uv}`}</p>
//         <p>{`crvRenWBTC ${pv}`}</p>
//       </div>
//     );
//   }
// };
const TemplateEarnings = observer(() => {
  const classes = useStyles();
  return (
    <Box component="section" className={classes.box}>
      <Box component="header" className={classes.headerEarnings}>
        <Box component="div">
          <Typography variant="h1" align="left" className={classes.title}>
            Earnings from sett vaults
          </Typography>
          <Typography variant="h2" align="left" className={classes.subtitle}>
            Compounding and $BADGER rewards
          </Typography>
        </Box>
        <Box component="div" className={classes.headerRight}>
          <Typography variant="h1" align="right" className={classes.title}>
            $1,434.66
          </Typography>
          <Typography variant="h2" align="right" className={classes.subtitle}>
            271.14 $BADGER
          </Typography>
        </Box>
      </Box>
      <Box component="div" className={classes.headerEarnings}>
        <Button variant="contained" disabled className={classes.buttonEarnings}>
          <h3>All Sett Vaults</h3>
        </Button>
        <Box component="div" className={classes.headerRight}>
          <ul className={classes.buttonRight}>
            <li>
              <Button>1D</Button>
            </li>
            <li>
              <Button>1W</Button>
            </li>
            <li>
              <Button>1M</Button>
            </li>
            <li>
              <Button>1Y</Button>
            </li>
            <li>
              <Button>All Time</Button>
            </li>
          </ul>
        </Box>
      </Box>
      <ResponsiveContainer className={classes.chart} width="95%" aspect={3}>
        <AreaChart
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
          <XAxis />
          <YAxis />
          <Tooltip cursor={{ strokeDasharray: '4 4', stroke: '#aaaa' }} />
          <Legend />
          <Area dataKey="pv" stackId="1" stroke="#9E8EFF" strokeWidth="4" fill="url(#colorcrv)" />
          <Area dataKey="uv" stackId="1" stroke="#F2A627" strokeWidth="4" fill="url(#colorbad)" />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
});
export default TemplateEarnings;
