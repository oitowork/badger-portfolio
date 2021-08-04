import React from 'react';
import { observer } from 'mobx-react-lite';
import { Box, makeStyles, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Avatar from '@material-ui/core/Avatar';
const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: '1230px',
    marginBottom: 28,
  },
  tableContainer: {
    [theme.breakpoints.down('sm')]: {
      maxHeight: 590,
    },
  },
  alignments: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },
  title: {
    fontSize: 16,
    marginBottom: 22,
  },
  smallTitle: {
    backgroundColor: 'black',
    fontSize: '10px',
    height: '20px',
    padding: '5px',
  },
  tableItems: {
    color: '#FFFFFF',
  },
  boost: {
    color: '#F2A52B',
  },
  table: {
    width: '100%',
    background: '#1E1E1E',

    '& thead th': {
      color: '#747474',
      fontSize: '13px',
      padding: '8px 18.5px',
      border: 'none',
    },
    '& tbody tr': {
      lineHeight: '24px',
      '& h6': {
        fontSize: '16px',
      },
    },
  },
}));
const VaultDetails = observer(() => {
  const classes = useStyles();

  return (
    <Container disableGutters className={classes.container}>
      <Typography align="left" variant="h5" className={classes.title}>
        Vault Details
      </Typography>
      <Box>
        <TableContainer component={Paper} className={classes.tableContainer}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>VAULT</TableCell>
                <TableCell>BALANCE/VALUE</TableCell>
                <TableCell>MY BOOST</TableCell>
                <TableCell>YEARLY ROI</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell className={classes.tableItems}>
                  <div className={classes.alignments}>
                    <Avatar alt="Coin Image" src="https://images-na.ssl-images-amazon.com/images/I/31M7Y5BtGoL.png" />
                    <Typography>wrapped BTC/Digg</Typography>
                    <Typography className={classes.smallTitle}>UNI</Typography>
                  </div>
                </TableCell>
                <TableCell className={classes.tableItems}>
                  <div className={classes.alignments}>
                    <Typography className={classes.boost}>0.00523</Typography>
                    <Typography>UNIV2 LP</Typography>
                  </div>
                  <Typography>$ 20,498.00</Typography>
                </TableCell>
                <TableCell>
                  <Typography className={classes.boost}>48.33%</Typography>
                </TableCell>
                <TableCell className={classes.tableItems}>
                  <Typography>36.44-55.33%</Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
});
export default VaultDetails;
