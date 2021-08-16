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

const StrategyAllocation = observer(({ title, subtext }: AllocationProps) => {
  const classes = useStyles();
  const store = useContext(StoreContext);
  const { account } = store;

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

export default StrategyAllocation;
