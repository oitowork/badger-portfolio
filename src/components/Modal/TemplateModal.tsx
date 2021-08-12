import React from 'react';
import { makeStyles, Typography, Divider, IconButton } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import Box from '@material-ui/core/Box';
import CloseIcon from '@material-ui/icons/Close';
import VaultDetails from './VaultDetails';
import Holdings from './Holdings';
import MyBoostBreakdown from './MyBoostBreakdown';
import TransactionHistory from './TransactionHistory';
const useStyles = makeStyles((theme) => ({
  box: {
    background: '#222222',
    minHeight: 946,
    maxWidth: 935,
    borderRadius: 8,
    border: '1px solid #111111',
    boxSizing: 'border-box',
    boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.35)',
    margin: '0 auto',
  },
  boxTitle: {
    height: 68,
    background: '#222222',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 25px',
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
  modalItens: {
    marginTop: 19,
    padding: '0 25px 24px 24px',
  },
}));
const TemplateModal = observer(() => {
  const classes = useStyles();
  return (
    <Box component="section" className={classes.box}>
      <Box component="div" className={classes.boxTitle}>
        <Typography variant="h1" align="left" className={classes.title}>
          My Strategy Balances
        </Typography>
        <IconButton>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider variant="inset" className={classes.divider} />
      <Box component="div" className={classes.modalItens}>
        <VaultDetails />
        <Holdings />
        <MyBoostBreakdown />
        <TransactionHistory />
      </Box>
    </Box>
  );
});
export default TemplateModal;
