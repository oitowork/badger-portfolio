import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { StoreContext } from '../..';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import { AreaChart, Area, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {
  makeStyles,
  Typography,
  Button,
  BottomNavigation,
  BottomNavigationAction,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from '@material-ui/core';
import Data from './staticData';
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
    display: 'block',
    width: 273,

    '& li': {
      // display: 'flex',
      // justifyContent: 'center',
    },
  },
}));

const CustomTooltip = ({ active, payload, label }: any) => {
  const classes = useStyles();

  if (active && payload && payload.length) {
    const valorTotal = payload.reduce((total: any, value: any) => {
      return total + value.value;
    }, 0);
    console.log(payload);
    return (
      <Box component="div" className={classes.tooltip}>
        <List disablePadding={false}>
          {payload.map((item: any, index: number) => {
            return (
              <ListItem disableGutters key={index}>
                <ListItemIcon>
                  <FiberManualRecordIcon style={{ color: 'green', width: 8 }} />
                </ListItemIcon>
                <ListItemText primary={item.dataKey} />
                <Typography>oi</Typography>
              </ListItem>
            );
          })}
          <p>{valorTotal}</p>
        </List>
      </Box>
    );
  }

  return null;
};
const TemplateEarnings = observer(() => {
  const classes = useStyles();
  const store = useContext(StoreContext);
  const { account } = store;
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
      <ResponsiveContainer className={classes.chart} width="95%" aspect={2}>
        <AreaChart
          width={500}
          height={300}
          data={Data}
          margin={{
            top: 100,
            right: 0,
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
            <linearGradient id="colorte" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#124" stopOpacity={0.9} />
              <stop offset="95%" stopColor="#985" stopOpacity={0.06} />
            </linearGradient>
            <linearGradient id="colorta" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#354" stopOpacity={0.9} />
              <stop offset="95%" stopColor="#895" stopOpacity={0.06} />
            </linearGradient>
          </defs>
          <XAxis
            dx={0}
            dy={0}
            axisLine={false}
            tickLine={true}
            interval={0}
            style={{ fontSize: 13 }}
            dataKey="name"
            mirror={true}
            padding={{ left: 0, right: 0 }}
          />
          <YAxis
            dx={0}
            dy={-53}
            style={{ fontSize: 13, fontFamily: 'IBM Plex Mono', color: '#FFFFFF' }}
            padding={{ top: 0, bottom: 0 }}
            mirror={true}
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#FFFFFF' }}
            tickCount={8}
            allowDataOverflow={true}
            tickFormatter={(numberY: number) => {
              if (numberY > 999 && numberY % 1000 === 0) {
                return `$${(Math.sign(numberY) * (Math.abs(numberY) / 1000)).toFixed(0) + 'k'}`;
              } else if (numberY > 999 && numberY % 5 === 0 && numberY % 2 === 0) {
                return `$${(Math.sign(numberY) * (Math.abs(numberY) / 1000)).toFixed(1) + 'k'}`;
              } else {
                return `$${Math.sign(numberY) * Math.abs(numberY)}`;
              }
            }}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '4 4', stroke: '#aaaa' }} />
          <Legend />
          <Area dataKey="ta" stackId="1" stroke="#F2A627" strokeWidth="4" fill="url(#colorta)" />
          <Area dataKey="te" stackId="2" stroke="#9E8EFF" strokeWidth="4" fill="url(#colorte)" />
          <Area dataKey="ti" stackId="3" stroke="#f24" strokeWidth="4" fill="url(#colorcrv)" />
          <Area dataKey="to" stackId="4" stroke="#ac5" strokeWidth="4" fill="url(#colorbad)" />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
});
export default TemplateEarnings;
