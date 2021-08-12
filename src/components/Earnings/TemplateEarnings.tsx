import React from 'react';
import { makeStyles, Typography, Button, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import Box from '@material-ui/core/Box';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
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
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 140,
    height: 40,
    borderRadius: 4,
    padding: '0 11px',
    border: '1px solid #000000',
    background: '#101010 !important',
    '& h6': {
      color: '#fff !important',
      fontFamily: 'IBM Plex Sans',
      fontSize: 13,
      textTransform: 'none !important',
      fontWeight: 'bold',
    },
  },

  buttonList: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#222222',
    height: 40,
    borderRadius: 10,

    '& button': {
      width: 51,
      height: 40,
      background: '#222222',
      color: '#888888',
      padding: 0,
      fontSize: 13,
      '&:first-child': {
        borderRadius: '10px 0 0 10px',
        color: '#fff',
      },
      '&:last-child': {
        borderRadius: '0px 10px 10px 0',
      },
    },
    '& .MuiBottomNavigationAction-root.Mui-selected': {
      fontSize: 13,
      background: '#111111',
      color: '#888888',
      border: '1px solid #000000',
      padding: 0,
    },
  },
}));
const TemplateEarnings = observer(() => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
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
        <Button className={classes.buttonEarnings}>
          <Typography variant="h6">All Sett Vaults</Typography>
          <KeyboardArrowDownOutlinedIcon style={{ fontSize: 12, color: '#707070' }} />
        </Button>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.buttonList}
        >
          <BottomNavigationAction label="1D" />
          <BottomNavigationAction label="1W" />
          <BottomNavigationAction label="1M" />
          <BottomNavigationAction label="1Y" />
          <BottomNavigationAction label="All time" />
        </BottomNavigation>
      </Box>
    </Box>
  );
});
export default TemplateEarnings;
