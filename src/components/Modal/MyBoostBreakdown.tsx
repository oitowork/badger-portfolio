import React from 'react';
import { observer } from 'mobx-react-lite';
import { StoreContext } from '../../index';
import { makeStyles, List, ListItem, Box, Typography, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 886,
    marginBottom: 44,
  },
  titleBreakdown: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'normal',
    lineHeight: '24px',
    marginBottom: 24,
  },
  containerList: {
    '& li:nth-child(2n)': {
      background: '#111111',
    },
    '& li:first-child': {
      borderRadius: '16px 16px 0 0',
    },

    '& li:last-child': {
      borderRadius: '0 0 16px 16px',
    },
  },
  listBreakdown: {
    padding: '9px 24px',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#1E1E1E',
    height: 42,
  },
  leftBreakdown: {
    color: 'pink',
    display: 'flex',
    alignItems: 'center',

    '& h6': {
      fontSize: 13,
      marginLeft: 10,
      color: '#fff',
    },
  },
  iconBreakdown: {
    width: 24,
    height: 24,
    borderRadius: 48,
    background: '#886325',
  },

  rightBreakdown: {
    fontSize: 13,
    color: '#F2A52B',
  },
}));
const MyBoostBreakdown = observer(() => {
  const classes = useStyles();
  const store = React.useContext(StoreContext);
  const { account } = store;

  return (
    <Container disableGutters className={classes.container}>
      <Typography variant="h2" className={classes.titleBreakdown}>
        My Boost Breakdown
      </Typography>
      <List disablePadding className={classes.containerList}>
        <ListItem className={classes.listBreakdown}>
          <Box component="div" className={classes.leftBreakdown}>
            <Box component="div" className={classes.iconBreakdown} />
            <Typography variant="h6">Wack-A-Badger</Typography>
          </Box>
          <Typography variant="h5" className={classes.rightBreakdown}>
            +20%
          </Typography>
        </ListItem>
        <ListItem className={classes.listBreakdown}>
          <Box component="div" className={classes.leftBreakdown}>
            <Box component="div" className={classes.iconBreakdown} />
            <Typography variant="h6">Badgerpack Joyride</Typography>
          </Box>
          <Typography variant="h5" className={classes.rightBreakdown}>
            +11%
          </Typography>
        </ListItem>
      </List>
    </Container>
  );
});
export default MyBoostBreakdown;
