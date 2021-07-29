import React, { useContext } from 'react';
import { makeStyles, Typography, Button } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import { StoreContext } from '..';
import Box from '@material-ui/core/Box';
const useStyles = makeStyles((theme) => ({
  box: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '36px 33px',
    width: '296px',
    height: ' 191px',
    background: '#2B2B2B',
    boxShadow: ' 0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '16px',
    [theme.breakpoints.down('sm')]: {
      padding: '0 33px',
    },
    marginLeft: '16px',
    marginRight: '16px',
    marginTop: '20px',
    marginBottom: '20px',
  },
  title: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '40px',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#FFFFFF',
    background: 'none',
  },
  text: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '13px',
    lineHeight: '28px',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#747474',
    marginBottom: '18px',
  },
  button: {
    background: '#121212',
    borderRadius: '4px',
    color: '#fff',
    '&:hover': {
      background: '#121212',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
}));
const PendingBox = observer(() => {
  const classes = useStyles();
  const store = useContext(StoreContext);
  const { account } = store;
  let pedingValue = 0;
  account?.balances.forEach((balance: any) => {
    pedingValue += balance.withdrawnBalance;
  });

  return (
    <Box className={classes.box}>
      <Typography variant="h5" align="center" className={classes.title}>
        {`${pedingValue.toLocaleString()}`}
      </Typography>
      <Typography variant="subtitle2" align="center" className={classes.text}>
        Pending
      </Typography>
      <Button className={classes.button} variant="contained">
        CLAIM ALL PENDING({account?.claimableBalances.length})
      </Button>
    </Box>
  );
});
export default PendingBox;
