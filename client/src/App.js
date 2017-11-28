import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
// import Banner from "./components/Banner";
import Landing from "./Pages/Landing";
import AdminLogin from "./Pages/AdminLogin";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
         <Nav />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/admin" component={AdminLogin} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;