import React from 'react';
import { observer } from 'mobx-react-lite';
import { StoreContext } from '../../index';
import { makeStyles, Box, TablePagination } from '@material-ui/core';
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
const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: '1230px',
    borderRadius: '0 0 16px 16px',
    boxShadow: ' 0px 4px 4px rgba(0, 0, 0, 0.25)',
    padding: '0',
  },
  tableContainer: {
    borderRadius: 0,
    boxShadow: ' 0px 0px 4px rgba(0, 0, 0, 0.25)',
    maxHeight: 530,
    [theme.breakpoints.down('sm')]: {
      maxHeight: 590,
    },
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
      '& h5': {
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
  text: {
    color: '#F2A627',
    fontSize: '16px',
  },
  textRed: {
    color: '#FF5C5C',
    fontSize: '16px',
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
    marginTop: '0px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
}));
const StrategyBalances = observer(() => {
  const classes = useStyles();
  const store = React.useContext(StoreContext);
  const { account } = store;

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  if (!account) return null;
  return (
    <Container className={classes.container}>
      <HeaderBalance
        title="Strategy Balances"
        subTitle1="Balances across all strategies"
        balance={account?.nativeBalance}
        subTitle2="Your total strategy balances"
      />
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell align="left">Strategy</TableCell>
              <TableCell align="center">Portfolio % Alloc.</TableCell>
              <TableCell align="right">Yearly ROI</TableCell>
              <TableCell align="right">Deposit Balance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {account?.balances
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(({ name, value, depositedBalance, balance }, index) => {
                const yearlyROI = (balance - depositedBalance) / depositedBalance;
                return (
                  <TableRow key={name}>
                    <TableCell align="left">
                      <Typography variant="h5">
                        {name} {index}
                      </Typography>
                      <Typography variant="body1">
                        {value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="h5">
                        {(value / account?.nativeBalance).toLocaleString(undefined, {
                          style: 'percent',
                          minimumFractionDigits: 2,
                        })}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography className={yearlyROI > 0 ? classes.text : classes.textRed} variant="h6">
                        {yearlyROI.toLocaleString(undefined, {
                          style: 'percent',
                          minimumFractionDigits: 2,
                        })}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="h5">{depositedBalance.toFixed(2)}</Typography>
                      <Typography variant="body1">
                        {value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                      </Typography>
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
        count={account?.balances.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Box className={classes.footer} component="footer" />
    </Container>
  );
});
export default StrategyBalances;
