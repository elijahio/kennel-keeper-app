import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
// import Banner from "./components/Banner";
import Landing from "./Pages/Landing";


class App extends Component {
  render() {
    return (
      <div className="App">
       <Nav />
       <Landing />
          <p className="App-intro">
             To get started, edit <code>src/App.js</code> and save to reload.
          </p>
      </div>
    );
  }
}

export default App;
