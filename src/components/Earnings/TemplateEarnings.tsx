import React from 'react';
import { makeStyles, Typography, Button } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import Box from '@material-ui/core/Box';
const useStyles = makeStyles((theme) => ({
  box: {
    overflow: 'hidden',
    background: '#2B2B2B',
    minHeight: 710,
    maxWidth: 1224,
    borderRadius: 16,
    boxSizing: 'border-box',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex start',
    padding: 24,
  },
  headerEarnings: {
    height: 68,
    background: '#2B2B2B',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 25px',
  },
  headerRight: {
    '& h1': {
      color: '#F2A627',
    },
    '& h2': {
      color: '#FFFFFF',
    },
  },
  title: {
    marginBottom: 8,
    fontFamily: 'IBM Plex Sans',
    fontSize: 20,
    color: '#FFFFFF',
    [theme.breakpoints.down(400)]: {
      fontSize: 16,
    },
  },
  subtitle: {
    fontFamily: 'IBM Plex Sans',
    fontSize: 13,
    color: '#747474',
    [theme.breakpoints.down(400)]: {
      fontSize: 8,
    },
  },
  buttonEarnings: {
    width: 140,
    height: 40,
    borderRadius: 4,
    border: '1px solid #000000',
    background: '#101010 !important',
    '& h3': {
      color: '#fff !important',
      fontFamily: 'IBM Plex Sans',
      fontSize: 13,
      textTransform: 'none !important',
    },
  },
  buttonRight: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    background: '#222222',
    color: '#fff',
    '& button': {
      color: '#888888 !important',
      fontFamily: 'IBM Plex Sans',
      fontSize: 13,
      textTransform: 'none !important',
    },
  },
}));
const TemplateEarnings = observer(() => {
  const classes = useStyles();
  return (
    <Box component="section" className={classes.box}>
      <Box component="header" className={classes.headerEarnings}>
        <Box component="div">
          <Typography variant="h1" align="left" className={classes.title}>
            Earnings from sett vaults
          </Typography>
          <Typography variant="h2" align="left" className={classes.subtitle}>
            Compounding and $BADGER rewards
          </Typography>
        </Box>
        <Box component="div" className={classes.headerRight}>
          <Typography variant="h1" align="right" className={classes.title}>
            $1,434.66
          </Typography>
          <Typography variant="h2" align="right" className={classes.subtitle}>
            271.14 $BADGER
          </Typography>
        </Box>
      </Box>
      <Box component="div" className={classes.headerEarnings}>
        <Button variant="contained" disabled className={classes.buttonEarnings}>
          <h3>All Sett Vaults</h3>
        </Button>
        <Box component="div" className={classes.headerRight}>
          <ul className={classes.buttonRight}>
            <li>
              <Button>1D</Button>
            </li>
            <li>
              <Button>1W</Button>
            </li>
            <li>
              <Button>1M</Button>
            </li>
            <li>
              <Button>1Y</Button>
            </li>
            <li>
              <Button>All Time</Button>
            </li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
});
export default TemplateEarnings;
