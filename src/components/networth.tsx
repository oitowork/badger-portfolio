import { makeStyles, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useContext } from 'react';
import { StoreContext } from '..';

const useStyles = makeStyles((theme) => ({
  container: {
    background: '#2B2B2B, 100%',
    borderRadius: '16px',
    boxShadow: ' 0px 4px 4px rgba(0, 0, 0, 0.25)',
    display: 'flex',
    flexDirection: 'column',
    height: ' 191px',
    padding: '0px',
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      padding: '0 33px',
      margin: '0 10px',
    },
  },
  title: {
    color: '#FFFFFF',
    fontSize: '32px',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: '40px',
    paddingLeft: '20px',
    paddingTop: '30px',
  },
  subtitle: {
    color: ' #747474',
    fontSize: '20px',
    fontWeight: 'normal',
    lineHeight: '28px',
    paddingLeft: '20px',
  },
  box: {
    alignItems: 'center',
  },
  alignment: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: '20px',
  },
  text: {
    margin: '1%',
    width: '20%',
    color: '##FFFFFF',
    fontSize: '20px',
    fontWeight: 'normal',
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

  return (
    <Container maxWidth="sm" className={classes.container}>
      <Box className={classes.box}>
        <Typography variant="h3" align="left" className={classes.title}>
          ${account == null ? 'Loading' : account.value.toLocaleString()}
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
          $440,200.00
          <span className={classes.undertext}>ROI in $ value</span>
        </Typography>
        <Typography className={classes.text}>
          ${account == null ? 'Loading' : account.earnedValue.toLocaleString()}
          <span className={classes.undertext}>Earned $Badger</span>
        </Typography>
      </Box>
    </Container>
  );
});

export default NetWorth;
