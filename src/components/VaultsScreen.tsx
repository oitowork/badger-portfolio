import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
const useStyles = makeStyles((theme) => ({
  test: {
    color: 'red',
  },
}));
const VaultsScreen = () => {
  const classes = useStyles();
  return (
    <div>
      {' '}
      <Typography className={classes.test}>oiiiii</Typography>
      <Checkbox name="gilad" />
    </div>
  );
};

export default VaultsScreen;
