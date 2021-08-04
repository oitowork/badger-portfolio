import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { StoreContext } from '..';
import { ResponsiveContainer, AreaChart, Area } from 'recharts';
import { subDays } from 'date-fns';

const useStyles = makeStyles((theme) => ({
  container: {
    background: '#2B2B2B',
    borderRadius: '16px',
    boxShadow: ' 0px 4px 4px rgba(0, 0, 0, 0.25)',
    display: 'flex',
    flexDirection: 'column',
    padding: '0px',
    maxWidth: '595px',
    margin: '20px 8px',
  },
  title: {
    color: '#FFFFFF',
    fontSize: '32px',
    fontStyle: 'normal',
    fontWeight: 'normal',
    margin: '19px 0 0 33px',
    lineHeight: '40px',
    fontFamily: 'IBM Plex Mono',
    [theme.breakpoints.down('xs')]: {
      fontSize: 24,
      margin: '10px',
      textAlign: 'center',
    },
  },
  subtitle: {
    color: '#747474',
    fontSize: '20px',
    fontWeight: 'normal',
    lineHeight: '28px',
    fontFamily: 'IBM Plex Sans',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
  },
  box: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: '20px',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  areaChart: {
    width: '50% !important',
    [theme.breakpoints.down('xs')]: {
      width: '98% !important',
      margin: 'auto',
    },
  },
  alignment: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: '15px 0 21px 0',
    [theme.breakpoints.down(490)]: {
      justifyContent: 'center',
    },
  },
  text: {
    width: 'auto',
    paddingLeft: 33,
    color: '#FFFFFF',
    fontSize: '16px',
    fontWeight: 'normal',
    padding: '0px 10px',
    fontFamily: 'IBM Plex Sans',
    [theme.breakpoints.down(490)]: {
      padding: 0,
    },
  },
  undertext: {
    color: '#747474',
    fontSize: '13px',
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'space-between',
    alignItems: 'flex-start',
    fontFamily: 'IBM Plex Sans',
  },
  divider: {
    backgroundColor: 'black',
    margin: '0px',
    padding: '0px',
  },
  roiSpotlight: {
    color: '#F2A627',
    fontFamily: 'IBM Plex Mono',
  },
  roi: {
    fontFamily: 'IBM Plex Mono',
    padding: '0px 10px',
  },
}));

const NetWorth = observer(() => {
  const data = [];
  for (let num = 10; num >= 0; num--)
    data.push({
      date: subDays(new Date(), num).toISOString().substr(0, 10),
      value: 1 + Math.random(),
    });
  const classes = useStyles();
  const store = useContext(StoreContext);
  const { account } = store;

  let sunRoi = 0;
  account?.balances.forEach((balance: any) => {
    balance.earnedTokens.forEach((token: any) => {
      sunRoi += token.value;
    });
  });
  return (
    <Container maxWidth="sm" className={classes.container}>
      <Box className={classes.box}>
        <Typography variant="h3" align="left" className={classes.title}>
          {account == null
            ? 'Loading'
            : account.value.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 2,
              })}
          <Typography variant="h6" align="left" className={classes.subtitle}>
            Your neth worth
          </Typography>
        </Typography>

        <ResponsiveContainer className={classes.areaChart} height={100}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#467D33" stopOpacity={0.4} />
                <stop offset="90%" stopColor="#9AFF77" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <Area dataKey="value" stroke="#52B330" strokeWidth="3" fill="url(#color)" />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
      <Divider variant="middle" className={classes.divider} />
      <Box className={classes.alignment}>
        <Typography className={classes.text}>
          <span className={classes.roiSpotlight}>+42.069%</span>
          <span className={classes.undertext}>ROI in % </span>
        </Typography>
        <Typography className={classes.roi}>
          {`${sunRoi.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
          })}`}
          <span className={classes.undertext}>ROI in $ value</span>
        </Typography>
        <Typography className={classes.roi}>
          {account == null
            ? 'Loading'
            : account.earnedValue.toLocaleString('en-US', {
                minimumFractionDigits: 2,
              })}
          <span className={classes.undertext}>Earned $Badger</span>
        </Typography>
      </Box>
    </Container>
  );
});

export default NetWorth;
