import React, { Component } from 'react';
import './App.css';
import GrommetApp from 'grommet/components/App';
import { Box } from 'grommet';

import './assets/grommet.min.css';

import Home from './components/Home';
import NavBar from './components/NavBar';
import Player from './components/Player';
import SearchResults from './components/SearchResults';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <GrommetApp centered={false}>
          <NavBar/>
          <Box>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/search/:query" component={SearchResults}/>
              <Route path="/play/:id" component={Player}/>
              <Route render={props => (<div>404 Not Found.</div>)} />
            </Switch>
          </Box>
        </GrommetApp>
      </Router>
    );
  }
}

export default App;
