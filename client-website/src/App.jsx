import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router ,Redirect,Route,Link,Switch} from 'react-router-dom';
import home from './components/home';

import about from './components/about';
import Navbar from './components/nav-bar';
import Login from './components/Login';
import Dashboard from './components/protected/Dashboard'
import AddHospital from './components/protected/AddHospital'
import { logout } from './helpers/auth'
import { firebaseAuth } from './config/constants'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
        </div>
      </Router>
    );
  }
}

export default App;
