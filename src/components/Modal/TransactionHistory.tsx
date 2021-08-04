import React from 'react';
import { observer } from 'mobx-react-lite';
import { StoreContext } from '../../index';
import { Box, List, ListItem, makeStyles, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: '886px;',
    borderRadius: '0 0 16px 16px',
    padding: '0',
    border: '0',
  },
  titleTransaction: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'normal',
    lineHeight: '24px',
    marginBottom: 16,
  },
  tableContainer: {
    maxHeight: 530,
    borderRadius: '0',
    border: '0',

    [theme.breakpoints.only('xs')]: {
      maxHeight: 550,
    },
  },
  transactionPosition: {
    display: 'flex',
    fontSize: 13,

    '& ul': {
      display: 'flex',
      width: '100%',

      '& li': {
        display: 'block',
        padding: 0,
      },
    },
  },
  transactionHeader: {
    maxWidth: 900,
    '& ul': {
      color: '#747474',

      '& li:nth-child(n + 2)': {
        textAlign: 'center',
      },
    },
  },

  transactionItem: {
    maxWidth: 886,
    background: '#1E1E1E',
    height: 42,
    '&:nth-last-child(-n + 1)': {
      borderRadius: '0 0 16px 16px',
    },
    '&:nth-child(3)': {
      borderRadius: '16px 16px 0 0',
    },

    '&:nth-child(2n)': {
      background: '#111111',
    },

    '& ul': {
      padding: '9px 0 0px 24px',
      color: '#FFFFFF',
      '& li:nth-child(n + 2)': {
        textAlign: 'center',
      },
    },
  },
  colorDeposit: {
    color: 'yellow',
  },
  colorWithdraw: {
    color: 'red',
  },
}));
const TransactionHistory = observer(() => {
  const classes = useStyles();
  const store = React.useContext(StoreContext);
  const { account } = store;

  return (
    <Container disableGutters className={classes.container}>
      <Typography variant="h2" className={classes.titleTransaction}>
        Transaction History
      </Typography>
      <Box component="div" className={`${classes.transactionPosition} ${classes.transactionHeader}`}>
        <List>
          <ListItem>Actions</ListItem>
          <ListItem>Amount</ListItem>
          <ListItem>Gas spent</ListItem>
          <ListItem>Date</ListItem>
        </List>
      </Box>
      <Box component="div" className={`${classes.transactionPosition} ${classes.transactionItem}`}>
        <List>
          <ListItem>Deposit</ListItem>
          <ListItem>+0.00523 UNIV2 LP</ListItem>
          <ListItem>0.00512 ETH</ListItem>
          <ListItem>30 May,2020 11:11 PM</ListItem>
        </List>
      </Box>
      <Box component="div" className={`${classes.transactionPosition} ${classes.transactionItem}`}>
        <List>
          <ListItem>Deposit</ListItem>
          <ListItem>+0.00523 UNIV2 LP</ListItem>
          <ListItem>0.00512 ETH</ListItem>
          <ListItem>30 May,2020 11:11 PM</ListItem>
        </List>
      </Box>
      <Box component="div" className={`${classes.transactionPosition} ${classes.transactionItem}`}>
        <List>
          <ListItem>Deposit</ListItem>
          <ListItem>+0.00523 UNIV2 LP</ListItem>
          <ListItem>0.00512 ETH</ListItem>
          <ListItem>30 May,2020 11:11 PM</ListItem>
        </List>
      </Box>
      <Box component="div" className={`${classes.transactionPosition} ${classes.transactionItem}`}>
        <List>
          <ListItem>Deposit</ListItem>
          <ListItem>+0.00523 UNIV2 LP</ListItem>
          <ListItem>0.00512 ETH</ListItem>
          <ListItem>30 May,2020 11:11 PM</ListItem>
        </List>
      </Box>
    </Container>
  );
});
export default TransactionHistory;
