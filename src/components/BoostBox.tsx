import React, { useContext } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import { StoreContext } from '..';
import Box from '@material-ui/core/Box';
const useStyles = makeStyles({
  box: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '36px 33px',
    width: '296px',
    height: ' 191px',
    background: '#2B2B2B',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '16px',
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
});
const BoostBox = observer(() => {
  const classes = useStyles();
  const store = useContext(StoreContext);
  const { account } = store;
  return (
    <Box className={classes.box}>
      <Typography variant="h5" align="center" className={classes.title}>
        {account?.boost.toFixed(3)}
      </Typography>
      <Typography variant="subtitle2" align="center" className={classes.text}>
        My Boost
      </Typography>
      <Typography variant="h6" align="center">
        Rank No. {account?.boostRank}
      </Typography>
    </Box>
  );
});
export default BoostBox;
