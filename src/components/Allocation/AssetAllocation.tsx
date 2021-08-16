import React, { useContext } from 'react';
import { ResponsiveContainer } from 'recharts';
import { Typography, makeStyles, Container, Box } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import { StoreContext } from '../../';
import AllocationChart from './AllocationChart';
import AllocationList from './AllocationList';

const useStyles = makeStyles((theme) => ({
  container: {
    background: '#2B2B2B',
    borderRadius: '16px',
    boxShadow: ' 0px 4px 4px rgba(0, 0, 0, 0.25)',
    display: 'flex',
    flexDirection: 'column',
    width: 595,
    height: 501,
    padding: '24px 24px 0 32px',
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
  headerAllocation: {
    display: 'flex',
    flexDirection: 'column',

    '& h2': {
      color: '#FFFFFF',
      fontSize: 16,
      marginBottom: 6,
    },
    '& h6': {
      color: '#747474',
      fontSize: 13,
    },
  },
  sectionAllocation: {
    color: '#100',
    display: 'flex',
    gap: 40,
  },
}));

interface AllocationProps {
  title: string;
  subtext: string;
}

const AssetAllocation = observer(({ title, subtext }: AllocationProps) => {
  const classes = useStyles();
  const store = useContext(StoreContext);
  const { account, tokenInfo } = store;
  // console.log(tokenInfo);

  const oi = '0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6';
  console.log(tokenInfo?.tokens.filter((symbol) => symbol.address === oi.toLowerCase()));

  //"0x3472a5a71965499acd81997a54bba8d852c6e53d"
  // console.log(account?.balances);

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
      <Box component="header" className={classes.headerAllocation}>
        <Typography variant="h2">{title}</Typography>
        <Typography variant="h6">{subtext}</Typography>
      </Box>
      <ResponsiveContainer width="100%" height="100%" className={classes.sectionAllocation}>
        <>
          <AllocationChart />
          <AllocationList />
        </>
      </ResponsiveContainer>
    </Container>
  );
});

export default AssetAllocation;
