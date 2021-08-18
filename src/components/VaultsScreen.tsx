import React from 'react';
import { makeStyles, Box, Checkbox } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  vaultContainer: {
    width: 935,
    height: 496,
    background: '#222222',
    border: '1px solid #111111',
    borderRadius: 8,
  },
  headerVault: {
    background: '#222222',
    display: 'flex',
  },
  alignbuttom: {
    color: 'red',
    fontSize: 13,
    position: 'absolute',
    width: '86%',
    display: 'flex',
    alignItems: 'space-between',
    justifyContent: 'space-between',
  },
}));

const VaultsScreen = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.vaultContainer}>
      <Box component="header" className={classes.headerVault}>
        <Box>
          <div className={classes.alignbuttom}>
            <Checkbox />
            <CloseIcon style={{}} />
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default VaultsScreen;
