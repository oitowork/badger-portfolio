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
    width: '100%',
  },
  tableContainer: {
    [theme.breakpoints.down('sm')]: {
      maxHeight: 590,
    },
  },
  alignments: {
    display: 'flex',
  },
  title: {
    padding: '2%',
  },
  list: {
    display: 'flex',
  },
  box: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  tablecell: {
    color: '#FFFFFF',
    border: 'none',
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
}));

const Holdings = observer(() => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
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
                    alt="Badger Image"
                    src="https://badger.finance/wp-content/uploads/2020/10/Copy-of-Untitled-39.png"
                  />
                  <Typography>Badger</Typography>
                </div>
              </TableCell>
              <TableCell className={classes.tablecell}>
                <Typography>14.2</Typography>
              </TableCell>
              <TableCell className={classes.tablecell}>
                <Typography className={classes.tablecell}>10.2</Typography>
              </TableCell>
              <TableCell className={classes.tablecell}>
                <Typography>$ 10,249.00</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tablecell}>
                <div className={classes.alignments}>
                  <Avatar
                    alt="wBTC Image"
                    src="https://seeklogo.com/images/B/bitcoin-logo-594596D72F-seeklogo.com.png"
                  />
                  <Typography>wBTC</Typography>
                </div>
              </TableCell>
              <TableCell className={classes.tablecell}>
                <Typography>36,040.00</Typography>
              </TableCell>
              <TableCell className={classes.tablecell}>
                <Typography className={classes.tablecell}>0.004</Typography>
              </TableCell>
              <TableCell className={classes.tablecell}>
                <Typography>$ 10,249.00</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box className={classes.box}>
        <Typography>Total</Typography>
        <Typography>$ 20,498.00 </Typography>
      </Box>
    </Container>
  );
});
export default Holdings;
