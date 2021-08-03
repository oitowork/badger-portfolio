import React from 'react';
import { makeStyles, Typography, Divider } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import Box from '@material-ui/core/Box';
import CloseIcon from '@material-ui/icons/Close';
import Holdings from './Holdings';
import MyBoostBreakdown from './MyBoostBreakdown';
import TransactionHistory from './TransactionHistory';
import VaultDetails from './VaultDetails';
const useStyles = makeStyles((theme) => ({
  box: {
    background: '#222222',
    height: 946,
    maxWidth: 935,
    borderRadius: 8,
    border: '1px solid #111111',
    boxSizing: 'border-box',
    boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.35)',
  },
  boxTitle: {
    height: 68,
    background: '#222222',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '10px 24px',
  },
  title: {
    fontFamily: 'IBM Plex Mono',
    fontSize: 20,
    color: '#FFFFFF',
    [theme.breakpoints.down(730)]: {
      fontSize: 16,
    },
  },
  divider: {
    backgroundColor: 'black',
    margin: 0,
    padding: 0,
  },
}));
const TemplateModal = observer(() => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <div className={classes.boxTitle}>
        <Typography variant="h1" align="left" className={classes.title}>
          My Strategy Balances
        </Typography>
        <CloseIcon />
      </div>
      <Divider variant="inset" className={classes.divider} />
      <VaultDetails />
      <Holdings />
      <MyBoostBreakdown />
      <TransactionHistory />
    </Box>
  );
});
export default TemplateModal;
