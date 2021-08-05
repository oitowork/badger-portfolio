import React from 'react';
import { observer } from 'mobx-react-lite';
import { StoreContext } from '../../index';
import { Box, makeStyles, TablePagination } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import { Typography } from '@material-ui/core';
import HeaderBalance from './HeaderBalance';
import { TokenBalance } from '../../model/token-balance.interface';
const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: '1230px',
    borderRadius: '0 0 16px 16px',
    boxShadow: ' 0px 4px 4px rgba(0, 0, 0, 0.25)',
    padding: '0',
  },
  tableContainer: {
    maxHeight: 530,
    borderRadius: 0,

    [theme.breakpoints.down('sm')]: {
      maxHeight: 590,
    },
  },
  table: {
    fontFamily: 'IBM Plex Sans',
    width: '100%',
    overflow: 'auto',
    background: '#2B2B2B',
    padding: '0 18.5px',

    '& thead th': {
      fontFamily: 'IBM Plex Sans',
      color: '#747474',
      fontSize: '13px',
      padding: '8px 18.5px',
      border: 'none',
    },
    '& tbody tr': {
      fontFamily: 'IBM Plex Sans',
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
  tablePagination: {
    background: '#2B2B2B',
    color: '#fff',

    [theme.breakpoints.only('xs')]: {
      '& > div': {
        padding: 0,
        flexDirection: 'column',
        justifyContent: 'center',
      },
      '&  div': {
        margin: 2,
      },
    },
  },
  footer: {
    height: '36px',
    width: 'inherit',
    background: '#2B2B2B',
    borderRadius: '0 0 16px 16px',
  },
}));
const AssetBalances = observer(() => {
  const classes = useStyles();
  const store = React.useContext(StoreContext);
  const { account, btcPrice } = store;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  if (!account || !btcPrice) return null;

  const tokens = account?.balances.map(({ tokens }) => tokens.map((item) => item));
  const token = tokens?.map((item) => {
    return item.length;
  });

  const tokenLength = token?.reduce((ac, item) => ac + item);
  const rows: TokenBalance[] = [];
  tokens?.map((item) => item.forEach((item) => rows.push(item)));

  return (
    <Container className={classes.container}>
      <HeaderBalance
        title="Asset Balances"
        subTitle1="Assets that are in your wallet"
        balance={account?.nonNativeBalance}
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
          <TableBody style={{ height: 250 }}>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(({ name, balance, value }, index) => {
              const priceValue = value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
              const btc = value / balance / btcPrice?.['0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599'];
              return (
                <TableRow key={index}>
                  <TableCell align="left">
                    <Typography variant="h6">{name}</Typography>
                    <Typography variant="body1">{priceValue}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="h6">
                      {(value / account?.nonNativeBalance).toLocaleString(undefined, {
                        style: 'percent',
                        minimumFractionDigits: 2,
                      })}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="h6">
                      {(value / balance).toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        minimumFractionDigits: 2,
                      })}
                    </Typography>
                    <Typography variant="body1">{btc >= 1 ? btc.toFixed(3) : btc.toFixed(8)} BTC</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="h6">{balance.toFixed(2)}</Typography>
                    <Typography variant="body1">{priceValue}</Typography>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        className={classes.tablePagination}
        rowsPerPageOptions={[5, 10, 20, 50]}
        component="div"
        count={tokenLength}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Box className={classes.footer} component="footer" />
    </Container>
  );
});
export default AssetBalances;
