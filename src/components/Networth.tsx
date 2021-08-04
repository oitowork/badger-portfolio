import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { StoreContext } from '..';

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
    lineHeight: '40px',
    marginLeft: '20px',
    marginTop: '30px',
    fontFamily: 'IBM Plex Mono',
    [theme.breakpoints.down(490)]: {
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
    paddingLeft: '20px',
    fontFamily: 'IBM Plex Sans',
    [theme.breakpoints.down(490)]: {
      textAlign: 'center',
    },
  },
  box: {
    alignItems: 'center !important',
    paddingBottom: 20,
  },
  alignment: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    [theme.breakpoints.down(490)]: {
      justifyContent: 'center',
      margin: '10px',
    },
  },
  text: {
    width: 'auto',
    margin: '2%',
    color: '##FFFFFF',
    fontSize: '16px',
    fontWeight: 'normal',
    padding: '0px 10px',
    fontFamily: 'IBM Plex Sans',
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
        </Typography>
        <Typography variant="h6" align="left" className={classes.subtitle}>
          Your neth worth
        </Typography>
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
