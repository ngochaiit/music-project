import React, { Component } from 'react';
import {Route } from "react-router-dom";
import User from '../components/User';
import ResultsPage from '../components/ResultsPage';
import Home from '../components/Home';
import Admin from '../components/Admin';
import Player from '../components/Player';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import RecordChart from '../components/RecordChart';
export default class UrlNavigator extends Component {
  render() {
    return (
        
            <div>
              <Route exact path="/" component={Home} />
              <Route exact path="/search" component={ResultsPage} />
              <Route exact path="/me" component={User} />
              <Route exact path="/track/:id" component={Player} />
              <Route exact path="/admin" component={Admin} />
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/record-chart" component={RecordChart} />
            </div>
      
    )
  }
}