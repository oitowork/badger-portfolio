import React from 'react';
import { makeStyles, Box, Typography, Checkbox } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
const useStyles = makeStyles((theme) => ({
  vaultContainer: {
    background: '#222222',
  },

  headerVault: {
    background: '#222222',
  },
}));
const VaultsScreen = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.vaultContainer}>
      <Box component="header" className={classes.headerVault}>
        <Box>
          <Checkbox />
          <Typography variant="h6">all set vaults</Typography>
        </Box>
      </Box>
      <CloseIcon />
    </Box>
  );
};

export default VaultsScreen;
