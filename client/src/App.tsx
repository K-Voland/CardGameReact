import React from 'react';
import logo from './logo.svg';
import './App.css';
import Kletka from './components/Pole/Kletka/Kletka';
import Pole from './components/Pole/Pole';
import store from './components/store';
import { StoreContext } from 'storeon/react'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { Panel } from './components/store/PlaerPanel';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <StoreContext.Provider value={store}>
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <Panel name={"Player1"} heal={95} />
        </Grid>
        <Grid item xs={8}>
          <Pole />
        </Grid>
        <Grid item xs={2}>
          <Panel name={"Player1"} heal={50}/>
        </Grid>
      </Grid>
    </StoreContext.Provider>
  );
}

export default App;
