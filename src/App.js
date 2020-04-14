import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Game from './pages/Game';
import './App.css';

export const UserContext = React.createContext();

const initialUser = {
  name: '',
  image: '',
};

function App() {
  const [user, setUser] = useState(initialUser);

  return (
    <Router>
      <div className='App'>
        <UserContext.Provider value={{ user, setUser }}>
          <Nav />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/game'>
              <Game />
            </Route>
          </Switch>
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
