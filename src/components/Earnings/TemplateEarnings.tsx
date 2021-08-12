import React, { useContext } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { makeStyles, Typography, Button, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import Box from '@material-ui/core/Box';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
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
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 140,
    height: 40,
    borderRadius: 4,
    padding: '0 11px',
    border: '1px solid #000000',
    background: '#101010 !important',
    '& h6': {
      color: '#fff !important',
      fontFamily: 'IBM Plex Sans',
      fontSize: 13,
      textTransform: 'none !important',
      fontWeight: 'bold',
    },
  },

  buttonList: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#222222',
    height: 40,
    borderRadius: 10,

    '& button': {
      width: 51,
      height: 40,
      background: '#222222',
      color: '#888888',
      padding: 0,
      fontSize: 13,
      '&:first-child': {
        borderRadius: '10px 0 0 10px',
        color: '#fff',
      },
      '&:last-child': {
        borderRadius: '0px 10px 10px 0',
      },
    },
    '& .MuiBottomNavigationAction-root.Mui-selected': {
      fontSize: 13,
      background: '#111111',
      color: '#888888',
      border: '1px solid #000000',
      padding: 0,
    },
  },
  chart: {
    backgroundColor: '#101010',
    borderRadius: '8px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  tooltip: {
    backgroundColor: '#101010',
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
const CustomTooltip = ({ name, uv, pv }: any) => {
  const classes = useStyles();
  console.log(name, pv, uv);
  return (
    <Box component="div" className={classes.tooltip}>
      <p>{name}</p>
      <p>{`Badger/wBTC ${uv}`}</p>
      <p>{`crvRenWBTC ${pv}`}</p>
    </Box>
  );
};
const TemplateEarnings = observer(() => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
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
        <Button className={classes.buttonEarnings}>
          <Typography variant="h6">All Sett Vaults</Typography>
          <KeyboardArrowDownOutlinedIcon style={{ fontSize: 12, color: '#707070' }} />
        </Button>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.buttonList}
        >
          <BottomNavigationAction label="1D" />
          <BottomNavigationAction label="1W" />
          <BottomNavigationAction label="1M" />
          <BottomNavigationAction label="1Y" />
          <BottomNavigationAction label="All time" />
        </BottomNavigation>
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
          <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '4 4', stroke: '#aaaa' }} />
          <Legend />
          <Area dataKey="pv" stackId="1" stroke="#9E8EFF" strokeWidth="4" fill="url(#colorcrv)" />
          <Area dataKey="uv" stackId="1" stroke="#F2A627" strokeWidth="4" fill="url(#colorbad)" />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
});
export default TemplateEarnings;
