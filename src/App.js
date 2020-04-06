import React from 'react';
import Home from './pages/home';
import Game from './pages/game';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/game'>
            <Game />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
