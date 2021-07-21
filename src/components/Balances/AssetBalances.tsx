import React from 'react';

import { observer } from 'mobx-react-lite';
import { StoreContext } from '../../index';

import { makeStyles, Box } from '@material-ui/core';

import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import HeaderBalance from './HeaderBalance';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  tableContainer: {
    borderRadius: '0',
    boxShadow: ' 0px 0px 4px rgba(0, 0, 0, 0.25)',
  },
  table: {
    width: '100%',
    background: '#2B2B2B',
    padding: '0 18.5px',

    '& thead th': {
      color: '#747474',
      fontSize: '13px',
      padding: '8px 18.5px',
      border: 'none',
    },
    '& tbody tr': {
      lineHeight: '24px',
      '& h6': {
        color: '#fff',
        fontSize: '16px',
      },
      '& p': {
        color: '#747474',
      },
    },
    '& tbody tr td': {
      width: 'calc(100% / 4)',
      padding: '8px 24px',
      height: '92px',
      borderBottom: '0.5px solid #111111',
    },
    '& tbody tr:nth-child(2n)': {
      background: '#242424',
    },
  },

  footer: {
    height: '36px',
    width: 'inherit',
    background: '#2B2B2B',
    borderRadius: '0 0 16px 16px',
    marginTop: '0px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
}));

const AssetBalances = observer(() => {
  const classes = useStyles();
  const store = React.useContext(StoreContext);
  const { account } = store;
  return (
    <Container style={{ maxWidth: '1230px' }}>
      <HeaderBalance
        title="Asset Balances"
        subTitle1="Assets that are in your wallet"
        balance={30000}
        subTitle2="Your total  asset holdings"
      />
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell align="left">Tokens</TableCell>
              <TableCell align="center">Portfolio % Alloc.</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Balance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="left">
                <Typography variant="h6">iBTC</Typography>
                <Typography variant="body1">$ 10,249.00</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h6">33.33%</Typography>
              </TableCell>
              <TableCell align="right" style={{ borderBottom: '0.5px solid #111111' }}>
                <Typography variant="h6">$ 10.00</Typography>
                <Typography variant="body1">0.00008 BTC</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h6">10.29</Typography>
                <Typography variant="body1">$ 10,249.00</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">
                <Typography variant="h6">iBTC</Typography>
                <Typography variant="body1">$ 10,249.00</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h6">33.33%</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h6">$ 10.00</Typography>
                <Typography variant="body1">0.00008 BTC</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h6">10.29</Typography>
                <Typography variant="body1">$ 10,249.00</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box className={classes.footer} component="footer" />
    </Container>
  );
});

export default AssetBalances;
