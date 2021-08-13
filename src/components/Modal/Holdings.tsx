import React from 'react';
import { observer } from 'mobx-react-lite';
import { makeStyles, Typography, List, ListItem, Box } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Avatar from '@material-ui/core/Avatar';
const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 866,
    marginBottom: 40,
  },
  tableContainer: {
    [theme.breakpoints.down('sm')]: {
      maxHeight: 590,
    },
  },
  alignments: {
    width: 76,
    display: 'flex',
    alignItems: 'center',
    '& p': {
      fontSize: 13,
      marginLeft: 10,
    },
  },
  title: {
    fontSize: 16,
    marginBottom: 20,
  },
  list: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 18,
    '& li:first-child': {
      width: 108,
    },
    '& li': {
      display: 'block',
      padding: 0,
      width: 254,
      fontSize: 13,
    },
    '& li:nth-child(n + 2)': {
      textAlign: 'center',
    },
  },
  tablecell: {
    '&:first-child': {
      width: 80,
      paddingLeft: 24,
    },
    color: '#FFFFFF',
    border: 'none',
    textAlign: 'center',
    width: 249,
    padding: 0,
  },
  tokenIcon: {
    width: 24,
    height: 24,
  },
  table: {
    borderBottom: 'none',
    '& thead th': {
      color: '#747474',
      fontSize: '13px',
      padding: '8px 18.5px',
      border: 'none',
    },
    '& tbody tr': {
      lineHeight: '24px',
    },
    '& tbody tr:nth-child(odd)': {
      background: '#1E1E1E',
    },
    '& tbody tr:nth-child(even)': {
      background: '#111111',
    },
  },
  box: {
    display: 'flex',
    justifyContent: 'space-between',

    '& h6': {
      color: '#747474',
      fontWeight: 'normal',
      fontSize: 13,
      marginTop: 16,
    },
    '& h5': {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
      marginTop: 8,
      border: '1px solid rgba(0, 0, 0, 0.08)',
      fontFamily: 'IBM Plex Mono, Arial, sans-serif',
    },
  },
}));

const Holdings = observer(() => {
  const classes = useStyles();
  return (
    <Container disableGutters className={classes.container}>
      <Typography align="left" variant="h5" className={classes.title}>
        Holdings
      </Typography>
      <List disablePadding className={classes.list}>
        <ListItem>Underlying Tokens</ListItem>
        <ListItem>Price</ListItem>
        <ListItem>Amount</ListItem>
        <ListItem>Balance</ListItem>
      </List>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table}>
          <TableBody>
            <TableRow>
              <TableCell className={classes.tablecell}>
                <div className={classes.alignments}>
                  <Avatar
                    className={classes.tokenIcon}
                    alt="Badger Image"
                    src="https://badger.finance/wp-content/uploads/2020/10/Copy-of-Untitled-39.png"
                  />
                  <Typography variant="body2">Badger</Typography>
                </div>
              </TableCell>
              <TableCell className={classes.tablecell}>
                <Typography variant="overline">14.2</Typography>
              </TableCell>
              <TableCell className={classes.tablecell}>
                <Typography variant="overline">10.2</Typography>
              </TableCell>
              <TableCell className={classes.tablecell}>
                <Typography variant="overline">$ 10,249.00</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tablecell}>
                <div className={classes.alignments}>
                  <Avatar
                    className={classes.tokenIcon}
                    alt="wBTC Image"
                    src="https://seeklogo.com/images/B/bitcoin-logo-594596D72F-seeklogo.com.png"
                  />
                  <Typography variant="body2">wBTC</Typography>
                </div>
              </TableCell>
              <TableCell className={classes.tablecell}>
                <Typography variant="overline">36,040.00</Typography>
              </TableCell>
              <TableCell className={classes.tablecell}>
                <Typography variant="overline">0.004</Typography>
              </TableCell>
              <TableCell className={classes.tablecell}>
                <Typography variant="overline">$ 10,249.00</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box className={classes.box}>
        <Typography variant="h6">Total</Typography>
        <Typography variant="h5">$ 20,498.00 </Typography>
      </Box>
    </Container>
  );
});
export default Holdings;
