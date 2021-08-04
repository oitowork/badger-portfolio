import React, { useContext } from 'react';
import { makeStyles, Typography, Card } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { StoreContext } from '..';
import ReactJson from 'react-json-view';
import BoostBox from './BoostBox';
import PendingBox from './PendingBox';
import Networth from './Networth';
import AssetBalances from './Balances/AssetBalances';
import StrategyBalances from './Balances/StrategyBalances';
import VaultsScreen from './VaultsScreen';
const useStyles = makeStyles((theme) => ({
  rootContainer: {
    height: '100%',
  },
  boxes: {
    width: '90%',
    marginLeft: '5%',
    height: 228,
    background: '#181818',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 33,
  },
  links: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(1),
    width: '30%',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  header: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(3),
  },
  headerPortolio: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    background: 'transparent',
  },
  chartBox: {
    display: 'flex',
  },
  anchor: {
    textDecoration: 'none',
    color: 'inherit',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    minWidth: '65px',
  },
  json: {
    margin: 'auto',
    maxWidth: '60%',
    maxHeight: '600px',
    overflow: 'auto',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '95%',
    },
  },
}));
const Portfolio = observer(() => {
  const classes = useStyles();
  const store = useContext(StoreContext);
  const { account } = store;
  const resources: Record<string, string> = {
    'API Documentation': 'https://docs.badger.finance/',
    'Portfolio Figma': 'https://www.figma.com/file/RkfjApAEdctYaKT3JgiH1M/Badger-Portfolio?node-id=0%3A1',
    'Github Repository': 'https://github.com/Badger-Finance/badger-hackathon/tree/badger-portfolio-hackathon',
  };
  return (
    <div className={classes.rootContainer}>
      <Card className={classes.headerPortolio}>
        <Networth />
        <PendingBox />
        <VaultsScreen />
        <BoostBox />
      </Card>
      <div>
        <AssetBalances />
        <StrategyBalances />
      </div>
      <Typography variant="h4" align="center" className={classes.header}>
        Badger Portfolio
      </Typography>
      {Object.entries(resources).map((res) => (
        <div key={res[0]} className={classes.links}>
          <Typography align="right">{res[0]}</Typography>
          <a href={res[1]} target="_blank" rel="noreferrer" className={classes.anchor}>
            <Typography align="left">View</Typography>
            <ExitToAppIcon />
          </a>
        </div>
      ))}
      <Typography variant="h5" align="center" className={classes.header}>
        Example Response
      </Typography>
      <div className={classes.json}>
        <ReactJson
          name={false}
          src={account ?? { loading: true }}
          theme="ashes"
          indentWidth={2}
          collapsed={1}
          sortKeys
        />
      </div>
    </div>
  );
});
export default Portfolio;
