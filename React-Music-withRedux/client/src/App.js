import React, { Component } from 'react';
import UrlNavigator from './routers/URLNav';
import { BrowserRouter as Router } from "react-router-dom";
import PlayerContainer  from './components/items/PlayerContainer';
class App extends Component {
  render() {
    return (
      <Router >
          <div className="App">
              <PlayerContainer  />
              <UrlNavigator/>
          </div>
      </Router>
    );
  }
}

export default App;
