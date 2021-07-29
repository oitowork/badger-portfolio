<<<<<<< HEAD
import React from 'react';
=======
import React, { useContext } from 'react';
>>>>>>> 50325c640d0bf86af763828ecd526c7ddfdf1c59
import { makeStyles, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import { observer } from 'mobx-react-lite';
<<<<<<< HEAD
import { useContext } from 'react';
=======
>>>>>>> 50325c640d0bf86af763828ecd526c7ddfdf1c59
import { StoreContext } from '..';

const useStyles = makeStyles((theme) => ({
  container: {
    background: '#2B2B2B',
    borderRadius: '16px',
    boxShadow: ' 0px 4px 4px rgba(0, 0, 0, 0.25)',
    display: 'flex',
    flexDirection: 'column',
    height: ' 191px',
    padding: '0px',
    width: '595px',
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
  },
  subtitle: {
    color: '#747474',
    fontSize: '20px',
    fontWeight: 'normal',
    lineHeight: '28px',
    paddingLeft: '20px',
  },
  box: {
    alignItems: 'center',
    marginBottom: '20px',
    marginLeft: '20px',
  },
  alignment: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: '20px',
  },
  text: {
<<<<<<< HEAD
    width: 'auto',
    margin: '3%',
    color: '##FFFFFF',
    fontSize: '16px',
=======
    margin: '1%',
    width: '20%',
    color: '#FFFFFF',
    fontSize: '20px',
>>>>>>> 50325c640d0bf86af763828ecd526c7ddfdf1c59
    fontWeight: 'normal',
    padding: '10px',
  },
  undertext: {
    color: '#747474',
    fontSize: '13px',
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'space-between',
    alignItems: 'flex-start',
  },
  divider: {
    backgroundColor: 'black',
    margin: '0px',
    padding: '0px',
  },
  roi: {
    color: '#F2A627',
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
          $
          {account == null
            ? 'Loading'
            : account.value.toLocaleString(undefined, {
                minimumIntegerDigits: 2,
              })}
        </Typography>
        <Typography variant="h6" align="left" className={classes.subtitle}>
          Your neth worth
        </Typography>
      </Box>
      <Divider variant="middle" className={classes.divider} />
      <Box className={classes.alignment}>
        <Typography className={classes.text}>
          <span className={classes.roi}>+42.069% </span>
          <span className={classes.undertext}>ROI in % </span>
        </Typography>
        <Typography className={classes.text}>
<<<<<<< HEAD
          {`${sunRoi.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
=======
          {`${sunRoi.toLocaleString(undefined, {
            minimumIntegerDigits: 2,
>>>>>>> 50325c640d0bf86af763828ecd526c7ddfdf1c59
          })}`}
          <span className={classes.undertext}>ROI in $ value</span>
        </Typography>
        <Typography className={classes.text}>
          $
          {account == null
            ? 'Loading'
<<<<<<< HEAD
            : account.earnedValue.toLocaleString('en-US', {
                minimumFractionDigits: 2,
=======
            : account.earnedValue.toLocaleString(undefined, {
                minimumIntegerDigits: 2,
>>>>>>> 50325c640d0bf86af763828ecd526c7ddfdf1c59
              })}
          <span className={classes.undertext}>Earned $Badger</span>
        </Typography>
      </Box>
    </Container>
  );
});

export default NetWorth;
