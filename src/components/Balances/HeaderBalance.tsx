import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';

const useStyle = makeStyles(() => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '100%',
    MaxHeight: '104px',
    padding: '20px 21px 31px 21px',
    background: '#1E1E1E',
    borderRadius: '16px 16px 0 0',
  },
  headerLeft: {
    '& h2': {
      color: '#fff',
      fontSize: '20px',
      lineHeight: '28px',
      marginBottom: '2.5px',
    },

    '& h5': {
      fontSize: '16px',
      lineHeight: '21px',
      color: '#747474',
    },
  },
  headerRight: {
    '& h2': {
      color: '#F2A627',
      fontWeight: 'bold',
      fontSize: '20px',
      lineHeight: '28px',
      marginBottom: '4px',
    },

    '& h5': {
      fontSize: '16px',
      lineHeight: '21px',
      color: '#747474',
    },
  },
}));

interface Props {
  title: string;
  subTitle1: string;
  subTitle2: string;
  balance: number | undefined;
}
const HeaderBalance = ({ title, subTitle1, balance, subTitle2 }: Props): JSX.Element => {
  const classes = useStyle();
  return (
    <Box component="header" className={classes.header}>
      <Box component="div" className={classes.headerLeft}>
        <Typography variant="h2" align="left">
          {title}
        </Typography>
        <Typography variant="h5" align="left">
          {subTitle1}
        </Typography>
      </Box>
      <Box component="div" className={classes.headerRight}>
        <Typography variant="h2" align="right">
          {balance?.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        </Typography>
        <Typography variant="h5" align="right">
          {subTitle2}
        </Typography>
      </Box>
    </Box>
  );
};
export default HeaderBalance;
