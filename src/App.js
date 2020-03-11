import React, { Component } from 'react'
import {
  Router,
  Switch,
  Route,
  Redirect 
} from "react-router-dom";
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';
import './assets/css/bootstrap.min.css';
import './assets/css/font-awesome.min.css';
import HowItWorks from './Pages/HowItWorks';
import Home from './Pages/Home';
import Profile from './User/Profile';
import Login from './Auth/Login';
import Register from './Auth/Register';
import './App.css';
import { history } from './history';

class App extends Component {
  render() {
    return (
    <Router history={history}>
      <div className="App">
        <Header></Header>
            <div>
              <Switch>
                <Route path="/index">
                  <Home />
                </Route>
                <Route path="/HowItWorks">
                  <HowItWorks />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/register">
                  <Register />
                </Route>
                <Route path="/profile">
                  <Profile />
                </Route>
                <Redirect exact from="/" to="/index" />
              </Switch>
            </div>
        <Footer></Footer>
      </div>
    </Router>
    )
  }
}

export default App;
