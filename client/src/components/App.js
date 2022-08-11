import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Login from './Login';

const Dashboard = () =>   <div className="card-panel lighten-2"><h2>Dashboard</h2></div>;
const SurveyNew = () => <div className="card-panel lighten-2"><h2>Survey New</h2></div>;
const Landing = () => <div className="card-panel lighten-2"><h2>Landing</h2></div>;

class App extends Component {
  componentDidMount() {
    this.props?.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header/>
            <Route exact path={'/'} component = {Landing}/>
            <Route exact path={'/surveys'} component = {Dashboard} />
            <Route exact path={'/login'} component = {Login} />
            <Route path={'/survey/new'} component = {SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
