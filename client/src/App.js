import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Landing from "./Pages/Landing";
import AdminLogin from "./Pages/AdminLogin";
import AdminView from "./Pages/AdminView";
import UserView from "./Pages/UserView";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
         <Nav />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/admin" component={AdminLogin} />
            <Route exact path="/adminView" component={AdminView} />
            <Route exact path="/userView" component={UserView} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;