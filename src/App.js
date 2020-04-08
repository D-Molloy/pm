import React from 'react';
import Nav from './components/Nav';
import Home from './pages/Home';
import Game from './pages/Game';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
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
