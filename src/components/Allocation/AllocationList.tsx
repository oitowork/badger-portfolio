import React, { useContext } from 'react';
import { List, ListItem, Avatar, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import { StoreContext } from '../../';

const useStyles = makeStyles(() => ({
  listAllocation: {
    marginTop: 15,
    '& ul': {
      color: '#000000',

      '& li': {},
    },
  },
  descriptionAllocation: {
    marginLeft: 11,
    '& h6': {
      fontSize: 16,
      color: '#FFFFFF',
    },

    '& p': {
      fontSize: 13,
      color: '#747474',
    },
  },
}));

const AllocationList = observer(() => {
  const classes = useStyles();
  const store = useContext(StoreContext);
  const { account, tokenInfo } = store;

  return (
    <Box component="div" className={classes.listAllocation}>
      <List disablePadding={true}>
        <ListItem disableGutters={true}>
          <Avatar src="https://app.badger.finance/assets/icons/badger.png" alt="test" />
          <Box component="div" className={classes.descriptionAllocation}>
            <Typography variant="h6">name</Typography>
            <Typography variant="body1">33%</Typography>
          </Box>
        </ListItem>
      </List>
    </Box>
  );
});

export default AllocationList;
