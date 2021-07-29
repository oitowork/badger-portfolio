import React, { useContext } from 'react';
import { Typography, makeStyles, Box, Container, Avatar } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import { StoreContext } from '..';
import AssetBalanceChart from './charts/assetBalanceChart';

const useStyles = makeStyles((theme) => ({
  container: {
    background: '#2B2B2B, 100%',
    borderRadius: '16px',
    boxShadow: ' 0px 4px 4px rgba(0, 0, 0, 0.25)',
    display: 'flex',
    flexDirection: 'column',
    height: ' 191px',
    padding: '0px',
    width: '100%',
    assetsBox: {
      tokenInfo: {
        flexDirection: 'row',
      },
    },
    [theme.breakpoints.down('xs')]: {
      padding: '0 33px',
      margin: '0 10px',
    },
  },
}));

const AssetAllocation = observer(() => {
  const classes = useStyles();
  const store = useContext(StoreContext);
  const { account, tokenInfo } = store;

  // const tokens = account?.balances.map(({ tokens }) => tokens.map((item) => item));

  // const labels = account?.balances.map(({ tokens }) => tokens.map(({ name }) => name));
  // const dataBalance = account?.balances.map(({ tokens }) =>
  //   tokens.map(({ value }) =>
  //     (value / account?.nonNativeBalance).toLocaleString(undefined, {
  //       style: 'percent',
  //       minimumFractionDigits: 2,
  //     }),
  //   ),
  // );

  // console.log(tokens);
  // console.log(dataBalance);
  // console.log(labels);

  return (
    <Container maxWidth="sm" className={classes.container}>
      <Typography>Titulo</Typography>
      <Avatar alt={''} src="/static/images/avatar/1.jpg" />
      <Box maxWidth="xs=6">grafico</Box>
      <Box maxWidth="xs=6">
        <AssetBalanceChart />
      </Box>
    </Container>
  );
});

export default AssetAllocation;
