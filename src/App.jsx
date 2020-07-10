import React from 'react';
import { Route, Switch } from 'react-router-dom';


import './App.css';

import Header from './components/Header/header';
import { Home, Sun, Water, Dog, Plants, Oneplant } from './Pages';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Sun" component={Sun} />
        <Route exact path="/Water" component={Water} />
        <Route exact path="/Dog" component={Dog} />
        <Route exact path="/Plants" component={Plants} />
        <Route exact path="/Plant" component={Oneplant} />
      </Switch>
    </div>
  );
}

export default App;
